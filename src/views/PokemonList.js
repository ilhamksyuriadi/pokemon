import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../operations/queries/getPokemonList';
import CardList from '../components/CardList';
import './PokemonList.css';
import Loading from '../components/Loading';
import Error from '../components/Error';
import getMyPokemon from '../operations/queries/getMyPokemon';

const PokemonList = () => {
    const [limitState, setLimitState] = useState(8)
    const variables = { limit: limitState, offset: 0 }
    const {loading, error, data} = useQuery(GET_POKEMON_LIST, { variables })

    const handleMore = () => {
        setLimitState(limitState + 3)
        console.log('state:',limitState)
    }
    const handleLess = () => {
        setLimitState(limitState - 3)
        console.log('state:',limitState)
    }

    if (loading) return <Loading msg='getting pokemon list...' />
    if (error) return <Error />
    if (data) {
        const pokemonList = data.pokemons.results.map((pokemon) => {
            let ownedPokemon = getMyPokemon().filter(({name}) => {
                return pokemon.name === name
            })
            return Object.assign({...pokemon}, {owned: ownedPokemon.length})
        })

        const pokemons = pokemonList.map(({name, image, owned}) => (
            <CardList 
                key={name}
                name={name}
                image={image}
                owned={owned}
            />
        ))

        return (
            <>
                <h2 className="title-pokemont-list">Wild Pokemon List</h2>
                <div>
                    <div className="list-layout-pokemont-list">
                        {pokemons}
                    </div>
                    <button onClick={handleLess} className="button-page">Less</button>
                    <button onClick={handleMore} className="button-page">More</button>
                </div>
            </>
        )
    }
}

export default PokemonList;