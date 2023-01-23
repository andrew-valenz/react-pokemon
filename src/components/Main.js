import React, { useEffect, useState } from 'react';
import { fetchTypes, fetchPokemon } from '../services/fetchPokemon.js';
import Select from './Select/Select';
import SearchBar from './SearchBar.js';
import './Main.css';

export default function Main() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [pokemonToDisplay, setPokemonToDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    const fetchTypesData = async () => {
      const data = await fetchTypes();
      data.unshift({ count: null, type: 'all' });
      setTypes(data);
    };
    fetchTypesData();
  }, []);

  useEffect(() => {
    let type = null;
    let keyword = null;

    if (selectedType !== 'all') {
      type = selectedType;
    }
    if (searchTerm.length) {
      keyword = searchTerm;
    }

    const fetchPokemonResults = async () => {
      const data = await fetchPokemon(type, keyword);
      setPokemonToDisplay(data);
    };
    fetchPokemonResults();
  }, [selectedType, searchTerm]);

  return (
    <div className="main">
      <SearchBar className="searchBar" keyword={searchTerm} onChange={handleSearch} />
      <Select className="select" types={types} handleTypeChange={handleTypeChange} />
      <div className="container">
        {pokemonToDisplay.map((poke) => (
          <div className="pokeCard" key={poke._id}>
            Name: {poke.pokemon} Type: {poke.type_1} Attack: {poke.attack} Defense: {poke.defense}
            <img src={poke.url_image} />
          </div>
        ))}
      </div>
    </div>
  );
}
