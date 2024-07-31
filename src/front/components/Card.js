import React from "react";
import "../styles/card.css";
import genericTapa from "../img/generic-tapa.jpg";

const Card = (props) => {
  return (
    <div className="card card-tapa w-18rem mx-auto">
      <img src={genericTapa} className="card-img-top" alt="" />
      <div className="card-body card-body-top alineado-centro">
        <div>
          <h5 className="card-name">{props.name}</h5>
          <p className="card-text">{props.price}€</p>
        </div>
        <div>
          <i className="fa-solid fa-plus me-3 fontsize-3rem"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
