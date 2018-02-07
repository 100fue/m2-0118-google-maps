const express = require('express');
const router = express.Router();
const {getPokemon, getPokemonArray} = require('../lib/poke');

/* GET home page. */
router.get('/', function (req, res, next) {
  getPokemonArray().then(pokemons => {
    res.render('index', { title: 'Express', pokemons });
  })
});

router.get('/poke-ejemplo/:poke_id', (req, res) => {
  // Ask for a pokemon
  const id = req.params.poke_id;
  console.log(`Requesting pokemon ${id}`);
  getPokemon(id).then(pokemon => {
    res.render('poke_ejemplo', { pokemon })
  })
})

module.exports = router;
