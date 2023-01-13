

function randomBackgroundColor(){

    let randomColor1 = Math.floor(Math.random()*256);
    let randomColor2 = Math.floor(Math.random()*256);
    let randomColor3 = Math.floor(Math.random()*256);

    let rgb = `rgb(${randomColor1},${randomColor2},${randomColor3})`

     document.body.style.background = rgb
}

const btn = document.querySelector('#btn');

btn.addEventListener('click',randomBackgroundColor)