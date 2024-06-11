import oceanImage from './ocean.jpg';

function addImage() {
    const img = document.createElement('img');
    img.src=oceanImage;
    const body = document.querySelector('body');
    body.append(img);
}

export default addImage;