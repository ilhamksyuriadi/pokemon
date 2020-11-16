import React, { useState } from 'react';
import './SuccessForm.css';
import createPokemon from '../operations/mutations/addPokemon';
import getMyPokemon from '../operations/queries/getMyPokemon';

const SuccessForm = (props) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`
    
    // useEffect(() => {
    //     console.log(props.pokemon)
    // },[])

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
        console.log(checkNicname(nickname))
        if(!checkNicname(nickname)){
            setExistState(true)
        }else{
            createPokemon(newPokemon)
            setExistState(false)
        }
    }

    return (
        <div className="form-layout">
            <div>
                <h3>Gotcha! {props.pokemon.name} catched</h3>
                <img src={imageUrl} alt="pokemon" />
                <p>Give a nickname:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nickname"></input>
                    <input type="submit" value="ok"></input>
                </form>
                {
                    existState
                    ? <code className="red-text">nicname already exist</code>
                    : <span></span>
                }
            </div>
        </div>
    )
}

export default SuccessForm