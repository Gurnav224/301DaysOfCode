

let textArea = document.getElementById('text');

let speakButton = document.getElementById("speak-button");


speakButton.addEventListener("click",function(){

    let texta = textArea.value;


    let utterance = new SpeechSynthesisUtterance();

    utterance.text = texta;

    utterance.voice = window.speechSynthesis.getVoices()[0];


    window.speechSynthesis.speak(utterance)

});