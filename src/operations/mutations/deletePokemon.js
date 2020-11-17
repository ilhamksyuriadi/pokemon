import { myPokemon } from '../../cache';

const releasePokemon = (nickname) => {
    const currentPokemons = myPokemon();
    const newPokemons = currentPokemons.filter((pokemon) => {
        return pokemon.nickname !== nickname
    })
    localStorage.setItem('myPokemon', JSON.stringify(newPokemons))
    myPokemon(newPokemons)
}

export default releasePokemon