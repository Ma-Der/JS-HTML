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
    typeWrite(): void;
    deleteTyping(): void;
    typeWords(): void;
    deleteWords(): void;
  }
  
  export class Model implements IModel {
    delayTime: number;
    elementText: string;
    text: string;
    wordsArray: string[];
    words: string[];
    index: number;
  
    constructor() {
      this.delayTime = this.setDelay();
      this.elementText = "";
      this.text = "";
      this.wordsArray = [];
      this.words = [];
      this.index = 0;
    }
  
    setText(text: string) {
      this.elementText = text;
    }
  
    setWordsArray(text: string) {
      this.wordsArray = text.split(" ");
    }
  
    setDelay(delay: number = 500): number {
      this.delayTime = 60000 / delay;
      return 60000 / delay;
    }
  
    typeWrite() {
      this.text = this.elementText.slice(0, ++this.index);
    }
  
    deleteTyping() {
      this.text = this.elementText.slice(0, --this.index);
    }
  
    typeWords() {
      this.words = this.wordsArray.slice(0, ++this.index);
    }
  
    deleteWords() {
      this.words = this.wordsArray.slice(0, --this.index);
    }
  }
  