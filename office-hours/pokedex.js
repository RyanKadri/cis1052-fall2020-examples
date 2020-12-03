const searchBox = document.querySelector("#search");

const nameParagraph = document.querySelector("#name");
const heightParagraph = document.querySelector("#height");
const weightParagraph = document.querySelector("#weight");
const typeParagraph = document.querySelector("#type");

function handleSearch() {
    const name = searchBox.value;
    searchPokemon(name);
}

function searchPokemon(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(function(response){
            response.json()
                .then(function(pokemon) {
                    console.log(pokemon)
                    nameParagraph.innerText = `Name: ${pokemon.name}`;
                    heightParagraph.innerText = `Height: ${pokemon.height}`;
                    weightParagraph.innerText = `Weight: ${pokemon.weight}`;
                    typeParagraph.innerText = `Type: ${pokemon.types[0].type.name}`;
                })
        })
}
