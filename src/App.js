import React,{Component} from 'react';
import Logo from './Logo';
import  BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import Clock from './Clock';

class App extends Component {
  logWhenClicked = () => {
    console.log("Hi");
  }

  render () {
  return (
    <div> 
      <Logo appName="Pokedex" handleClick={this.logWhenClicked} />
      <BestPokemon pokemonNames={['Squirtle', 'Bulbasaur', 'Charmander']} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <Clock />
    </div>
  );
}
}

export default App;
