export async function fetchInitialPokemon() {
  const resp = await fetch(
    'https://alchemy-pokedex.herokuapp.com/api/pokedex/5ff4fb7cd89993a89cc6544f'
  );
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch(
    'https://alchemy-pokedex.herokuapp.com/api/pokedex/5ff4fb7cd89993a89cc6544f'
  );
  const data = await resp.json();
  return data;
}

export async function fetchPokemon(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/${params.toString()}`
  );
  const data = await resp.json();
  return data.types;
}
