import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';

const currentPokemons = JSON.parse(localStorage.getItem('myPokemon'))
export let myPokemon
if (currentPokemons) {
    myPokemon = makeVar(currentPokemons);
} else {
    myPokemon = makeVar([]);
}

export const pageLoad = makeVar(9)

export const cache = new InMemoryCache()

// export default cache