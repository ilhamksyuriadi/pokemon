import { myPokemon } from '../../cache';

const createPokemon = (pokemon) => {
    const currentPokemons = myPokemon();
    const newPokemon = pokemon
    localStorage.setItem('myPokemon', JSON.stringify([...currentPokemons, newPokemon]))
    myPokemon([...currentPokemons, newPokemon])
}

export default createPokemon