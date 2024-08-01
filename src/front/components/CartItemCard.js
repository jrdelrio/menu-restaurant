import React, { useContext } from "react";
import { AppContext } from "../store/appContext.js";
import "../styles/cart-card.css";
import genericTapa from "../images/generic-tapa.jpg";

const CartItemCard = (props) => {
  const { store, actions } = useContext(AppContext);

  console.log(props.product.image);

  return (
    <article className="card grid-container">
      <img src={genericTapa} />
      <h3 className="card-title">{props.product.nameSpanish}</h3>
      <input type="number" min='0' max='50' value={props.product.quant}/>
    </article>
  );
};

export default CartItemCard;
