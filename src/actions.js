import axios from "axios";
import Pokedex from "pokedex-promise-v2";
// import { apiCall } from "./api/api";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_POKEMONS_PENDING,
  REQUEST_POKEMONS_SUCCESS,
  REQUEST_POKEMONS_FAILED,
  GET_POKEMON_BY_NAME,
  GETTING_POKEMON_FAILED
} from "./constants";

var options = {
  protocol: "https",
  // hostName: "localhost:3000",
  versionPath: "/api/v2/pokemon/?limit=20",
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
    console.log(poke);
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
