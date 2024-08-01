import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

import cremaCatalana from '../images/crema-catalana.png';
import strudel from '../images/strudel.png';
import helado from '../images/helado.png';
import tartaSantiago from '../images/tarta-santiago.png';
import churrosChocolate from '../images/churros-chocolate.png';
import flanHuevo from '../images/flan-huevo.png';

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
      image: cremaCatalana,
      descriptionSpanish:
        "Deliciosa crema catalana con una capa de azúcar caramelizado.",
      descriptionEnglish:
        "Delicious Catalan cream with a layer of caramelized sugar.",
      descriptionFrench:
        "Délicieuse crème catalane avec une couche de sucre caramélisé.",
      descriptionItalian:
        "Deliziosa crema catalana con uno strato di zucchero caramellato.",
    },
    {
      nameSpanish: "Strudel de Manzana",
      nameEnglish: "Apple Strudel",
      nameFrench: "Strudel aux Pommes",
      nameItalian: "Strudel di Mele",
      price: "5.50",
      image: strudel,
      descriptionSpanish:
        "Strudel de manzana con un relleno dulce y especiado.",
      descriptionEnglish: "Apple strudel with a sweet and spiced filling.",
      descriptionFrench:
        "Strudel aux pommes avec un remplissage sucré et épicé.",
      descriptionItalian: "Strudel di mele con un ripieno dolce e speziato.",
    },
    {
      nameSpanish: "Helado",
      nameEnglish: "Ice-Cream",
      nameFrench: "Glace",
      nameItalian: "Gelato",
      price: "5.50",
      image: helado,
      descriptionSpanish:
        "Delicioso helado cremoso disponible en varios sabores.",
      descriptionEnglish:
        "Delicious creamy ice-cream available in various flavors.",
      descriptionFrench:
        "Délicieuse glace crémeuse disponible en plusieurs saveurs.",
      descriptionItalian: "Delizioso gelato cremoso disponibile in vari gusti.",
    },
    {
      nameSpanish: "Tarta de Santiago",
      nameEnglish: "Santiago Cake",
      nameFrench: "Gâteau de Santiago",
      nameItalian: "Torta di Santiago",
      price: "5.00",
      image: tartaSantiago,
      descriptionSpanish: "Tradicional tarta de almendra gallega.",
      descriptionEnglish: "Traditional Galician almond cake.",
      descriptionFrench: "Gâteau traditionnel aux amandes de Galice.",
      descriptionItalian: "Tradizionale torta di mandorle galiziana.",
    },
    {
      nameSpanish: "Churros con Chocolate",
      nameEnglish: "Churros with Chocolate",
      nameFrench: "Churros au Chocolat",
      nameItalian: "Churros con Cioccolato",
      price: "4.50",
      image: churrosChocolate,
      descriptionSpanish: "Churros crujientes servidos con chocolate caliente.",
      descriptionEnglish: "Crispy churros served with hot chocolate.",
      descriptionFrench: "Churros croustillants servis avec du chocolat chaud.",
      descriptionItalian: "Churros croccanti serviti con cioccolato caldo.",
    },
    {
      nameSpanish: "Flan de Huevo",
      nameEnglish: "Egg Flan",
      nameFrench: "Flan aux Œufs",
      nameItalian: "Flan all'Uovo",
      price: "3.50",
      image: flanHuevo,
      descriptionSpanish: "Clásico flan de huevo con caramelo.",
      descriptionEnglish: "Classic egg flan with caramel.",
      descriptionFrench: "Flan aux œufs classique avec du caramel.",
      descriptionItalian: "Classico flan all'uovo con caramello.",
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
