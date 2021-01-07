interface ITypingEffect {
    elementHtml: HTMLElement;
    delayTime: number;
    elementText: string;
    text: string;
    wordsArray: string[];
    words: string[];
    index: number;
    clearHtmlElement(): void;
    typeWrite(): void;
    deleteTyping(): void;
    typeWords(): void;
    deleteWords(): void;
    show(text: string): void;
}

class TypingEffect implements ITypingEffect {

    elementHtml: HTMLElement;
    delayTime: number;
    elementText: string;
    text: string;
    wordsArray: string[];
    words: string[];
    index: number;

    constructor(elementHtml: HTMLElement, delayTime: number) {
        this.elementHtml = elementHtml;
        this.delayTime = delayTime;
        this.elementText = this.elementHtml.innerHTML;
        this.text = '';
        this.wordsArray = this.elementText.split(' ');
        this.words = [];
        this.index = 0;
        this.clearHtmlElement();
    }

    clearHtmlElement() {
        this.elementHtml.textContent = null;
    }

    typeWrite() {
            if(this.index < this.elementText.length) {
                this.text = this.elementText.slice(0, ++this.index);
                setTimeout(() => this.typeWrite(), this.delayTime);
            } else  {
                this.deleteTyping();
            }
            this.show(this.text);
    }

    deleteTyping() {
            if(this.index > 0) {
                this.text = this.elementText.slice(0, --this.index)
                setTimeout(() => this.deleteTyping(), this.delayTime);
            }
            else {
               this.typeWrite();
            }
            this.show(this.text);
    }

    typeWords() {
        if(this.index < this.wordsArray.length) {
            this.words = this.wordsArray.slice(0, ++this.index);
            setTimeout(() => this.typeWords(), this.delayTime);
        } else {
            this.deleteWords();
        }

        this.show(this.words.join(' '));
    }

    deleteWords() {
        if(this.index > 0) {
            this.words = this.wordsArray.slice(0, --this.index);
            setTimeout(() => this.deleteWords(), this.delayTime);
        }
        else {
            this.typeWords();
        }

        this.show(this.words.join(' '));
    }

    show(text: string) {
        const userInterface = new UI(this.elementHtml);
        userInterface.display(text);
    }
}

interface ITyped {
    elementHtml: HTMLElement;
    delayTime: number;
    isWords: boolean;
    type(): void;
}

class Typed implements ITyped {

    elementHtml: HTMLElement;
    delayTime: number;
    isWords: boolean;

    constructor(elementHtml: HTMLElement, letterPerMinute: number = 500, isWords: boolean = false) {
        this.elementHtml = elementHtml;
        this.delayTime = 60000/letterPerMinute;
        this.isWords = isWords;
        this.type();
    }

    type() {
        const typinEffect = new TypingEffect(this.elementHtml, this.delayTime);

        if(this.isWords === false) {
            typinEffect.typeWrite();
        } else {
            typinEffect.typeWords();
        }
    }
}

interface IUI {
    elementHtml: HTMLElement;
    display(text: string): void;
}

class UI implements IUI {

    elementHtml: HTMLElement;

    constructor(elementHtml: HTMLElement) {
        this.elementHtml = elementHtml;
    }
    display(text: string) {
        this.elementHtml.classList.add('type');
        this.elementHtml.innerHTML = `<span class='text'>${text}</span>`;
    }
}


const typeWriter = document.querySelector('#typeWriter') as HTMLElement;
const krol = document.querySelector('#krol') as HTMLElement;

    new Typed(typeWriter, 100, true);    
    new Typed(krol, 200);