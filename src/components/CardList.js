import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Card from "./Card";

const CardList = ({ pokemons }) => {
  const pokeList =
    pokemons.length > 0 ? (
      <div>
        {pokemons.map((poke, i) => {
          const pokemonIdx = pokemons[i].url.split("/")[
            pokemons[i].url.split("/").length - 2
          ];
          return (
            <LazyLoad key={i} offset={200} once={true} debounce={true}>
              <Link to={`/pokemon/${pokemons[i].name}/${i + 1}`}>
                <Card id={poke.id} name={poke.name} idx={pokemonIdx} />
              </Link>
            </LazyLoad>
          );
        })}
      </div>
    ) : (
      <div className="tc">
        <h1>Loading...</h1>
      </div>
    );

  return <div>{pokeList}</div>;
};

export default CardList;
