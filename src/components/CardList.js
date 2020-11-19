import React from 'react';
import './CardList.css';
import { useHistory } from 'react-router-dom';

const CardList = (props) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/pokemon/${props.name}`)
    }

    return (
            <div data-testid="pokemon-card" onClick={handleClick} className="card-layout">
                <img src={props.image} alt='pokemon' />
                <div className="card-desc">
                    <p>Name: {props.name}</p>
                    {
                        props.nickname
                        ? <p>Nickname: {props.nickname}</p>
                        : <p>Owned: {props.owned}</p>
                    }
                    {
                        props.nickname
                        ? <button onClick={(event)=>props.onRelease(event, props.nickname)} className="release-button">Release</button>
                        : <span />
                    }
                </div>
            </div>
    )
}

export default CardList