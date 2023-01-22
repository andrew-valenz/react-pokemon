import React, { Profiler } from 'react';
import { usePokemon, useTypes } from '../hooks/pokemon.js';
import Select from './Select/Select';

export default function Main() {
  const pokemon = usePokemon();
  // console.log(pokemon, types);
  const types = useTypes();
  console.log('types', types);
  return (
    <>
      {/* <Select types={types} handleTypeChange={handleTypeChange} /> */}
      <div>
        {pokemon.map((poke) => (
          <div key={poke._id}>
            {poke.pokemon} {poke.type_1} {poke.type_2}
            <img src={poke.url_image} />
          </div>
        ))}
      </div>
    </>
  );
}
