import React, { useEffect, useState } from 'react';
import {
  fetchInitialPokemon,
  fetchTypes,
  fetchPokemonType,
  fetchPokemon,
} from '../services/fetchPokemon.js';
import Select from './Select/Select';
import SearchBar from './SearchBar.js';

export default function Main() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [pokemonToDisplay, setPokemonToDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log('searchTerm', searchTerm);
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
    <>
      <SearchBar keyword={searchTerm} onChange={handleSearch} />
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div>
        {pokemonToDisplay.map((poke) => (
          <div key={poke._id}>
            {poke.pokemon} {poke.type_1} {poke.type_2}
            <img src={poke.url_image} />
          </div>
        ))}
      </div>
    </>
  );
}
