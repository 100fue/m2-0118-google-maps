const axios = require('axios');


const getPokemon = (p) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${p.id}/`)
        .then((response) => {
            console.log("EL THEN");
            return {
                name: response.data.name,
                imgUrl: response.data.sprites.front_default,
                loc: p.location
            }
        })
        .catch((error) => {
            console.log("EL CATCH");
        });
}


let pokemons = [
    {
        id: 151,
        location: {
            lat: 40.391433,
            lng: -3.685178
        }
    },
    {
        id: 25,
        location: {
            lat: 40.409400,
            lng: -3.692714
        }
    },
    {
        id: 68,
        location: {
            lat: 40.417262,
            lng: -3.703529
        }
    }
]


const getPokemonArray = () => {
    return Promise.all(pokemons.map(p => getPokemon(p)))
}

module.exports = {
    getPokemonArray,
    getPokemon
}