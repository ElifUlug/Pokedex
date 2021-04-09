import React, {Component} from 'react';

 class CaughtPokemon extends Component {
  constructor (props) {
    super(props);
       this.state = {
    caughtPokemon: [],
      pokemonNamesInput: ''
    }
  }
  handleInputChange = (event) => {
    this.setState({
      pokemonNamesInput: [event.target.value]
    })
    console.log(event.target.value);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  
  catchPokemon = () => {
    const newCaughtPokemon = this.state.caughtPokemon;
    newCaughtPokemon.push(this.state.pokemonNamesInput)
    this.setState({
      caughtPokemon: newCaughtPokemon
    })
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

render(){
  return(
    <div>
      <input 
      type="text"
      value={this.state.pokemonNamesInput}
      onChange={this.handleInputChange} />
      <p> Caught {this.state.caughtPokemon.length} Pokemon on {this.props.date} </p>
      <button onClick={this.catchPokemon}> Catch Pokemon </button>
    </div>
  )
}
}

export default CaughtPokemon;