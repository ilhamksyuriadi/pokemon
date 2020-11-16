import { myPokemon } from '../../cache';

const createPokemon = (pokemon) => {
    const currentPokemons = myPokemon();
    const newPokemon = pokemon
    myPokemon([...currentPokemons, newPokemon])
}

export default createPokemon