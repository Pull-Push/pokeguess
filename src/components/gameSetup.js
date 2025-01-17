import React from "react";

import getPokemon from "../data/getPokemon";

function gameStart() {
    return getPokemon().then((pokemon) => {
        let savedPokemon = null;
        let pokeObject = {
            'id':'',
            'name': "",
            'height':'',
            'weight':'',
            'sprite':'',
            'types':[],
}
        savedPokemon = pokemon;
        // console.log('Saved Pokémon:', savedPokemon);
        pokeObject.id = pokemon.id;
        pokeObject.name = pokemon.name.toUpperCase();
        pokeObject.height = pokemon.height / 10;
        pokeObject.weight = pokemon.weight / 10 ;
        pokeObject.sprite = pokemon.sprites.front_default;
        pokeObject.types = pokemon.types;



        //fix only one type error and sanitize
        if(!pokeObject.types[1]){
            let second = {
                'slot': 2,
                'type':{
                    'name':'NONE'
                }
            }
            pokeObject.types[0].type.name = pokeObject.types[0].type.name.toUpperCase();
            pokeObject.types.push(second)
        }else{
            pokeObject.types[0].type.name = pokeObject.types[0].type.name.toUpperCase();
            pokeObject.types[1].type.name = pokeObject.types[1].type.name.toUpperCase();
        }

        // console.log('Accessing savedPokemonObject later:', pokeObject);
        // console.log(`pokemon type 1`, pokeObject.types[0].type.name)
        // console.log(`pokemon type 2`, pokeObject.types[1].type.name)
        return pokeObject;
    });
}

// // Outside code must wait or be inside the .then()
// setTimeout(() => {
//     console.log('Accessing savedPokemonObject later:', pokeObject);
//     console.log(`pokemon type 1`, pokeObject.types[0].type.name)
//     console.log(`pokemon type 2`, pokeObject.types[1].type.name)

// }, 1000); // Wait to ensure the Promise resolves

export default gameStart