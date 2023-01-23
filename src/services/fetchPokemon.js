export async function fetchPokemon(type, searchTerm) {
  let endpointURL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
  if (type !== null || searchTerm !== null) {
    const params = new URLSearchParams();
    if (type !== null) {
      params.set('type', type);
    }
    if (searchTerm !== null) {
      params.set('pokemon', searchTerm.toLowerCase());
    }
    endpointURL = endpointURL + '?' + params.toString();
  }
  const resp = await fetch(endpointURL);
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

// export async function fetchInitialPokemon() {
//   const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
//   const data = await resp.json();
//   return data.results;
// }

// export async function fetchPokemonType(type) {
//   const resp = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type=${type}`);
//   const data = await resp.json();
//   return data.results;
// }
