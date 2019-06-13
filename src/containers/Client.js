import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import SinglePokemon from "../components/SinglePokemon";

export default class Client extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/pokemon/:name/:id" component={SinglePokemon} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
