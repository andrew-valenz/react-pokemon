export async function fetchInitalPokemon() {
    const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/5ff4fb7cd89993a89cc6544f');
    const data = await resp.json();
    return data.results;
}