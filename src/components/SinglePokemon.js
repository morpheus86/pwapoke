import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchByName,
  getCharacteristics,
  getSpecies,
  getHabitat
} from "../actions";
import Characteristics from "./Characteristics";
import Pokedex from "pokedex-promise-v2";

class SinglePokemon extends Component {
  componentDidMount() {
    const name = this.props.match.params.name;
    const id = this.props.match.params.id;
    this.props.poke(name);
    this.props.spec(name);
    this.props.char(id);
  }

  render() {
    const {
      sprites,
      abilities,
      height,
      name,
      stats,
      types,
      weight
    } = this.props.pokemon;

    const { id, chain } = this.props.chararcter;
    const pic = sprites && sprites.front_default;

    const abilityName =
      abilities && abilities.map(ab => ab.ability.name).join(", ");
    const type =
      types &&
      types
        .map(t => {
          return t.type.name;
        })
        .join(", ");

    const stat =
      stats &&
      stats.map(st => {
        return (
          <div className="row align-items-center" key={st.stat.name}>
            <div className={`col-12 col-md-${3}`}>{st.stat.name}:</div>
            <div className={`col-12 col-md${9}`}>
              <div className="progress">
                <div
                  className="progress-bar "
                  style={{
                    width: `${st.base_stat / 1.2}%`,
                    backgroundColor: `#c2185b`
                  }}
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{st.base_stat}</small>
                </div>
              </div>
            </div>
          </div>
        );
      });

    const ev =
      stats &&
      stats
        .map(st => {
          return `${st.effort} ${st.stat.name}`;
        })
        .join(", ");

    const catchRate = this.props.species && this.props.species.capture_rate;

    const hash_step = this.props.species && this.props.species.hatch_counter;

    const egg_group =
      this.props.species.egg_groups &&
      this.props.species.egg_groups.map(el => el.name).join(", ");

    const evolve_from =
      this.props.species.evolves_from_species &&
      this.props.species.evolves_from_species.url;

    const shape = this.props.species.shape && this.props.species.shape.name;
    return (
      this.props.match.params.id && (
        <div className="tc">
          <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <h5>Id: {id}</h5>
              <img
                src={pic}
                alt="pokemon-image"
                className="br-100 h4 w4 dib ba b--black-05 pa2"
                title="Photo of pokemon"
              />
              <h1 className="f3 mb2">
                <a className="f5 fw4 gray mt0">{name}</a>
              </h1>
              <div className="monster-minutia">
                <strong>Type: </strong>
                {type}
              </div>
            </div>
          </article>

          <article className="mw7 center bg-white br4 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <div className="row align-items-center">
                <div className="col-md-9">{stat}</div>
                <div className="row mt-1" />
              </div>
              <hr />

              <div className="f3 mb2 bg-green">Profile</div>
              <div className="monster-minutia">
                <strong>Height: </strong>
                <span>{height} m</span>
                <strong>Weight: </strong>
                <span>{weight} kg</span>
              </div>

              <div className="monster-minutia">
                <strong>Catch Rate: </strong>
                <span>{catchRate}</span>
                <strong>Egg groups: </strong>
                <span>{egg_group}</span>
              </div>

              <div className="monster-minutia">
                <strong>Abilities: </strong>
                <span>{abilityName} </span>
                <strong>EVs: </strong>
                <span>{ev}</span>
              </div>

              <div className="monster-minutia">
                <strong>Hash Steps: </strong>
                <span>{hash_step}</span>
                <strong>Shape: </strong>
                <span>{shape}</span>
              </div>
            </div>

            <div className="f3 mb2 bg-green">Evolution</div>
            <Characteristics
              id={id}
              chain={chain}
              img={pic}
              evolve_from={evolve_from}
            />
          </article>
        </div>
      )
    );
  }
}

const mapState = state => {
  return {
    pokemon: state.requestPokemon.pokemon,
    chararcter: state.requestPokemon.characteristics,
    species: state.requestPokemonSpecies.species
  };
};

const mapDispatch = dispatch => {
  return {
    poke: name => dispatch(fetchByName(name)),
    char: id => dispatch(getCharacteristics(id)),
    spec: name => dispatch(getSpecies(name))
  };
};

export default connect(
  mapState,
  mapDispatch
)(SinglePokemon);
