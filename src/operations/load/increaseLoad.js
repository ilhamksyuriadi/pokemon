import { pageLoad } from '../../cache';

const loadMorePokemon = () => {
    pageLoad(pageLoad() + 3)
}

export default loadMorePokemon