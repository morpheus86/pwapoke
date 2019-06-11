import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchByName } from "../actions";

class SinglePokemon extends Component {
  componentDidMount() {
    const name = this.props.match.params.name;
    this.props.poke(name);
  }

  render() {
    console.log(this.props);
    const {
      sprites,
      abilities,
      height,
      name,
      id,
      stats,
      types,
      weight
    } = this.props.pokemon;
    const pic = sprites && sprites.front_default;
    return (
      <div className="tc">
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img
              src={pic}
              alt="pokemon picture"
              className="br-100 h4 w4 dib ba b--black-05 pa2"
            />
            <h1 className="f3 mb2">{name}</h1>
          </div>
        </article>
      </div>
    );
  }
}

const mapState = state => {
  return {
    pokemon: state.requestPokemon.pokemon
  };
};

const mapDispatch = dispatch => {
  return {
    poke: name => dispatch(fetchByName(name))
  };
};

export default connect(
  mapState,
  mapDispatch
)(SinglePokemon);
