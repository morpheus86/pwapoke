import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import App from "./App";
// import SinglePokemon from "../components/SinglePokemon";

const SinglePokemon = lazy(() => import("../components/SinglePokemon"));
const App = lazy(() => import("./App"));
export default class Client extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <div>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/pokemon/:name/:id" component={SinglePokemon} />
            </Switch>
          </div>
        </Suspense>
      </BrowserRouter>
    );
  }
}
