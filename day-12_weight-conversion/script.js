



function weightConvert(){
    let input = document.querySelector('#inputWeight').value;
    let kilogram = input*0.453592;

    document.querySelector("#showWeight").innerHTML = Math.floor( kilogram) + " Kg";

}


const btn = document.querySelector("#btn");


btn.addEventListener('click',weightConvert,false);
