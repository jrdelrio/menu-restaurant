import React, { useContext, useEffect, useState } from "react";
import "../styles/card.css";
import genericTapa from "../images/generic-tapa.jpg";
import { AppContext } from "../store/appContext.js";
import Spinner from "./Spinner.js";

const Card = (props) => {
  const { store, actions } = useContext(AppContext);

  const [infoShow, setInfoShow] = useState(false);

  const defineLanguage = (dish) => {
    switch (store.language) {
      case "spanish":
        return {
          title: dish.nameSpanish,
          description: dish.descriptionSpanish,
        };
      case "english":
        return {
          title: dish.nameEnglish,
          description: dish.descriptionEnglish,
        };
      case "french":
        return {
          title: dish.nameFrench,
          description: dish.descriptionFrench,
        };
      case "italian":
        return {
          title: dish.nameItalian,
          description: dish.descriptionItalian,
        };
      default:
        return {
          title: dish.nameSpanish,
          description: dish.descriptionSpanish,
        };
    }
  };

  const handleClickCart = () => {
    actions.addItemToCart(props.product);
  };


    return (
      <>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={props.product.image}
                className="img-fluid rounded-start w-100 food-img-main-card"
                alt={defineLanguage(props.product)}
              />
            </div>
            <div className="col-md-8">
              {/* informacion o titulo */}
              {infoShow ? (
                <div className="card-body close-button-box">
                  <p className="card-text info-text pt-3">
                    {defineLanguage(props.product).description}
                  </p>
                  <button
                    type="button"
                    className="btn-close align-end"
                    aria-label="Close"
                    onClick={() => setInfoShow(false)}
                  ></button>
                </div>
              ) : (
                <div className="card-body">
                  <h5 className="card-title overflow-hidden">
                    {defineLanguage(props.product).title}
                  </h5>
                  <p className="card-text">{props.product.price}€</p>
                  <div className="card-bottom">
                    <p className="card-text">
                      <small className="text-body-secondary">ICONOS</small>
                    </p>
                    <div className="functions">
                      <i
                        className="fa-solid fa-cart-shopping me-3 hover-pink"
                        onClick={handleClickCart}
                      ></i>

                      <i
                        className="fa-solid fa-circle-info me-2 hover-pink"
                        onClick={() => setInfoShow(true)}
                      ></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
};

export default Card;
