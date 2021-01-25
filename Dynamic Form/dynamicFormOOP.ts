type tagType = "header" | "email" | "textarea" | "submit";

type tagInput = {
    type: tagType;
    name?: string;
    label?: string;
    placeholder?: string;
};
   
interface ISettings {
    action: string;
    method: string;
    inputs: tagInput[];
}
   
const testSettings: ISettings = {
    action: "http://127.0.0.1:5500/contact/by-mail",
    method: "POST",
    inputs: [
        { type: "header", label: "Skontaktuj się z nami" },
        { name: "email", type: "email", placeholder: "Wpisz swój email" },
        { name: "content", type: "textarea", placeholder: "Wpisz treść wiadomości"},
        { type: "submit", label: "Wyślij wiadomość" }
    ]
};

class FormGenerator{
    form: HTMLFormElement;
    settings: ISettings;

    constructor(settings: ISettings){
        this.form = document.createElement('form');
        this.settings = settings;
    }

    assert(condition: boolean, message: string) {
        if(!condition) throw new Error(message);
    }

    tagIn(tag: tagInput, wrapper: HTMLFormElement): HTMLElement | undefined {
        let header: HTMLHeadingElement;
        let email: HTMLInputElement;
        let textarea: HTMLTextAreaElement;
        let submit: HTMLButtonElement;
    
        const defaults = {
            'header':{
                label: 'Tu wpisz tytuł formularza'
            },
            'email': {
                name: 'email',
                placeholder: 'Your @email',
                label: ''
            },
            'textarea': {
                name: 'Your content',
                placeholder: 'Your text',
            },
            'submit': {
                name: 'Twoja nazwa',
                label: "Submit"
            }
        }
    
        switch (tag.type) {
            case "header":
                header = document.createElement("h4");
                tag.label ? header.innerHTML = tag.label : header.innerHTML = defaults.header.label;   
            return wrapper.appendChild(header);
    
            case "email":
                email = document.createElement("input");
                email.setAttribute("type", "email");
    
                tag.name ? email.setAttribute("name", tag.name) : email.setAttribute("name", defaults.email.name);
                tag.placeholder ? email.setAttribute("placeholder", tag.placeholder) : email.setAttribute("placeholder", defaults.email.placeholder);
                tag.label ? email.innerHTML = tag.label : email.innerHTML = defaults.email.label;
        
                return wrapper.appendChild(email);
    
            case "textarea":
                textarea = document.createElement("textarea");
                tag.name ? textarea.setAttribute("name", tag.name) : textarea.setAttribute("name", defaults.textarea.name);
                tag.placeholder ? textarea.setAttribute("placeholder", tag.placeholder) : textarea.setAttribute("placeholder", defaults.textarea.placeholder);
        
                return wrapper.appendChild(textarea);
    
            case "submit":
                submit = document.createElement("button");
                submit.setAttribute("type", "submit");
                tag.name ? submit.setAttribute("name", tag.name) : submit.setAttribute("name", defaults.submit.name);
                tag.label ? submit.innerHTML = tag.label : submit.innerHTML = defaults.submit.label;
        
                return wrapper.appendChild(submit);
        }
    
    }

    generateForm(): HTMLFormElement {
        const regExp = new RegExp(/\b((?:[a-z][\w\-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i);
        if(!regExp.test(this.settings.action)) throw new Error('FALSE');
        if(!(this.settings.method === "GET" || this.settings.method === "POST")) throw new Error("Method HTML attribute can be only GET or POST");
    
        this.form.setAttribute("action", this.settings.action);
        this.form.setAttribute("method", this.settings.method);
       
        for (const key in this.settings.inputs) {
            this.tagIn(this.settings.inputs[key], this.form);
            this.assert(this.tagIn !== undefined, 'One of the tag is undefined.');
        }
    
        this.assert(regExp.test(this.settings.action), 'There is wrong URL in form action attribute.');
        
        return this.form;
    }
}

const formGenerator = new FormGenerator(testSettings);
document.body.appendChild(formGenerator.generateForm());