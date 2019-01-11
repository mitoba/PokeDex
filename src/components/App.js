import React, { Component } from 'react';
import axios from 'axios'
import PokemonList from './PokemonList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons:[],
      pokemonDetail:{
        id:1,
        name : "bulbasaur",
        sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        type : "poison"
      }
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => {
        const data = res.data.results;
        const pokemons = data.slice(0, 700)
        
        this.setState({ pokemons: pokemons });
      })
  }

  handleOnClick(id) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(proxyurl + url)
      .then(res =>{
        const data = res.data;
        const pokemonDetail = new Pokemon(data);
        this.setState({ pokemonDetail });
      } )
  }


  render(){
    return (
      <div className='App'>
      <PokemonList pokemonList={this.state.pokemons} handleOnClick={this.handleOnClick}/>
      <DetailView pokemon ={this.state.pokemonDetail}/>
      </div>

    )
  }
}

export default App;