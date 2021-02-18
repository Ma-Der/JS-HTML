import { IModel } from "./Model";
import { IView } from "./View";

export interface IController {
  model: IModel;
  view: IView;
  typeForward(): void;
  typeBackward(): void;
  typeWordsForward(): void;
  typeWordsBackwards(): void;
  setupModel(): void;
}

export class Controller {
  model: IModel;
  view: IView;

  constructor(model: IModel, view: IView) {
    this.model = model;
    this.view = view;
    this.setupModel();
  }

  typeForward() {
    if (this.model.index < this.model.elementText.length) {
      this.model.typeWrite();
      setTimeout(() => this.typeForward(), this.model.delayTime);
    } else {
      this.typeBackward();
    }
    this.view.displayText(this.model.text);
  }

  typeBackward() {
    if (this.model.index > 0) {
      this.model.deleteTyping();
      setTimeout(() => this.typeBackward(), this.model.delayTime);
    } else {
      this.typeForward();
    }
    this.view.displayText(this.model.text);
  }

  typeWordsForward() {
    if (this.model.index < this.model.wordsArray.length) {
      this.model.typeWords();
      setTimeout(() => this.typeWordsForward(), this.model.delayTime);
    } else {
      this.typeWordsBackwards();
    }
    this.view.displayText(this.model.words.join(" "));
  }

  typeWordsBackwards() {
    if (this.model.index > 0) {
      this.model.deleteWords();
      setTimeout(() => this.typeWordsBackwards(), this.model.delayTime);
    } else {
      this.typeWordsForward();
    }
    this.view.displayText(this.model.words.join(" "));
  }

  setupModel() {
    this.model.setText(this.view.text);
    this.model.setWordsArray(this.view.text);
    this.model.setDelay(this.view.getDelay());
  }
}
