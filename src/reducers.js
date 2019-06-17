import {
  CHANGE_SEARCHFIELD,
  REQUEST_POKEMONS_PENDING,
  REQUEST_POKEMONS_SUCCESS,
  REQUEST_POKEMONS_FAILED,
  GET_POKEMON_BY_NAME,
  GETTING_POKEMON_FAILED,
  GET_CHARACTERISTICS,
  GET_SPECIES,
  GET_SPECIES_ERROR
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchPokemons = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStatePokemons = {
  pokemons: [],
  isPending: true
};

export const requestPokemons = (state = initialStatePokemons, action = {}) => {
  switch (action.type) {
    case REQUEST_POKEMONS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_POKEMONS_SUCCESS:
      return Object.assign({}, state, {
        pokemons: action.payload,
        isPending: false
      });
    case REQUEST_POKEMONS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

const initStatePokemon = {
  pokemon: [],
  characteristics: []
};
export const requestPokemon = (state = initStatePokemon, action = {}) => {
  switch (action.type) {
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemon: action.pokemon
      };
    case GETTING_POKEMON_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_CHARACTERISTICS:
      return {
        ...state,
        characteristics: action.char
      };
    default:
      return state;
  }
};

const initStatSpecies = {
  species: []
};
export const requestPokemonSpecies = (state = initStatSpecies, action = {}) => {
  switch (action.type) {
    case GET_SPECIES:
      return {
        ...state,
        species: action.species
      };
    case GET_SPECIES_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
