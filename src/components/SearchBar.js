import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search-id"
        placeholder="Search for a character..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button id="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
