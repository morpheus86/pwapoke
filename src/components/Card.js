import React from "react";

const Card = ({ name, idx }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img
        alt="pokemon-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png?size=200x200`}
      />

      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
