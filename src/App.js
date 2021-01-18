import './App.css';
import pokemon from './pokemondata';
import ListPoke from './components/ListPoke';
import PokeType from './components/PokeType';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      fire: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      water: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      grass: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      // fire:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      // water:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      // grass:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
  }
  render() {
    return (
      <div>
        <ListPoke poke={pokemon} display={this.state.pokemon} />
        <PokeType poke={pokemon} fire={this.state.fire} water={this.state.water} grass={this.state.grass}/>
      </div>
    );
  }
}
