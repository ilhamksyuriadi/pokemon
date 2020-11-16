import React, { useEffect } from 'react';
import { myPokemon } from '../cache';

const MyPokemon = () => {

    useEffect(()=>{
        console.log('mypokemon', myPokemon())
    },[])

    return (
        <div>
            <h1>My Pokemin</h1>
        </div>
    )
}

export default MyPokemon;