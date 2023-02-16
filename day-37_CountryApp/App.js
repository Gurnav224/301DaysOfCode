

var url = 'https://restcountries.com/v2/all';

fetch(url)
.then((response)=>response.json())
.then((country)=>{

    let div;
    console.log(country[0]);
    
    for(let i=0; i<country.length; i++){
        


        let name = country[i].name;
        let nativeName  = country[i].nativeName;
        let alpha3codes = country[i].alpha3Code;
        let flag = country[i].flags.svg;
        let Capital = country[i].capital;
        let region = country[i].region;
        let calling_Codes = country[i].callingCodes;
        let population = country[i].population;
        let language1 = country[i].languages[0].name;
        let area  = country[i].area;
        let timezone = country[i].timezones;
        let border = country[i].borders;
        let translation = country[i].translations.br;
        let translation2 = country[i].translations.pt;
        let translation3 = country[i].translations.nl;
          if(border === undefined){
            border = " Data not available"
          }
 
        div = document.createElement('div');
      
        div.className = 'country'

        div.innerHTML = `
            <img src="${flag}" alt="Country not available">
            <h1>${name}<span>(${alpha3codes})</span></h1>
            <h1>${nativeName}</h1>
            <h2>Capital: ${Capital}</h2>
            <h2>Region: ${region}</h2>
            <h2>CallingCode: ${calling_Codes}</h2>
            <h2>Population: ${population}</h2>
            <h2>language: ${language1}</h2>
            <h2>Area: ${area}</h2>
            <h2>Border: ${border}</h2>
            <h2>TIMEZONE: ${timezone}</h2>
            <h2>Transaltions: ${translation},${translation2},${translation3}</h2>

        `

        document.body.appendChild(div)
    }

    
    
})


