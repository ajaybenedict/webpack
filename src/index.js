import display from './helloWorld';
import addImage from './images';
import Button from './components/Button';
import Heading from './components/Heading'

display();
addImage();

const buttonObj = new Button();
buttonObj.render();

const headingObj = new Heading();
headingObj.render();

//ES 6 to ES5
const multiply = (a,b) => {
    let c = a * b;
    console.log('result:' + c);
}

multiply(6, 3);