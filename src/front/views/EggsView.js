import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

import huevosJamon from '../images/huevos-jamon.png';
import huevosChorizo from '../images/huevos-chorizo.png';
import huevosButifarra from '../images/huevos-butifarra.png';

const EggsView = () => {
  const { store } = useContext(AppContext);

  const titles = {
    spanishTitle: "Huevos Rotos",
    englishTitle: "Fried Eggs",
    frenchTitle: "Œufs Frits",
    italianTitle: "Uova Fritte",
  };

  const eggsDB = [
    {
        nameSpanish: "con Jamón Ibérico",
        nameEnglish: "with Iberic Ham",
        nameFrench: "avec Jambon Ibérique",
        nameItalian: "con Prosciutto Iberico",
        price: "9.50",
        image: huevosJamon,
        descriptionSpanish: "Huevos rotos con delicioso jamón ibérico.",
        descriptionEnglish: "Broken eggs with delicious Iberian ham.",
        descriptionFrench: "Œufs cassés avec du délicieux jambon ibérique.",
        descriptionItalian: "Uova rotte con delizioso prosciutto iberico.",
    },
    {
        nameSpanish: "con Choricitos",
        nameEnglish: "with Chorizos",
        nameFrench: "avec Chorizos",
        nameItalian: "con Chorizo",
        price: "8.50",
        image: huevosChorizo,
        descriptionSpanish: "Huevos rotos acompañados de sabrosos choricitos.",
        descriptionEnglish: "Broken eggs accompanied by tasty chorizos.",
        descriptionFrench: "Œufs cassés accompagnés de savoureux chorizos.",
        descriptionItalian: "Uova rotte accompagnate da gustosi chorizo.",
    },
    {
        nameSpanish: "con Butifarra Negra",
        nameEnglish: "with Sausage",
        nameFrench: "avec Saucisse",
        nameItalian: "con Salsiccia",
        price: "8.50",
        image: huevosButifarra,
        descriptionSpanish: "Huevos rotos con butifarra negra.",
        descriptionEnglish: "Broken eggs with black sausage.",
        descriptionFrench: "Œufs cassés avec saucisse noire.",
        descriptionItalian: "Uova rotte con salsiccia nera.",
    }
];

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

  return (
    <>
      <div className="title text-center py-4 bg-white">
        {defineTitle(titles)}
      </div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {eggsDB.map((egg, index) => (
            <div className="col-12 col-lg-12 col-md-6 mb-4" key={index}>
              <Card product={egg} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EggsView;
