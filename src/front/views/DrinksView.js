import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

const DrinksView = () => {
  const { store, actions } = useContext(AppContext);

  const titles = {
    title: {
      titleSpanish: "Bebidas",
      titleEnglish: "Drinks",
      titleFrench: "Boissons",
      titleItalian: "Bevande",
    },
    subTitle1: {
      titleSpanish: "Bebidas sin alcohol",
      titleEnglish: "Non-Alcoholic Drinks",
      titleFrench: "Boissons sans alcool",
      titleItalian: "Bevande analcoliche",
    },
    subTitle2: {
      titleSpanish: "Cervezas",
      titleEnglish: "Beers",
      titleFrench: "Bières",
      titleItalian: "Birre",
    },
    subTitle3: {
      titleSpanish: "Cocktails",
      titleEnglish: "Cocktails",
      titleFrench: "Cocktails",
      titleItalian: "Cocktail",
    }
  };
  
  const drinksDB = [
    {
      nameSpanish: "Agua",
      price: "2.50",
      image: "images/agua.png",
      nameFrench: "Eau",
      nameEnglish: "Water",
      nameItalian: "Acqua",
    },
    {
      nameSpanish: "Agua con Gas",
      price: "2.50",
      image: "./images/perrier.png",
      nameFrench: "Eau Gazeuse",
      nameEnglish: "Sparkling Water",
      nameItalian: "Acqua Frizzante",
    },
    {
      nameSpanish: "Coca Cola",
      price: "3.50",
      image: "./images/coca-cola-classic.png",
      nameFrench: "Coca Cola",
      nameEnglish: "Coca Cola",
      nameItalian: "Coca Cola",
    },
    {
      nameSpanish: "Coca Cola Zero",
      price: "2.50",
      image: "./images/coca-cola-zero.png",
      nameFrench: "Coca Cola Zero",
      nameEnglish: "Coca Cola Zero",
      nameItalian: "Coca Cola Zero",
    },
    {
      nameSpanish: "Fanta",
      price: "2.50",
      image: "./images/fanta-classic.png",
      nameFrench: "Fanta",
      nameEnglish: "Fanta",
      nameItalian: "Fanta",
    },
    {
      nameSpanish: "Fanta Limón",
      price: "2.50",
      image: "./images/fanta-lemon.png",
      nameFrench: "Fanta Citron",
      nameEnglish: "Fanta Lemon",
      nameItalian: "Fanta Limone",
    },
    {
      nameSpanish: "Sprite",
      price: "2.50",
      image: "./images/sprite-classic.png",
      nameFrench: "Sprite",
      nameEnglish: "Sprite",
      nameItalian: "Sprite",
    },
    {
      nameSpanish: "7Up",
      price: "2.50",
      image: "images/7up.png",
      nameFrench: "7Up",
      nameEnglish: "7Up",
      nameItalian: "7Up",
    },
    {
      nameSpanish: "Nestea",
      price: "2.50",
      image: "images/nestea.png",
      nameFrench: "Nestea",
      nameEnglish: "Nestea",
      nameItalian: "Nestea",
    },
    {
      nameSpanish: "Agua Tónica",
      price: "2.50",
      image: "images/tonic.png",
      nameFrench: "L'eau Tonique",
      nameEnglish: "Tonic Water",
      nameItalian: "Acqua Tonica",
    },
    {
      nameSpanish: "Zumos",
      price: "2.50",
      image: "images/orange-juice.png",
      nameFrench: "Jus de fruit",
      nameEnglish: "Juices",
      nameItalian: "Succhi",
    },
    {
      nameSpanish: "Ginger Ale",
      price: "2.50",
      image: "images/ginger-ale.png",
      nameFrench: "Ginger Ale",
      nameEnglish: "Ginger Ale",
      nameItalian: "Ginger Ale",
    },
    {
      nameSpanish: "Red Bull",
      price: "3.00",
      image: "images/red-bull.png",
      nameFrench: "Red Bull",
      nameEnglish: "Red Bull",
      nameItalian: "Red Bull",
    },
    {
      nameSpanish: "Limonada",
      price: "3.50",
      image: "images/lemonade.png",
      nameFrench: "Limonade",
      nameEnglish: "Lemonade",
      nameItalian: "Limonata",
    },
  ];

  const beersDB = [
    {
      nameSpanish: "Moritz 7 330cc",
      price: "2.95",
      image: "../img/moritz7-330.png",
      nameFrench: "Moritz 7 330cc",
      nameEnglish: "Moritz 7 330cc",
      nameItalian: "Moritz 7 330cc",
    },
    {
      nameSpanish: "Moritz 7 650cc",
      price: "5.5",
      image: "images/moritz7-650.png",
      nameFrench: "Moritz 7 650cc",
      nameEnglish: "Moritz 7 650cc",
      nameItalian: "Moritz 7 650cc",
    },
    {
      nameSpanish: "Moritz Epidor",
      price: "3.00",
      image: "./images/epidor.png",
      nameFrench: "Moritz Epidor",
      nameEnglish: "Moritz Epidor",
      nameItalian: "Moritz Epidor",
    },
    {
      nameSpanish: "Ámbar (sin glúten)",
      price: "3.50",
      image: "images/ambar.png",
      nameFrench: "Ámbar (sans gluten)",
      nameEnglish: "Ámbar (gluten-free)",
      nameItalian: "Ámbar (senza glutine)",
    },
    {
      nameSpanish: "Red IPA",
      price: "3.50",
      image: "images/ipa.png",
      nameFrench: "Red IPA",
      nameEnglish: "Red IPA",
      nameItalian: "Red IPA",
    },
    {
      nameSpanish: "Moritz 0.0 (sin alcohol)",
      price: "2.95",
      image: "images/0.0.png",
      nameFrench: "Moritz 0.0 (sans alcool)",
      nameEnglish: "Moritz 0.0 (non-alcoholic)",
      nameItalian: "Moritz 0.0 (senza alcool)",
    },
  ];

  const cocktailsDB = [
    {
      nameSpanish: "Mojito",
      price: "7.00",
      image: "images/mojito.png",
      nameFrench: "Mojito",
      nameEnglish: "Mojito",
      nameItalian: "Mojito",
    },
    {
      nameSpanish: "Caipirinha",
      price: "7.00",
      image: "images/caipirinha.png",
      nameFrench: "Caipirinha",
      nameEnglish: "Caipirinha",
      nameItalian: "Caipirinha",
    },
    {
      nameSpanish: "Caipiroska",
      price: "7.00",
      image: "images/caipiroska.png",
      nameFrench: "Caipiroska",
      nameEnglish: "Caipiroska",
      nameItalian: "Caipiroska",
    },
    {
      nameSpanish: "Margarita",
      price: "7.50",
      image: "images/margarita.png",
      nameFrench: "Margarita",
      nameEnglish: "Margarita",
      nameItalian: "Margarita",
    },
    {
      nameSpanish: "Aperol Spritz",
      price: "6.00",
      image: "images/aperol-spritz.png",
      nameFrench: "Aperol Spritz",
      nameEnglish: "Aperol Spritz",
      nameItalian: "Aperol Spritz",
    },
    {
      nameSpanish: "Tequila Sunrise",
      price: "7.00",
      image: "images/tequila-sunrise.png",
      nameFrench: "Tequila Sunrise",
      nameEnglish: "Tequila Sunrise",
      nameItalian: "Tequila Sunrise",
    },
    {
      nameSpanish: "Negroni",
      price: "8.00",
      image: "images/negroni.png",
      nameFrench: "Negroni",
      nameEnglish: "Negroni",
      nameItalian: "Negroni",
    },
    {
      nameSpanish: "Long Island Iced Tea",
      price: "8.00",
      image: "images/long-island-tea.png",
      nameFrench: "Long Island Iced Tea",
      nameEnglish: "Long Island Iced Tea",
      nameItalian: "Long Island Iced Tea",
    },
    {
      nameSpanish: "Moscow Mule",
      price: "8.00",
      image: "images/moscow-mule.png",
      nameFrench: "Moscow Mule",
      nameEnglish: "Moscow Mule",
      nameItalian: "Moscow Mule",
    },
    {
      nameSpanish: "Espresso Martini",
      price: "8.00",
      image: "images/espresso-martini.png",
      nameFrench: "Espresso Martini",
      nameEnglish: "Espresso Martini",
      nameItalian: "Espresso Martini",
    },
  ];

  const defineLanguage = (item) => {
    switch (store.language) {
      case "spanish":
        return {
          title: item.titleSpanish,
          subTitle1: item.subTitle1.titleSpanish,
          subTitle2: item.subTitle2.titleSpanish,
          subTitle3: item.subTitle3.titleSpanish
        };
      case "english":
        return {
          title: item.titleEnglish,
          subTitle1: item.subTitle1.titleEnglish,
          subTitle2: item.subTitle2.titleEnglish,
          subTitle3: item.subTitle3.titleEnglish
        };
      case "french":
        return {
          title: item.titleFrench,
          subTitle1: item.subTitle1.titleFrench,
          subTitle2: item.subTitle2.titleFrench,
          subTitle3: item.subTitle3.titleFrench
        };
      case "italian":
        return {
          title: item.titleItalian,
          subTitle1: item.subTitle1.titleItalian,
          subTitle2: item.subTitle2.titleItalian,
          subTitle3: item.subTitle3.titleItalian
        };
      default:
        return {
          title: item.titleSpanish,
          subTitle1: item.subTitle1.titleSpanish,
          subTitle2: item.subTitle2.titleSpanish,
          subTitle3: item.subTitle3.titleSpanish
        };
    }
};


  return (
    <>
      <div className="title text-center py-4 bg-white">{defineLanguage(titles).title}</div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {/* sin alcohol */}
          <h2 className="sub-title py-2">{defineLanguage(titles).subTitle1}</h2>
          {drinksDB.map((drink, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card
                product={drink}
              />
            </div>
          ))}
          {/* cervezas */}
          <h2 className="sub-title py-2">{defineLanguage(titles).subTitle2}</h2>
          {beersDB.map((drink, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card
                product={drink}
              />
            </div>
          ))}
          {/* cocktails */}
          <h2 className="sub-title py-2">{defineLanguage(titles).subTitle3}</h2>
          {cocktailsDB.map((drink, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card
                product={drink}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DrinksView;
