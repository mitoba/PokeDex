import React from 'react';
import PokeCard from './PokeCard'
import './styles/PokemonList.css';

const PokemonList = (props) => {
    
    const pokemonComponents = props.pokemonList.map((pokeCard, index) =>(
        <PokeCard
        key ={pokeCard.name}
        id ={index +1}
        name = {pokeCard.name}
        handleOnClick={props.handleOnClick}
        urlImage = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
        />
    ))
    
    return(
        <section className="pokemon-list">
        {pokemonComponents}
        </section>
    )
}

export default PokemonList; 