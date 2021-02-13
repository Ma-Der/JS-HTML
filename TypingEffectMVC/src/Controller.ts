import { IModel } from './Model';
import { IView } from './View';


export class Controller {
    model: IModel;
    view: IView;
    isWords: boolean;

    constructor(model: IModel, view: IView) {
        this.model = model;
        this.view = view;
        this.isWords = false;
    }
    
    type() {
        this.model.setText(this.view.text);
        this.model.setWordsArray(this.view.text);
        this.model.setDelay(this.view.getDelay());
        if(this.isWords === false){
            setInterval(() => this.view.displayText(this.model.typeWrite()), this.model.delayTime);            
        } else {
            setInterval(() => this.view.displayText(this.model.typeWords()), this.model.delayTime);
        }
    }
}