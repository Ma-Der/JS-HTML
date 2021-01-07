import { Typed }  from './Typed';

const typeWriter = document.querySelector('#typeWriter') as HTMLElement;
const krol = document.querySelector('#krol') as HTMLElement;

    new Typed(typeWriter, 100, true);    
    new Typed(krol, 200);