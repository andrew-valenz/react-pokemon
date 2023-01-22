import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return pokemon;
}

export function useTypes() {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchDataTypes = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchDataTypes();
  }, []);

  return types;
}
