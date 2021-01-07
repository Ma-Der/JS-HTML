var testSettings = {
    action: "/contact/by-mail",
    method: "POST",
    inputs: [
        { type: "header", label: "Skontaktuj się z nami" },
        { name: "email", type: "email", placeholder: "Wpisz swój email" },
        { name: "content", type: "textarea", placeholder: "Wpisz treść wiadomości" },
        { type: "submit", label: "Wyślij wiadomość" }
    ]
};
function tagIn(tag, wrapper) {
    var tagS;
    switch (tag.type) {
        case "header":
            tagS = document.createElement("h4");
            if (tag.name)
                tagS.setAttribute("name", tag.name);
            if (tag.placeholder)
                tagS.setAttribute("placeholder", tag.placeholder);
            if (tag.label)
                tagS.innerHTML = tag.label;
            return wrapper.appendChild(tagS);
        case "email":
            tagS = document.createElement("input");
            if (tag.name)
                tagS.setAttribute("name", tag.name);
            if (tag.placeholder)
                tagS.setAttribute("placeholder", tag.placeholder);
            if (tag.label)
                tagS.innerHTML = tag.label;
            return wrapper.appendChild(tagS);
        case "textarea":
            tagS = document.createElement("textarea");
            if (tag.name)
                tagS.setAttribute("name", tag.name);
            if (tag.placeholder)
                tagS.setAttribute("placeholder", tag.placeholder);
            if (tag.label)
                tagS.innerHTML = tag.label;
            return wrapper.appendChild(tagS);
        case "submit":
            tagS = document.createElement("button");
            tagS.setAttribute("type", "submit");
            if (tag.name)
                tagS.setAttribute("name", tag.name);
            if (tag.placeholder)
                tagS.setAttribute("placeholder", tag.placeholder);
            if (tag.label)
                tagS.innerHTML = tag.label;
            return wrapper.appendChild(tagS);
    }
}
function generateFormOnPattern(settings) {
    var form = document.createElement("form");
    form.setAttribute("action", settings.action);
    form.setAttribute("method", settings.method);
    document.body.appendChild(form);
    for (var key in settings.inputs) {
        tagIn(settings.inputs[key], form);
    }
}
generateFormOnPattern(testSettings);
