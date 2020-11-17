import React from 'react';
import './CardList.css';
import { Link } from 'react-router-dom';

const CardList = (props) => {
    return (
        <Link to={`/pokemon/${props.name}`}>
            <div className="card-layout">
                <img src={props.image} alt='pokemon' />
                <div className="card-desc">
                    <p>Name: {props.name}</p>
                    {
                        props.owned
                        ? <p>Owned: {props.owned}</p>
                        : <p>Nickname: {props.nickname}</p>
                    }
                </div>
            </div>
        </Link>
    )
}

export default CardList