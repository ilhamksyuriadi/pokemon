import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../operations/queries/getPokemonList';
import CardList from '../components/CardList';
import './PokemonList.css';
import Loading from '../components/Loading';
import Error from '../components/Error';

const PokemonList = () => {
    const variables = { limit: 8, offset: 0 }
    const {loading, error, data} = useQuery(GET_POKEMON_LIST, { variables })

    if (loading) return <Loading msg='getting pokemon list...' />
    if (error) return <Error />
    if (data) {
        const pokemons = data.pokemons.results.map(({name, image, owned}) => (
            <CardList 
                key={name}
                name={name}
                image={image}
                owned={1}
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