import { useState } from 'react'
import SearchBar from './SearchBar'
import ResultsDisplay from './ResultsDisplay'
import pokemonLogo from './pokemonLogo.png'
import axios from 'axios';

import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPokemon = (query) => {
      setLoading(true);
      setError(null);

      axios.get('https://pokeapi.co/api/v2/pokemon/${query.LowerCase().trim()}')
      .then(response => {
  console.log("Data:", response.data);
    setPokemon(response.data) 
        })
        .catch(error => {
          console.log("Error:", error);
          setError('Error: $(error.message)');
          setPokemon(null)
      
      }) .finally (() => {
        setLoading(false);
      })
  };

  return (
      <div className='app'>
      <h1>Welcome to The Pokemon Pages</h1>
      <SearchBar onSearch={searchPokemon} />
      <ResultsDisplay
        pokemon={pokemon}
        loading={loading}
        error={error}
        />
        </div>


  );
}

export default App
