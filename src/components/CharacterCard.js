import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character">
      <div id="left">
        <h3>Name: {character.name}</h3>
        <h5>House: {character.house || 'Unknown'}</h5>
        <h5>
          Wand: {character.wand?.wood} with core of {character.wand?.core || 'Unknown'}
        </h5>
        <h5>Patronus: {character.patronus || 'None'}</h5>
        <h5>Actor: {character.actor}</h5>
      </div>
      <div id="right">
        <img src={character.image} alt={character.name} style={{ width: '200px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default CharacterCard;
