import React from 'react';
import getMyPokemon from '../operations/queries/getMyPokemon';
import CardList from '../components/CardList';

const MyPokemon = () => {

    const pokemons = getMyPokemon().map(({id, name, nickname}) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <CardList 
                key={nickname}
                name={name}
                image={imageUrl}
                nickname={nickname}
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