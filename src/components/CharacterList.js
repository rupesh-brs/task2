import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  return (
    <div id="character-list">
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))
      ) : (
        <p>No characters found</p>
      )}
    </div>
  );
};

export default CharacterList;
