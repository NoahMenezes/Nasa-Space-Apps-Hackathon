import React, { useState } from 'react';
import './SearchEngine.css'; // Import the CSS file for styling

const SearchEngine = () => {
    // State to hold the user's search query
    const [query, setQuery] = useState('');
    // State to hold search results (for demonstration)
    const [results, setResults] = useState([]);
    // State for loading indicator
    const [loading, setLoading] = useState(false);

    // Dummy search function (replace with actual API call later)
    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() === '') return;

        setLoading(true);
        setResults([]); // Clear previous results

        // Simulate an asynchronous NASA data search delay
        setTimeout(() => {
            const dummyResults = [
                { id: 1, title: `Discovery of the ${query} Nebula`, snippet: 'New observations detail the formation and composition of this cosmic dust cloud.' },
                { id: 2, title: `Missions to Mars: Focusing on ${query}`, snippet: 'The latest rover analysis highlights potential landing sites related to your query.' },
                { id: 3, title: `The History of Planetary Science and ${query}`, snippet: 'An in-depth look at how this subject changed our understanding of the universe.' },
            ];

            setResults(dummyResults);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="search-engine-container">
            <h1 className="search-title">Cosmic Data Stream</h1>
            <p className="search-tagline">Query the NASA archives and explore the void.</p>
            
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for planets, missions, or celestial events..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                    aria-label="Search query input"
                />
                <button type="submit" className="search-button">
                    <span role="img" aria-label="Search">
                        &#x1F50E;&#xFE0E; {/* Magnifying glass emoji */}
                    </span>
                    Search
                </button>
            </form>

            <div className="search-results">
                {loading && <div className="loading-indicator">Searching the cosmos...</div>}
                
                {!loading && results.length > 0 && (
                    <>
                        <p className="results-count">{results.length} results found for "{query}"</p>
                        {results.map(result => (
                            <div key={result.id} className="result-card">
                                <h3 className="result-title">{result.title}</h3>
                                <p className="result-snippet">{result.snippet}</p>
                                <a href="#" className="result-link" onClick={(e) => e.preventDefault()}>View Details &rarr;</a>
                            </div>
                        ))}
                    </>
                )}
                
                {!loading && results.length === 0 && query && (
                    <p className="no-results-message">No results found. Try searching for 'Mars', 'Hubble', or 'Exoplanet'.</p>
                )}
            </div>
        </div>
    );
};

export default SearchEngine;
