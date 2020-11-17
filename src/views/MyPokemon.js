import React, { useState } from 'react';
import getMyPokemon from '../operations/queries/getMyPokemon';
import CardList from '../components/CardList';
import releasePokemon from '../operations/mutations/deletePokemon';

const MyPokemon = () => {
    const [pokemonsState, setPokemonsState] = useState(getMyPokemon())

    const handleRelease = (e, nickname) => {
        e.stopPropagation()
        releasePokemon(nickname)
        setPokemonsState(getMyPokemon())
    }

    const pokemons = pokemonsState.map(({id, name, nickname}) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <CardList 
                key={nickname}
                name={name}
                image={imageUrl}
                nickname={nickname}
                onRelease={handleRelease}
            />
        )
    })
    return (
        <div className="list-layout">
            {pokemons}
        </div>
    )
}

export default MyPokemon;