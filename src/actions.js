import axios from "axios";

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

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const requestPokemons = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_POKEMONS_PENDING });
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=850`;
    const res = await axios.get(url);
    const poke = res.data;
    dispatch({ type: REQUEST_POKEMONS_SUCCESS, payload: poke.results });
  } catch (error) {
    dispatch({ type: REQUEST_POKEMONS_FAILED, payload: error });
  }
};

export const fetchByName = name => async dispatch => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await axios.get(url);
    const pokemon = res.data;
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
    const url = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    const res = await axios.get(url);
    const species = res.data;
    dispatch({ type: GET_SPECIES, species });
  } catch (error) {
    dispatch({ type: GET_SPECIES_ERROR, error });
  }
};
