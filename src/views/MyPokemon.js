import React, { useEffect } from 'react';
import getMyPokemon from '../operations/queries/getMyPokemon';

const MyPokemon = () => {

    useEffect(()=>{
        console.log('mypokemon', getMyPokemon())
    },[])

    return (
        <div>
            <h1>My Pokemin</h1>
        </div>
    )
}

export default MyPokemon;