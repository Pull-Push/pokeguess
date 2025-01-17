import getPokemon from "../data/getPokemon";

function pokeSanitize() {
    return getPokemon().then((pokemon) => {
        let savedPokemon = null;
        let pokeObject = {
            'id':'',
            'name': "",
            'height':'',
            'weight':'',
            'sprite':'',
            'color':'',
            'habitat':'',
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

        // NEED TO FIX SPACES IN NAMES FOR MR. MIME and NIDORAN M
        pokeObject.name = pokeObject.name.replace("-", " ")

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
        return pokeObject;
    });
}

export default pokeSanitize