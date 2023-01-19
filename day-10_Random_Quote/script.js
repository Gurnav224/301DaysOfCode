
const text = document.getElementById('quote');
const author = document.getElementById('author');
const tweetButton = document.getElementById('tweet');



const getNewQuote = async () =>{

    var url = "https://type.fit/api/quotes";

    const response = await fetch(url);

    const allQuotes = await response.json();

    const index = Math.floor(Math.random()*allQuotes.length);

    const quote = allQuotes[index].text;
    const auth = allQuotes[index].author;

    if(auth==null){
        author="Anonymous"
    }

    text.innerHTML = quote;

    author.innerHTML = " ~ " + auth;
    
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
 

}

getNewQuote();