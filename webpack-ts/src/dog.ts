export function dog(woof) {
    console.log(woof)
}

export function addH1() {
    const h1Element = document.createElement('div');
    h1Element.innerHTML = `Hello my dear friend. :)`;
    const welcome = document.getElementById('welcome') as HTMLElement;
    welcome.appendChild(h1Element);
    welcome.classList.add('welcome')
}