const header = document.querySelector("#my-joke");

fetch("http://api.icndb.com/jokes/random")
    .then((resp) => resp.json())
    .then(data => {
        header.innerText = data.value.joke
    })