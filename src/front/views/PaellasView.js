import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

const PaellasView = () => {
  const title = "Paellas";

  const { store, actions } = useContext(AppContext);

  const defineTitle = (titles) => {
    switch (store.language) {
      case "spanish":
        return titles.spanish;
      case "english":
        return titles.english;
      case "french":
        return titles.french;
      case "italian":
        return titles.italian;
      default:
        return titles.spanish;
    }
  };

  const paellasDB = [
    {
      name: "Paella de Mariscos",
      nameEnglish: "Seafood Paella",
      nameFrench: "Paella au Fruits de Mer",
      price: "27.00",
      image: "./images/paella-mariscos.png",
    },
    {
      name: "Paella de Verduras",
      nameEnglish: "Vegetables Paella",
      nameFrench: "Paëlla Aux Légumes",
      price: "22.00",
      image: "./images/paella-verduras.png",
    },
    {
      name: "Arroz Negro",
      nameEnglish: "Black Rise",
      price: "27.00",
      image: "./images/arroz-negro.png",
    },
  ];

  return (
    <>
      <div className="title text-center py-4 bg-white">{title}</div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {paellasDB.map((dish, index) => (
            <div className="col-12 col-lg-12 col-md-6 mb-4">
              <Card key={index} name={dish.name} price={dish.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaellasView;
