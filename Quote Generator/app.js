const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiurl = "https://api.quotable.io/random";

async function getquote() {
  const response = await fetch(apiurl);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function whatsapp(){
    window.open("https://wa.me/?text=" + quote.innerHTML + " ---by " + author.innerHTML)
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---by " + author.innerHTML);
}

document.getElementById("new-quote").addEventListener("click", getquote);
document.getElementById("whatsapp").addEventListener("click", whatsapp);
document.getElementById("tweet").addEventListener("click", tweet);
getquote();
