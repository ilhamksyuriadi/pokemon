import { pageLoad } from '../../cache';

export const getLoadPokemon = () => {
    return pageLoad()
}

export const loadMorePokemon = () => {
    pageLoad(pageLoad() + 3)
}

export const loadLessPokemon = () => {
    pageLoad(pageLoad() - 3)
}