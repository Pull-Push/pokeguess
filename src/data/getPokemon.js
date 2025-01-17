import React from 'react'

const getPokemon = async () => {
    try {
        const rando = Math.floor(Math.random() * 151) + 1;
        console.log(`the number is ${rando}`)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rando}`);
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/32`); - Nidoran M

        if (response.ok) {
            return await response.json(); // Return the Pokémon data
        } else {
            console.log(`Failed to fetch Pokémon: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};

export default getPokemon