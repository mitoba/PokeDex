import React from 'react';
import './styles/PokeCard.css';

const PokeCard = (props) => {
    return <button className="poke-card" onClick={() => props.handleOnClick(props.id)}>
    <h3>{props.name}</h3> 
    <img src={props.urlImage} alt=""/>
    </button>
}

export default PokeCard; 