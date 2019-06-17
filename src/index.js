import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import "tachyons";

import Client from "./containers/Client";
import registerServiceWorker from "./registerServiceWorker";
import {
  requestPokemons,
  searchPokemons,
  requestPokemon,
  requestPokemonSpecies
} from "./reducers";

import "./index.css";

const logger = createLogger();

const rootReducers = combineReducers({
  requestPokemons,
  searchPokemons,
  requestPokemon,
  requestPokemonSpecies
});

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Client />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
