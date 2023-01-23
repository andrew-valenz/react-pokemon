# Pokemon Pokedex Plan

## Components

- Main.js
  - Controls.js
        - Select.js
            - onChange - handleTypeChange
        - Query.js
    -PokeCard.js

## usePokemon Hook

- State:
  - [pokemon, setPokemon]
    - [types, setTypes]
    - [selectedType, setSelectedType]
    - [query, setQuery]
- useEffect
  - [calls pokemon API and sets the _INITIAL_ pokemon state]
  - calls the types API and get the types
- functions
  - handleTypeChange
        - sets the selectedType state
        - call the API with the selected Type
        - update the pokemon state with the API response data

## Plan

    - Get Main component loading and showing the first 20 pokemon
    - Get the select dropdown displaying the different types
