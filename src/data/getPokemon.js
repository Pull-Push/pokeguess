import React from 'react'

const getPokemon = async () => {
    try {
        const rando = Math.floor(Math.random() * 151) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rando}`);
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