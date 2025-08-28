const buttn = document.getElementById("btn");
const quotee = document.getElementById("quote");
const author_ = document.getElementById("author");

const api = "https://api.quotable.io/random";

async function getQuote() {
    try {
        buttn.innerText = "Loading...";
        buttn.disabled = true;
        quotee.innerText = "Updating...";
        author_.innerText = "Updating...";

        const response = await fetch(api);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;

        quotee.innerText = quoteContent;
        author_.innerText = "-" + quoteAuthor;
        buttn.innerText = "Get a quote";
        buttn.disabled = false;
        console.log(data);
    }
    catch (error) {
        console.log(error);
        quotee.innerText = "An error occur, try again later";
        author_.innerText = "An error occured";
        buttn.innerText = "Get a quote";
        buttn.disabled = false;
    }
}
getQuote();
buttn.addEventListener("click", getQuote)