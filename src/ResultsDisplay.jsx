import './ResultsDisplay.css';

function ResultsDisplay({pokemon, loading, error, onBack}) {
    if (loading) {
        return <div className="loading">Loading</div>
    }
    if (error) {
        return (
    <div className="error-container">
     <div className="error">No Pokemon by that name! Try again.</div>
    <button className="back-button" onClick={onBack}>Back To Search</button>
    </div>
    );
}
    if (!pokemon) {
    return <div className='empty-state'>Search for a Pokemon to see details</div>;
    }

    return (
        <div className="pokemon-card">
            <h2>{pokemon.name ? pokemon.name.toUpperCase() : ''}</h2>
            {pokemon.sprites && pokemon.sprites.front_default ? (
            <img
                src={pokemon.sprites.front_default}
                alt={'${pokemon.name} sprite'}
                className="pokemon-image"
                />
            ) : (
                <div className='no-image'>No image available</div>
            )}
        <div className="pokemon-details">
            <p><strong>ID:</strong>#{pokemon.id}</p>
            <p><strong>Height:</strong> {(pokemon.height / 10).toFixed(1)}m </p>
            <p><strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)}kg</p>

            <div className="pokemon-types">
                <strong>Types:</strong>
                {pokemon.types && pokemon.types.length > 0 ? (
                <ul>
                    {pokemon.types.map(typeInfo => (
                        <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
                    ))}
                </ul>
                ) : (
                <p>No type information available</p>
                )}
            </div>
            </div>  

            <button className="back-button" onClick={onBack}>Back to Search</button>  
        </div>
    );
}


export default ResultsDisplay;