import React from 'react';
import './CardList.css'

const CardList = (props) => {
    return (
        <div className="card-layout">
            <img src={props.image} />
            <div className="card-desc">
                <p>Name: {props.name}</p>
                <p>Owned: 0</p>
            </div>
        </div>
    )
}

export default CardList