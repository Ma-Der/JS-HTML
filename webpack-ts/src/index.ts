import { dog, addH1 } from './dog';

const age: number = 99;
console.log(age)

const obj = {
    one: {
        two: 'awooo',
    },
}

function woof(noise: any) {
    console.log(noise.one.two)
}

woof(obj);

dog(obj.one.two)

addH1();



