
export interface IModel {
    delayTime: number;
    elementText: string;
    text: string;
    wordsArray: string[];
    words: string[];
    index: number;
    setText(text: string): void;
    setWordsArray(text: string): void;
    setDelay(delay?: number): void;
    typeWrite(): string;
    deleteTyping(): string;
    typeWords(): string;
    deleteWords(): string;
}

export class Model {

    delayTime: number;
    elementText: string;
    text: string;
    wordsArray: string[];
    words: string[];
    index: number;

    constructor() {
        this.delayTime = this.setDelay();
        this.elementText = '';
        this.text = '';
        this.wordsArray = [];
        this.words = [];
        this.index = 0;
    }

    setText(text: string) {
        this.elementText = text;
        return text;
    }

    setWordsArray(text: string) {
        this.wordsArray = text.split(' ');
    }

    setDelay(delay: number = 500): number {
        this.delayTime = 60000/delay;
        return 60000/delay;
    }

    typeWrite() {
            if(this.index < this.elementText.length) {
                this.text = this.elementText.slice(0, ++this.index);
                setTimeout(() => this.typeWrite(), this.delayTime);
            } else  {
                this.deleteTyping();
            }
            return this.text;
    }

    deleteTyping() {
            if(this.index > 0) {
                this.text = this.elementText.slice(0, --this.index)
                setTimeout(() => this.deleteTyping(), this.delayTime);
            }
            else {
               this.typeWrite();
            }
            return this.text;
    }

    typeWords() {
        if(this.index < this.wordsArray.length) {
            this.words = this.wordsArray.slice(0, ++this.index);
            setTimeout(() => this.typeWords(), this.delayTime);
        } else {
            this.deleteWords();
        }
        return this.words.join(' ');

    }

    deleteWords() {
        if(this.index > 0) {
            this.words = this.wordsArray.slice(0, --this.index);
            setTimeout(() => this.deleteWords(), this.delayTime);
        }
        else {
            this.typeWords();
        }
        return this.words.join(' ');
    }
}