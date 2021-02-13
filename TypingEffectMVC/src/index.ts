import { Controller } from './Controller';
import { Model } from './Model';
import { View } from './View';



const typeWriter = document.getElementById('typeWriter') as HTMLElement;

const view = new View();
view.getText(typeWriter);

const app = new Controller(new Model(), view);
app.type();
