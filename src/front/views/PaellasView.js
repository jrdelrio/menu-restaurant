import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

import paellaMariscos from "../images/paella-mariscos.png";
import paellaVegetales from "../images/paella-verduras.png";
import arrozNegro from "../images/arroz-negro.png"

const PaellasView = () => {
  const titles = {
    spanishTitle: "Paellas",
    englishTitle: "Paellas",
    frenchTitle: "Paëllas",
    italianTitle: "Paelle",
  };

  const { store } = useContext(AppContext);

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
      image: paellaMariscos,
      descriptionSpanish: "Paella tradicional española con una variedad de mariscos frescos como gambas, mejillones y calamares.",
      descriptionEnglish: "Traditional Spanish paella with a variety of fresh seafood such as prawns, mussels, and calamari.",
      descriptionFrench: "Paella espagnole traditionnelle avec une variété de fruits de mer frais tels que des crevettes, des moules et des calamars.",
      descriptionItalian: "Paella spagnola tradizionale con una varietà di frutti di mare freschi come gamberi, cozze e calamari.",
    },
    {
      nameSpanish: "Paella de Verduras",
      nameEnglish: "Vegetable Paella",
      nameFrench: "Paella Aux Légumes",
      nameItalian: "Paella di Verdure",
      price: "22.00",
      image: paellaVegetales,
      descriptionSpanish: "Paella vegetariana hecha con una variedad de verduras frescas y sabrosas.",
      descriptionEnglish: "Vegetarian paella made with a variety of fresh and tasty vegetables.",
      descriptionFrench: "Paella végétarienne faite avec une variété de légumes frais et savoureux.",
      descriptionItalian: "Paella vegetariana fatta con una varietà di verdure fresche e gustose.",
    },
    {
      nameSpanish: "Arroz Negro",
      nameEnglish: "Black Rice",
      nameFrench: "Riz Noir",
      nameItalian: "Riso Nero",
      price: "27.00",
      image: arrozNegro,
      descriptionSpanish: "Delicioso arroz negro cocinado con tinta de calamar y acompañado de mariscos.",
      descriptionEnglish: "Delicious black rice cooked with squid ink and accompanied by seafood.",
      descriptionFrench: "Délicieux riz noir cuit à l'encre de calmar et accompagné de fruits de mer.",
      descriptionItalian: "Delizioso riso nero cotto con l'inchiostro di calamaro e accompagnato da frutti di mare.",
    },
];


  return (
    <>
      <div className="title text-center py-4 bg-white">
        {defineTitle(titles)}
      </div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {paellasDB.map((paella, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card product={paella} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaellasView;
