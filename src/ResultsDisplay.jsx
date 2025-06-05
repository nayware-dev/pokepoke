import './ResultsDisplay.css';

function ResultsDisplay({pokemon, loading, error}) {
    if (loading) return <div className="loading">Loading</div>
    if (error) return <div className="error">No Pokemon by that name! Try again.</div>
    if (!pokemon) return null;

    return (
        <div className="pokemon-card">
            <h2>{pokemon.name.toUpperCase()}</h2>
            {pokemon.sprites && (
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon-image"
                />
            )}
        <div className="pokemon-details">
            <p><strong>Height:</strong> {pokemon.height / 10}m </p>
            <p><strong>Weight:</strong> {pokemon.weight / 10}km</p>
            <div className="pokemon-types">
                <strong>Types:</strong>
                <ul>
                    {pokemon.types.map(type => {
                        <li key={type.type.name}>{type.type.name}</li>
                    })}
                </ul>
            </div>
            </div>    
        </div>
    )
}

export default ResultsDisplay;