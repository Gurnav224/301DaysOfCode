
const ConvertBtn = document.querySelector('.ConverterBtn');



// function TempConverter() {
//     const TempValue = document.querySelector('#CelsiusInput').value;

//     let fahrenheit = TempValue*(9/5)+32;

//     document.querySelector("#showFahrenheitTemp").innerHTML = fahrenheit;


// }


    

let TempConverter = (event) => {

    const TempValue = document.querySelector('#CelsiusInput').value;

     let  fahrenheit = TempValue*(9/5)+32;

       document.querySelector("#showFahrenheitTemp").innerHTML = Math.floor(fahrenheit) + " fahrenheit";

       
}


ConvertBtn.addEventListener('click', TempConverter,false);




