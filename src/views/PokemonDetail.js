import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../operations/queries/getPokemon';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
    const { name } = useParams();
    const variables = { name }
    const {loading, error, data} = useQuery(GET_POKEMON_DETAIL, { variables })

    const handleCatch = () => {
        console.log('catch clicked')
    }

    if (loading) return <p>Poketmon Detail Loading...</p>
    if (error) return <p>Somethings wrong...</p>
    if (data) {
        const pokemon = data.pokemon;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        const listTypes = pokemon.types.map((pokemon, index) => {
            return (
                <span className={`type-${pokemon.type.name}`} key={index}>{pokemon.type.name}  </span>
            )
        })
        const listAbilities = pokemon.abilities.map((pokemon) => {
            return pokemon.ability.name
        })
        const listMoves = pokemon.moves.map((pokemon) => {
            return pokemon.move.name
        })
        const pokemonTypes = listTypes.join(', ')
        const pokemonAbilities = listAbilities.join(', ')
        const pokemonMoves = listMoves.join(', ')
        return (
            <>
                <h2>Pokemon Detail</h2>
                <div className="detail-layout">
                    <div className="profile-box">
                        <div className="img-wrapper">
                            <img className="pokemon-img" src={imageUrl} alt="pokemon"></img>
                        </div>
                        <h3 className="pokemon-text">{pokemon.name}</h3>
                        <h4 className="pokemon-text">pokemon id: {pokemon.id}</h4>
                        <h4 className="pokemon-text">type:  {listTypes}</h4>
                        <h4 className="pokemon-text">owned: 0</h4>
                        <button onClick={handleCatch} className="catch-button">
                            catch
                        </button>
                    </div>
                    <div className="description-box">
                        <div className="abilities-box">
                            <h4>Abilities</h4>
                            <p>{pokemonAbilities}</p>
                        </div>
                        <div className="moves-box">
                            <h4>Moves</h4>
                            <p>{pokemonMoves}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PokemonDetail;