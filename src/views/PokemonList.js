import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../operations/queries/getPokemonList';
import CardList from '../components/CardList';
import './PokemonList.css';
import Loading from '../components/Loading';
import Error from '../components/Error';
import getMyPokemon from '../operations/queries/getMyPokemon';

const PokemonList = () => {
    const variables = { limit: 8, offset: 0 }
    const {loading, error, data} = useQuery(GET_POKEMON_LIST, { variables })

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
            <div className="list-layout">
                {pokemons}
            </div>
        )
    }
}

export default PokemonList;