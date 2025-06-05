import { useState } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar'
import ResultsDisplay from './ResultsDisplay'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPokemon = (query) => {
      setPokemon(null)
      setLoading(true);
      setError(null);

    const pokemonName = query.toLowerCase().trim();
      axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
     setPokemon(response.data) 
     setError(null)
        })
        .catch(err => {
          if (err.response) {
            setError('Pokemon not found (Status: ${err.response.status})');
          } else if (err.request) {
            setError("Network error. Please check your connection.");

          } else {
            setError('Error: ${err.message}')
          }
          setPokemon(null)
      }) 
      .finally (() => {
        setLoading(false);
      })
  };

const handleBack = () => {
  setPokemon(null)
  setError(null)
  setLoading(false)
}
  return (
      <div className='app'>
      <h1>Welcome to The Pokemon Pages</h1>
      {!pokemon && !loading && <SearchBar onSearch={searchPokemon} />}
      <ResultsDisplay
        pokemon={pokemon}
        loading={loading}
        error={error}
        onBack={handleBack}
        />
        </div>


  );
}

export default App
