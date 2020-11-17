import React, { useState } from 'react';
import getMyPokemon from '../operations/queries/getMyPokemon';
import CardList from '../components/CardList';
import releasePokemon from '../operations/mutations/deletePokemon';
import Empty from '../components/Empty';
import './MyPokemon.css';

const MyPokemon = () => {
    const [pokemonsState, setPokemonsState] = useState(getMyPokemon())

    const handleRelease = (e, nickname) => {
        e.stopPropagation()
        releasePokemon(nickname)
        setPokemonsState(getMyPokemon())
    }

    if (!pokemonsState.length) return (
        <>
            <h2 className="title">Catched Pokemon List</h2>
            <code>Total: {pokemonsState.length}</code>
            <Empty />
        </>
    )
    if (pokemonsState) {
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
            <>
                <h2 className="title">Catched Pokemon List</h2>
                <code>Total: {pokemonsState.length}</code>
                <div className="list-layout">
                    {pokemons}
                </div>
            </>
        )
    }
}

export default MyPokemon;