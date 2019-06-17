import axios from "axios";
import Pokedex from "pokedex-promise-v2";

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

var options = {
  protocol: "https",
  versionPath: "/api/v2/",
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
};
var P = new Pokedex(options);

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const requestPokemons = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_POKEMONS_PENDING });
    const poke = await P.getPokemonsList();
    dispatch({ type: REQUEST_POKEMONS_SUCCESS, payload: poke.results });
  } catch (error) {
    dispatch({ type: REQUEST_POKEMONS_FAILED, payload: error });
  }
};

export const fetchByName = name => async dispatch => {
  try {
    const pokemon = await P.getPokemonByName(name);
    dispatch({ type: GET_POKEMON_BY_NAME, pokemon });
  } catch (error) {
    dispatch({ type: GETTING_POKEMON_FAILED, error });
  }
};

export const getCharacteristics = id => async dispatch => {
  try {
    const url = `https://pokeapi.co/api/v2/evolution-chain/${id}`;
    const poke = await axios.get(url);
    const data = poke.data;
    dispatch({ type: GET_CHARACTERISTICS, char: data });
  } catch (error) {
    console.error(error);
  }
};

export const getSpecies = name => async dispatch => {
  try {
    const species = await P.getPokemonSpeciesByName(name);
    dispatch({ type: GET_SPECIES, species });
  } catch (error) {
    dispatch({ type: GET_SPECIES_ERROR, error });
  }
};
