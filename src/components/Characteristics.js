import React, { Component } from "react";

class Characteristics extends Component {
  render() {
    const { chain, img, evolve_from, name } = this.props;
    const pic = img && img;
    const idx =
      chain && chain.evolves_to.length > 1
        ? chain.evolves_to[0].species.url.split("/")[
            chain.evolves_to[0].species.url.split("/").length - 2
          ]
        : null;
    const evolving_idx =
      evolve_from && evolve_from.split("/")[evolve_from.split("/").length - 2];

    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png?size=200x200`;
    const evolving_src =
      evolving_idx &&
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolving_idx}.png?size=200x200`;

    if (evolving_idx) {
      return (
        <div className="evolutions">
          <div className="evolution-row">
            <div className="evolution-row-inner">
              <div className="evolution-sprite monster-sprite">
                <img src={evolving_src} alt="" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M24 16V8l16 16-16 16v-8H8V16z" />
              </svg>
              <div className="evolution-sprite monster-sprite">
                <img src={pic} alt="" />
              </div>
            </div>
            <div className="evolution-row-inner">
              <div className="evolution-sprite monster-sprite">
                <img src={pic} alt="" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M24 16V8l16 16-16 16v-8H8V16z" />
              </svg>
              <div className="evolution-sprite monster-sprite">
                <img src={src} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (!idx) {
      return (
        <div>
          <p>
            <strong>{name} </strong> has no evolutions
          </p>
        </div>
      );
    } else {
      return (
        <div className="evolutions">
          <div className="evolution-row">
            <div className="evolution-row-inner">
              <div className="evolution-sprite monster-sprite">
                <img src={pic} alt="" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M24 16V8l16 16-16 16v-8H8V16z" />
              </svg>
              <div className="evolution-sprite monster-sprite">
                <img src={src} alt="" />
              </div>
            </div>
            <div className="evolution-label">
              <span>
                <strong />.
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Characteristics;
