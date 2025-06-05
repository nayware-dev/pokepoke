import { useState } from "react";
import './SearchBar.css'

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(query.trim()) {
            onSearch(query.toLowerCase());
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Pokemon"
                className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    )

}

export default SearchBar;