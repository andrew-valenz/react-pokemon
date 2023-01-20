import React from 'react';
import { usePokemon } from '../hooks/pokemon.js';
import Select from './Select/Select';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div>
        {pokemon.map((poke) => (
          <p key={poke._id}>
            {poke.pokemon} {poke.type_1} {poke.type_2}
          </p>
        ))}
      </div>
    </>
  );
}
