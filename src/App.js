import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch characters from API when the component mounts
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://hp-api.onrender.com/api/characters');
      setCharacters(response.data);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  const handleSearch = () => {
    return characters.filter(char =>
      char.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="main-container">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <CharacterList characters={handleSearch()} />
    </div>
  );
};

export default App;
