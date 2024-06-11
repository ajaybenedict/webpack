import './heading.scss';

class Heading {
    render() {
        const heading = document.createElement('h1');
        heading.innerHTML = 'Hello AJ';
        heading.classList.add('grey-heading');
        const body = document.querySelector('body');
        body.append(heading);
    }
}

export default Heading;