import { TypingEffect } from './TypingEffect';

interface ITyped {
    elementHtml: HTMLElement;
    delayTime: number;
    isWords: boolean;
    type(): void;
}

export class Typed implements ITyped {

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