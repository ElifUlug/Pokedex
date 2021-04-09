import React, {Component} from 'react';

class BestPokemon extends Component {
constructor(props){
  super(props);
  this.state = {
    pokemonNames: [],
    isLoadindg: true
  }
}

componentDidMount(){
  fetch('https://pokeapi.co/api/v2/pokedex/1/')
  .then(res => res.json())
  .then(data => {
    console.log([data.pokemon_entries[0].pokemon_species.name,
                data.pokemon_entries[3].pokemon_species.name,
                data.pokemon_entries[6].pokemon_species.name])
    this.setState({
     pokemonNames: [data.pokemon_entries[0].pokemon_species.name,
                    data.pokemon_entries[3].pokemon_species.name,
                     data.pokemon_entries[6].pokemon_species.name], 
         isLoading: false     
      })
  })
}
render () {
  if(this.state.isLoading){
    return <span>Loading...</span>
  } else {
    return <ul>
    {this.state.pokemonNames.map(name => {
      return (
        <li key={name}> {name} </li>
      )
    })}
    </ul>
  }
}
}
 
export default BestPokemon; 