// import { useEffect, useState } from 'react';
// import { fetchInitialPokemon, fetchTypes, fetchPokemonType } from '../services/fetchPokemon.js';

// export function usePokemonTypes(type) {
//   const [pokemonType, setPokemonType] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchPokemonType(type);
//       console.log('data inside usePokemonType', data);
//       setPokemonType(data);
//     };
//     fetchData();
//   }, []);
//   return pokemonType;
// }

// export function usePokemon() {
//   const [pokemon, setPokemon] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchInitialPokemon();
//       setPokemon(data);
//     };
//     fetchData();
//   }, []);

//   return pokemon;
// }

// export function useTypes() {
//   const [types, setTypes] = useState([]);
//   useEffect(() => {
//     const fetchDataTypes = async () => {
//       const data = await fetchTypes();
//       setTypes(data);
//     };
//     fetchDataTypes();
//   }, []);

//   return types;
// }
