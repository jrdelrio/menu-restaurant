import React, {useContext} from "react";
import "../styles/card.css";
import genericTapa from "../images/generic-tapa.jpg";
import { AppContext } from "../store/appContext.js";

const Card = (props) => {

    const { store, actions } = useContext(AppContext);

    const defineLanguage = (dish) => {
        switch (store.language) {
          case "spanish":
            return dish.nameSpanish;
          case "english":
            return dish.nameEnglish;
          case "french":
            return dish.nameFrench;
          case "italian":
            return dish.nameItalian;
          default:
            return dish.nameSpanish;
        }
      };

      console.log(props.product.image)

  return (
    <div className="card card-tapa w-18rem mx-auto">
      <img src={genericTapa} className="card-img-top" alt={defineLanguage(props.product)} />
      <div className="card-body card-body-top alineado-centro">
        <div>
          <h5 className="card-name">{defineLanguage(props.product)}</h5>
          <p className="card-text">{props.product.price}€</p>
        </div>
        <div>
          <i className="fa-solid fa-plus me-3 fontsize-3rem"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
