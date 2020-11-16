import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../operations/queries/getPokemon';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PokeBall from '../assets/pokeball.png';
import createPokemon from '../operations/mutations/addPokemon';

const PokemonDetail = () => {
    const { name } = useParams();
    const variables = { name }
    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, { variables });
    const [ catchState, setCatchState ] = useState('standby')

    const getCatchChance = () => {
        return Math.floor(Math.random() * 2);
    }

    const handleCatch = () => {
        console.log('catch clicked')
        setCatchState('catching')
        const chance = getCatchChance()
        if (chance >= 1) {
            setTimeout(()=>{
                console.log('success', chance)
                setCatchState('success')
                createPokemon(data.pokemon)
            },5000)
        } else {
            setTimeout(()=>{
                console.log('fail', chance)
                setCatchState('fail')
            },5000)
        }
        console.log(catchState)
    }

    if (loading) return <Loading msg='getting pokemon detail...' />
    if (error) return <Error />
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
                        <div className={`catch-wrapper wrapper-${catchState}`}>
                            <code>{catchState}</code>
                            <div className="box-wrapper">
                                <button onClick={handleCatch} className={"catch-button"}>
                                    catch
                                </button>
                                <img className={`pokeball pokeball-${catchState}`} src={PokeBall} alt="pokeball"></img>
                            </div>
                        </div>
                    </div>
                    <div className="description-box">
                        <div className="abilities-box">
                            <h4>Abilities:</h4>
                            <div className="p-wrapper">
                                <p>{pokemonAbilities}</p>
                            </div>
                        </div>
                        <div className="moves-box">
                            <h4>Available Moves:</h4>
                            <div className="p-wrapper">
                                <p>{pokemonMoves}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PokemonDetail;