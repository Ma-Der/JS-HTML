interface IUI {
    elementHtml: HTMLElement;
    display(text: string): void;
}

export class UI implements IUI {

    elementHtml: HTMLElement;

    constructor(elementHtml: HTMLElement) {
        this.elementHtml = elementHtml;
    }
    display(text: string) {
        this.elementHtml.classList.add('text');
        this.elementHtml.textContent = text;
    }
}