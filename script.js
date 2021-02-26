const myQuote = document.getElementById("quote");
const author = document.getElementById("nameAuthor");

fetch("https://thatsthespir.it/api")
    .then(element => {
        if (element.ok) {
            element.json().then(data => {
                myQuote.innerHTML = data.quote;
                author.innerHTML = ` <br> ${data.author}`;
            });
        } else {
            console.log("error");
        }
    })