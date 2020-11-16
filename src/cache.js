import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';

export const myPokemon = makeVar([]);

export const cache = new InMemoryCache()

// export default cache