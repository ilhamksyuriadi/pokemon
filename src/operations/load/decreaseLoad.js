import { pageLoad } from '../../cache';

const loadLessPokemon = () => {
    pageLoad(pageLoad() - 3)
}

export default loadLessPokemon