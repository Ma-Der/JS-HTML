import { IController, Controller } from "./Controller";
import { IModel, Model } from "./Model";
import { IView, View } from "./View";

export interface ITypingEffect {
  isWords: boolean;
  controller: IController;
  view: IView;
  model: IModel;
  startType(): void;
}

export class TypingEffect implements ITypingEffect {
  isWords: boolean;
  controller: IController;
  view: IView;
  model: IModel;

  constructor(elementHTML: HTMLElement, isWords = false) {
    this.isWords = isWords;
    this.view = new View();
    this.model = new Model();
    this.view.getText(elementHTML);

    this.controller = new Controller(this.model, this.view);
  }

  startType() {
    if (this.isWords === false) {
      this.controller.typeForward();
    } else {
      this.controller.typeWordsForward();
    }
  }
}
