import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";

const CardList = ({ pokemons, isPending }) => {
  const poke = pokemons.length > 0 ? pokemons : null;
  return (
    //   <div>
    //     {pokemons.map((poke, i) => {
    //       return (
    //         <Link key={i} to={`/pokemon/${poke.name}`}>
    //           <Card id={i} name={poke.name} />
    //         </Link>
    //       );
    //     })}
    //   </div>

    <List
      height={Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )}
      itemCount={50}
      itemSize={30}
      width="100%"
      overscanCount={3}
    >
      {({ index, style }) => (
        <Link to={`/pokemon/${pokemons[index].name}`} key={index}>
          <Card poke={pokemons[index]} style={style} id={index} />
        </Link>
      )}
    </List>
  );
};

export default CardList;
