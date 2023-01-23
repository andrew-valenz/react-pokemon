import React, { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchTypes, fetchPokemonType } from '../services/fetchPokemon.js';
import Select from './Select/Select';

export default function Main() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [pokemonToDisplay, setPokemonToDisplay] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    const fetchTypesData = async () => {
      const data = await fetchTypes();
      console.log(data);
      data.unshift({ count: null, type: 'all' });
      setTypes(data);
    };
    fetchTypesData();
  }, []);

  useEffect(() => {
    if (selectedType === 'all') {
      const fetchPokemon = async () => {
        const data = await fetchInitialPokemon();
        setPokemonToDisplay(data);
      };
      fetchPokemon();
    } else {
      const fetchPokemonByType = async () => {
        const data = await fetchPokemonType(selectedType);
        setPokemonToDisplay(data);
      };
      fetchPokemonByType();
    }
  }, [selectedType]);

  return (
    <>
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
