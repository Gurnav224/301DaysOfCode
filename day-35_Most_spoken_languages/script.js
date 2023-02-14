const languages = [
  {
    name: "Mandarin Chinese",
    location: "Mainland China",
    speakers: 918000000,
  },
  {
    name: "Spanish",
    location: "Mexico, Central and South America, Spain",
    speakers: 460000000,
  },
  {
    name: "English",
    location: "United States, United Kingdom, Australia, Canada, New Zealand",
    speakers: 379000000,
  },
  {
    name: "Hindi",
    location: "India, Nepal",
    speakers: 341000000,
  },
  {
    name: "Arabic",
    location: "Middle East, North Africa",
    speakers: 315000000,
  },
  {
    name: "Portuguese",
    location: "Brazil, Portugal, Angola, Mozambique",
    speakers: 229000000,
  },
  {
    name: "Bengali",
    location: "Bangladesh, India",
    speakers: 228000000,
  },
  {
    name: "Russian",
    location: "Russia, Kazakhstan, Belarus",
    speakers: 154000000,
  },
  {
    name: "Japanese",
    location: "Japan",
    speakers: 128000000,
  },
  {
    name: "Punjabi",
    location: "India, Pakistan",
    speakers: 119000000,
  },
];


let names = document.querySelector('.name');

let language = document.querySelector('.location');

let speaker = document.querySelector('.population');

let country = document.querySelector('.country')


for(let i=0; i<languages.length; i++){
  
console.log(languages[i].name,languages[i].location,languages[i].speakers);



country.innerHTML += `

 <div class="country-card">
<h2 class="name">${languages[i].name}</h2>
<h3 class="location">${languages[i].location}</h3>
<p class="population">${languages[i].speakers}
 </div>

 `


}