import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";

const CardList = ({ pokemons, isPending }) => {
  return pokemons.length > 0 ? (
    <div>
      {pokemons.map((poke, i) => {
        const pokemonIdx = pokemons[i].url.split("/")[
          pokemons[i].url.split("/").length - 2
        ];
        return (
          <Link key={i} to={`/pokemon/${pokemons[i].name}`}>
            <Card
              id={pokemons[i].id}
              name={pokemons[i].name}
              idx={pokemonIdx}
            />
          </Link>
        );
      })}
    </div>
  ) : (
    //   <List
    //     height={Math.max(
    //       document.documentElement.clientHeight,
    //       window.innerHeight || 0
    //     )}
    //     itemCount={50}
    //     itemSize={30}
    //     width="100%"
    //     overscanCount={3}
    //   >
    //     {({ index, style }) => (
    //       <Link to={`/pokemon/${index + 1}`} key={index}>
    //         <Card poke={pokemons[index]} style={style} id={index} />
    //       </Link>
    //     )}
    //   </List>
    <div className="tc">
      <h1>Loading</h1>
    </div>
  );
};

export default CardList;
