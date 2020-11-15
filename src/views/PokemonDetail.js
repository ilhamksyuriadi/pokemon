import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../operations/queries/getPokemon';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
    const { name } = useParams();
    const variables = { name }
    const {loading, error, data} = useQuery(GET_POKEMON_DETAIL, { variables })

    if (loading) return <p>Poketmon Detail Loading...</p>
    if (error) return <p>Somethings wrong...</p>
    if (data) {
        return (
            <div>
                <h1>Pokemon Detail</h1>
                <p>{data.pokemon.name}</p>
            </div>
        )
    }
}

export default PokemonDetail;