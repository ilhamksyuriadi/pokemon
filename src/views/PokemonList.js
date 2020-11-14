import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../operations/queries/getPokemonList';
import CardList from '../components/CardList';
import './PokemonList.css';

const PokemonList = () => {
    const variables = { limit: 35, offset: 0 }
    const {loading, error, data} = useQuery(GET_POKEMON_LIST, { variables })

    if (loading) return <p>Poketmon List Loading...</p>
    if (error) return `Pokemon List Error! ${error}`
    if (data) {
        const pokemons = data.pokemons.results.map(({name, image}) => (
            <CardList 
                key={name}
                name={name}
                image={image}
            />
        ))
        return (
            <div className="list-layout">
                {pokemons}
            </div>
        )
    }
}

export default PokemonList;