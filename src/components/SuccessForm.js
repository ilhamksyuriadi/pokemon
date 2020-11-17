import React, { useState } from 'react';
import './SuccessForm.css';
import createPokemon from '../operations/mutations/addPokemon';
import getMyPokemon from '../operations/queries/getMyPokemon';
import { useHistory } from 'react-router-dom';

const SuccessForm = (props) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`
    const history = useHistory()
    const [ existState, setExistState ] = useState(false)

    const checkNicname = (nickname) => {
        const listMyPokemon = getMyPokemon();
        const check = listMyPokemon.filter((pokemon) => {
            return pokemon.nickname === nickname
        })
        if (check.length) {
            return false
        } else {
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nickname = e.target.nickname.value 
        const newPokemon = {
            id: props.pokemon.id,
            nickname: e.target.nickname.value,
            name: props.pokemon.name,
        }

        if(checkNicname(nickname) && nickname){
            createPokemon(newPokemon)
            setExistState(false)
            history.push('/mypokemon')
        }else{
            setExistState(true)
        }
    }

    return (
        <div className="form-layout">
            <div className="content">
                <h3>Gotcha! {props.pokemon.name} catched</h3>
                <img src={imageUrl} alt="pokemon" />
                <p>Give a nickname:</p>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" name="nickname"></input>
                    <input className="submit-button" type="submit" value="ok"></input>
                </form>
                {
                    existState
                    ? <code className="red-text">nickname already exist and field can't be empty</code>
                    : <span></span>
                }
            </div>
        </div>
    )
}

export default SuccessForm