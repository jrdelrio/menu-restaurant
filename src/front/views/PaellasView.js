import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

const PaellasView = () => {
  const titles = {
    spanishTitle: "Paellas",
    englishTitle: "Paellas",
    frenchTitle: "Paëllas",
    italianTitle: "Paelle"
};

  const { store, actions } = useContext(AppContext);

  const defineTitle = (titles) => {
    switch (store.language) {
      case "spanish":
        return titles.spanishTitle;
      case "english":
        return titles.englishTitle;
      case "french":
        return titles.frenchTitle;
      case "italian":
        return titles.italianTitle;
      default:
        return titles.spanishTitle;
    }
  };

  const paellasDB = [
    {
      nameSpanish: "Paella de Mariscos",
      nameEnglish: "Seafood Paella",
      nameFrench: "Paella aux Fruits de Mer",
      nameItalian: "Paella di Frutti di Mare",
      price: "27.00",
      image: "../image/paella-mariscos.png",
    },
    {
      nameSpanish: "Paella de Verduras",
      nameEnglish: "Vegetable Paella",
      nameFrench: "Paella Aux Légumes",
      nameItalian: "Paella di Verdure",
      price: "22.00",
      image: "../image/paella-verduras.png",
    },
    {
      nameSpanish: "Arroz Negro",
      nameEnglish: "Black Rice",
      nameFrench: "Riz Noir",
      nameItalian: "Riso Nero",
      price: "27.00",
      image: "../image/arroz-negro.png",
    },
];


  return (
    <>
      <div className="title text-center py-4 bg-white">{defineTitle(titles)}</div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {paellasDB.map((paella, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card product={paella}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaellasView;
