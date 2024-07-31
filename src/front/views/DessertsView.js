import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

const DessertsView = () => {
  const { store, actions } = useContext(AppContext);

  const titles = {
    spanishTitle: "Postres",
    englishTitle: "Desserts",
    frenchTitle: "Desserts",
    italianTitle: "Dolci",
  };

  const dessertsDB = [
    {
      nameSpanish: "Crema Catalana",
      nameEnglish: "Catalan Cream",
      nameFrench: "Crème Catalane",
      nameItalian: "Crema Catalana",
      price: "5.50",
      image: "./images/crema-catalana.png",
    },
    {
      nameSpanish: "Strudel de Manzana",
      nameEnglish: "Apple Strudel",
      nameFrench: "Strudel aux Pommes",
      nameItalian: "Strudel di Mele",
      price: "5.50",
      image: "./images/strudel.png",
    },
    {
      nameSpanish: "Helado",
      nameEnglish: "Ice-Cream",
      nameFrench: "Glace",
      nameItalian: "Gelato",
      price: "5.50",
      image: "./images/helado.png",
    },
    {
      nameSpanish: "Sorbet de Limón con Cava",
      nameEnglish: "Lemon Sorbet with Cava",
      nameFrench: "Sorbet Citron au Cava",
      nameItalian: "Sorbetto al Limone con Cava",
      price: "5.50",
      image: "./images/generic-tapa.jpg",
    },
    {
      nameSpanish: "Tarta de Santiago",
      nameEnglish: "Santiago Cake",
      nameFrench: "Gâteau de Santiago",
      nameItalian: "Torta di Santiago",
      price: "5.00",
      image: "./images/tarta-santiago.png",
    },
    {
      nameSpanish: "Churros con Chocolate",
      nameEnglish: "Churros with Chocolate",
      nameFrench: "Churros au Chocolat",
      nameItalian: "Churros con Cioccolato",
      price: "4.50",
      image: "./images/churros-chocolate.png",
    },
    {
      nameSpanish: "Flan de Huevo",
      nameEnglish: "Egg Flan",
      nameFrench: "Flan aux Œufs",
      nameItalian: "Flan all'Uovo",
      price: "3.50",
      image: "./images/flan-huevo.png",
    },
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
          {dessertsDB.map((dessert, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card product={dessert} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DessertsView;
