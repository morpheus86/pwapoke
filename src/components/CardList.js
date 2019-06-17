import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const List = lazy(() => import("./Card"));

const CardList = ({ pokemons, isPending }) => {
  const Loading = () => (
    <div className="post loading">
      <h5>Loading...</h5>
    </div>
  );
  const pokeList =
    pokemons.length > 0 ? (
      <div>
        {pokemons.map((poke, i) => {
          const pokemonIdx = pokemons[i].url.split("/")[
            pokemons[i].url.split("/").length - 2
          ];
          return (
            <Suspense key={i + 1} fallback={<Loading />}>
              <Link to={`/pokemon/${pokemons[i].name}/${i + 1}`}>
                <List id={poke.id} name={poke.name} idx={pokemonIdx} />
              </Link>
            </Suspense>
          );
        })}
      </div>
    ) : (
      <div className="tc">
        <h1>Loading</h1>
      </div>
    );

  return <div>{pokeList}</div>;
};

export default CardList;
