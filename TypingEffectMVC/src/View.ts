

export interface IView {
    text: string;
    getText(elementHTML: HTMLElement): string;
    getDelay(delay?: number): number;
    _clearHtmlElement(elementHTML: HTMLElement): void;
    displayText(text: string): void;
}

export class View implements IView {
    elementHTML: HTMLElement | null;
    text: string;
    constructor() {
        this.elementHTML = null;
        this.text = '';
    }

    _clearHtmlElement(elementHTML: HTMLElement) {
        elementHTML.textContent = null;
    }

    _setElementText(elementHTML: HTMLElement) {
        this.elementHTML = elementHTML;
    }

    getText(elementHTML: HTMLElement): string {
        this._setElementText(elementHTML);
        const text = elementHTML.innerHTML;
        this.text = text;
        this._clearHtmlElement(elementHTML);        
        return text;
    }

    getDelay(delay: number = 500) {
        return delay;
    }
    
    displayText(text: string) {
        if(this.elementHTML) this.elementHTML.classList.add('type');
        if(this.elementHTML) this.elementHTML.innerHTML = `<span class='text'>${text}</span>`;
    }
}