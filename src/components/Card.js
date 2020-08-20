import React from "react";

const Card = (props) => {
  if (props.img === undefined) {
    return null;
  } else
    return (
      <div key={props.id} className="cards-container">
        <h3>{props.name}</h3>
        <p>Color: {props.colors}</p>
        <p>Type: {props.types}</p>
        <p>Subtype: {props.subtypes}</p>
        <p>Supertype: {props.supertypes}</p>
        <p>Rarity: {props.rarity}</p>
        <img src={props.img} alt={props.name} />
        <p>{props.text}</p>
      </div>
    );
};
export default Card;
