import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

import agua from "../images/agua.png";
import perrier from "../images/perrier.png";
import cocaColaClassic from "../images/coca-cola-classic.png";
import cocaColaZero from "../images/coca-cola-zero.png";
import fantaClassic from "../images/fanta-classic.png";
import fantaLemon from "../images/fanta-lemon.png";
import spriteClassic from "../images/sprite-classic.png";
import up7 from "../images/7up.png";
import nestea from "../images/nestea.png";
import tonic from "../images/tonic.png";
import orangeJuice from "../images/orange-juice.png";
import gingerAle from "../images/ginger-ale.png";
import redBull from "../images/red-bull.png";
import lemonade from "../images/lemonade.png";

import moritz7330 from "../images/moritz7-330.png";
import moritz7650 from "../images/moritz7-650.png";
import epidor from "../images/epidor.png";
import ambar from "../images/ambar.png";
import ipa from "../images/ipa.png";
import moritz00 from "../images/0.0.png";

import mojito from "../images/mojito.png";
import caipirinha from "../images/caipirinha.png";
import caipiroska from "../images/caipiroska.png";
import margarita from "../images/margarita.png";
import aperolSpritz from "../images/aperol-spritz.png";
import tequilaSunrise from "../images/tequila-sunrise.png";
import negroni from "../images/negroni.png";
import longIslandTea from "../images/long-island-tea.png";
import moscowMule from "../images/moscow-mule.png";
import espressoMartini from "../images/espresso-martini.png";

const DrinksView = () => {
  const { store } = useContext(AppContext);

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
    },
  };

  const drinksDB = [
    {
      nameSpanish: "Agua",
      price: "2.50",
      image: agua,
      nameFrench: "Eau",
      nameEnglish: "Water",
      nameItalian: "Acqua",
      descriptionSpanish: "Agua fresca y purificada.",
      descriptionEnglish: "Fresh and purified water.",
      descriptionFrench: "Eau fraîche et purifiée.",
      descriptionItalian: "Acqua fresca e purificata.",
    },
    {
      nameSpanish: "Agua con Gas",
      price: "2.50",
      image: perrier,
      nameFrench: "Eau Gazeuse",
      nameEnglish: "Sparkling Water",
      nameItalian: "Acqua Frizzante",
      descriptionSpanish: "Agua con gas refrescante.",
      descriptionEnglish: "Refreshing sparkling water.",
      descriptionFrench: "Eau gazeuse rafraîchissante.",
      descriptionItalian: "Acqua frizzante rinfrescante.",
    },
    {
      nameSpanish: "Coca Cola",
      price: "3.50",
      image: cocaColaClassic,
      nameFrench: "Coca Cola",
      nameEnglish: "Coca Cola",
      nameItalian: "Coca Cola",
      descriptionSpanish: "Bebida gaseosa clásica.",
      descriptionEnglish: "Classic soda beverage.",
      descriptionFrench: "Boisson gazeuse classique.",
      descriptionItalian: "Bevanda gassata classica.",
    },
    {
      nameSpanish: "Coca Cola Zero",
      price: "2.50",
      image: cocaColaZero,
      nameFrench: "Coca Cola Zero",
      nameEnglish: "Coca Cola Zero",
      nameItalian: "Coca Cola Zero",
      descriptionSpanish: "Versión sin azúcar de Coca Cola.",
      descriptionEnglish: "Sugar-free version of Coca Cola.",
      descriptionFrench: "Version sans sucre de Coca Cola.",
      descriptionItalian: "Versione senza zucchero di Coca Cola.",
    },
    {
      nameSpanish: "Fanta",
      price: "2.50",
      image: fantaClassic,
      nameFrench: "Fanta",
      nameEnglish: "Fanta",
      nameItalian: "Fanta",
      descriptionSpanish: "Refresco de naranja.",
      descriptionEnglish: "Orange soda.",
      descriptionFrench: "Soda à l'orange.",
      descriptionItalian: "Soda all'arancia.",
    },
    {
      nameSpanish: "Fanta Limón",
      price: "2.50",
      image: fantaLemon,
      nameFrench: "Fanta Citron",
      nameEnglish: "Fanta Lemon",
      nameItalian: "Fanta Limone",
      descriptionSpanish: "Refresco de limón.",
      descriptionEnglish: "Lemon soda.",
      descriptionFrench: "Soda au citron.",
      descriptionItalian: "Soda al limone.",
    },
    {
      nameSpanish: "Sprite",
      price: "2.50",
      image: spriteClassic,
      nameFrench: "Sprite",
      nameEnglish: "Sprite",
      nameItalian: "Sprite",
      descriptionSpanish: "Refresco de lima-limón.",
      descriptionEnglish: "Lemon-lime soda.",
      descriptionFrench: "Soda citron-citron vert.",
      descriptionItalian: "Soda al limone e lime.",
    },
    {
      nameSpanish: "7Up",
      price: "2.50",
      image: up7,
      nameFrench: "7Up",
      nameEnglish: "7Up",
      nameItalian: "7Up",
      descriptionSpanish: "Refresco de lima-limón.",
      descriptionEnglish: "Lemon-lime soda.",
      descriptionFrench: "Soda citron-citron vert.",
      descriptionItalian: "Soda al limone e lime.",
    },
    {
      nameSpanish: "Nestea",
      price: "2.50",
      image: nestea,
      nameFrench: "Nestea",
      nameEnglish: "Nestea",
      nameItalian: "Nestea",
      descriptionSpanish: "Té frío con sabor a limón.",
      descriptionEnglish: "Iced tea with lemon flavor.",
      descriptionFrench: "Thé glacé au citron.",
      descriptionItalian: "Tè freddo al limone.",
    },
    {
      nameSpanish: "Agua Tónica",
      price: "2.50",
      image: tonic,
      nameFrench: "L'eau Tonique",
      nameEnglish: "Tonic Water",
      nameItalian: "Acqua Tonica",
      descriptionSpanish: "Agua tónica refrescante.",
      descriptionEnglish: "Refreshing tonic water.",
      descriptionFrench: "Eau tonique rafraîchissante.",
      descriptionItalian: "Acqua tonica rinfrescante.",
    },
    {
      nameSpanish: "Zumos",
      price: "2.50",
      image: orangeJuice,
      nameFrench: "Jus de fruit",
      nameEnglish: "Juices",
      nameItalian: "Succhi",
      descriptionSpanish: "Variedad de zumos de frutas.",
      descriptionEnglish: "Variety of fruit juices.",
      descriptionFrench: "Variété de jus de fruits.",
      descriptionItalian: "Varietà di succhi di frutta.",
    },
    {
      nameSpanish: "Ginger Ale",
      price: "2.50",
      image: gingerAle,
      nameFrench: "Ginger Ale",
      nameEnglish: "Ginger Ale",
      nameItalian: "Ginger Ale",
      descriptionSpanish: "Refresco de jengibre.",
      descriptionEnglish: "Ginger soda.",
      descriptionFrench: "Soda au gingembre.",
      descriptionItalian: "Soda allo zenzero.",
    },
    {
      nameSpanish: "Red Bull",
      price: "3.00",
      image: redBull,
      nameFrench: "Red Bull",
      nameEnglish: "Red Bull",
      nameItalian: "Red Bull",
      descriptionSpanish: "Bebida energética.",
      descriptionEnglish: "Energy drink.",
      descriptionFrench: "Boisson énergétique.",
      descriptionItalian: "Bevanda energetica.",
    },
    {
      nameSpanish: "Limonada",
      price: "3.50",
      image: lemonade,
      nameFrench: "Limonade",
      nameEnglish: "Lemonade",
      nameItalian: "Limonata",
      descriptionSpanish: "Refresco de limón.",
      descriptionEnglish: "Lemon refreshment.",
      descriptionFrench: "Rafraîchissement au citron.",
      descriptionItalian: "Rinfresco al limone.",
    },
  ];

  const beersDB = [
    {
      nameSpanish: "Moritz 7 330cc",
      price: "2.95",
      image: moritz7330,
      nameFrench: "Moritz 7 330cc",
      nameEnglish: "Moritz 7 330cc",
      nameItalian: "Moritz 7 330cc",
      descriptionSpanish: "Cerveza Moritz 7 en formato 330cc.",
      descriptionEnglish: "Moritz 7 beer in 330cc format.",
      descriptionFrench: "Bière Moritz 7 en format 330cc.",
      descriptionItalian: "Birra Moritz 7 in formato 330cc.",
    },
    {
      nameSpanish: "Moritz 7 650cc",
      price: "5.5",
      image: moritz7650,
      nameFrench: "Moritz 7 650cc",
      nameEnglish: "Moritz 7 650cc",
      nameItalian: "Moritz 7 650cc",
      descriptionSpanish: "Cerveza Moritz 7 en formato 650cc.",
      descriptionEnglish: "Moritz 7 beer in 650cc format.",
      descriptionFrench: "Bière Moritz 7 en format 650cc.",
      descriptionItalian: "Birra Moritz 7 in formato 650cc.",
    },
    {
      nameSpanish: "Moritz Epidor",
      price: "3.00",
      image: epidor,
      nameFrench: "Moritz Epidor",
      nameEnglish: "Moritz Epidor",
      nameItalian: "Moritz Epidor",
      descriptionSpanish: "Cerveza Moritz Epidor.",
      descriptionEnglish: "Moritz Epidor beer.",
      descriptionFrench: "Bière Moritz Epidor.",
      descriptionItalian: "Birra Moritz Epidor.",
    },
    {
      nameSpanish: "Ámbar (sin glúten)",
      price: "3.50",
      image: ambar,
      nameFrench: "Ámbar (sans gluten)",
      nameEnglish: "Ámbar (gluten-free)",
      nameItalian: "Ámbar (senza glutine)",
      descriptionSpanish: "Cerveza Ámbar sin gluten.",
      descriptionEnglish: "Gluten-free Ámbar beer.",
      descriptionFrench: "Bière Ámbar sans gluten.",
      descriptionItalian: "Birra Ámbar senza glutine.",
    },
    {
      nameSpanish: "Red IPA",
      price: "3.50",
      image: ipa,
      nameFrench: "Red IPA",
      nameEnglish: "Red IPA",
      nameItalian: "Red IPA",
      descriptionSpanish: "Cerveza Red IPA.",
      descriptionEnglish: "Red IPA beer.",
      descriptionFrench: "Bière Red IPA.",
      descriptionItalian: "Birra Red IPA.",
    },
    {
      nameSpanish: "Moritz 0.0 (sin alcohol)",
      price: "2.95",
      image: moritz00,
      nameFrench: "Moritz 0.0 (sans alcool)",
      nameEnglish: "Moritz 0.0 (non-alcoholic)",
      nameItalian: "Moritz 0.0 (senza alcool)",
      descriptionSpanish: "Cerveza Moritz 0.0 sin alcohol.",
      descriptionEnglish: "Non-alcoholic Moritz 0.0 beer.",
      descriptionFrench: "Bière Moritz 0.0 sans alcool.",
      descriptionItalian: "Birra Moritz 0.0 senza alcool.",
    },
  ];

  const cocktailsDB = [
    {
      nameSpanish: "Mojito",
      price: "7.00",
      image: mojito,
      nameFrench: "Mojito",
      nameEnglish: "Mojito",
      nameItalian: "Mojito",
      descriptionSpanish: "Cóctel refrescante de ron, menta y lima.",
      descriptionEnglish: "Refreshing cocktail with rum, mint, and lime.",
      descriptionFrench:
        "Cocktail rafraîchissant au rhum, à la menthe et au citron vert.",
      descriptionItalian: "Cocktail rinfrescante con rum, menta e lime.",
    },
    {
      nameSpanish: "Caipirinha",
      price: "7.00",
      image: caipirinha,
      nameFrench: "Caipirinha",
      nameEnglish: "Caipirinha",
      nameItalian: "Caipirinha",
      descriptionSpanish: "Cóctel brasileño de cachaça y lima.",
      descriptionEnglish: "Brazilian cocktail with cachaça and lime.",
      descriptionFrench: "Cocktail brésilien avec cachaça et citron vert.",
      descriptionItalian: "Cocktail brasiliano con cachaça e lime.",
    },
    {
      nameSpanish: "Caipiroska",
      price: "7.00",
      image: caipiroska,
      nameFrench: "Caipiroska",
      nameEnglish: "Caipiroska",
      nameItalian: "Caipiroska",
      descriptionSpanish: "Variante de la Caipirinha con vodka.",
      descriptionEnglish: "Caipirinha variant with vodka.",
      descriptionFrench: "Variante de la Caipirinha avec de la vodka.",
      descriptionItalian: "Variante della Caipirinha con vodka.",
    },
    {
      nameSpanish: "Margarita",
      price: "7.50",
      image: margarita,
      nameFrench: "Margarita",
      nameEnglish: "Margarita",
      nameItalian: "Margarita",
      descriptionSpanish: "Cóctel clásico de tequila y lima.",
      descriptionEnglish: "Classic cocktail with tequila and lime.",
      descriptionFrench: "Cocktail classique avec tequila et citron vert.",
      descriptionItalian: "Cocktail classico con tequila e lime.",
    },
    {
      nameSpanish: "Aperol Spritz",
      price: "6.00",
      image: aperolSpritz,
      nameFrench: "Aperol Spritz",
      nameEnglish: "Aperol Spritz",
      nameItalian: "Aperol Spritz",
      descriptionSpanish: "Cóctel ligero con Aperol y prosecco.",
      descriptionEnglish: "Light cocktail with Aperol and prosecco.",
      descriptionFrench: "Cocktail léger avec Aperol et prosecco.",
      descriptionItalian: "Cocktail leggero con Aperol e prosecco.",
    },
    {
      nameSpanish: "Tequila Sunrise",
      price: "7.00",
      image: tequilaSunrise,
      nameFrench: "Tequila Sunrise",
      nameEnglish: "Tequila Sunrise",
      nameItalian: "Tequila Sunrise",
      descriptionSpanish: "Cóctel de tequila, naranja y granadina.",
      descriptionEnglish: "Cocktail with tequila, orange, and grenadine.",
      descriptionFrench: "Cocktail avec tequila, orange et grenadine.",
      descriptionItalian: "Cocktail con tequila, arancia e granatina.",
    },
    {
      nameSpanish: "Negroni",
      price: "8.00",
      image: negroni,
      nameFrench: "Negroni",
      nameEnglish: "Negroni",
      nameItalian: "Negroni",
      descriptionSpanish: "Cóctel clásico de ginebra, vermut y Campari.",
      descriptionEnglish: "Classic cocktail with gin, vermouth, and Campari.",
      descriptionFrench: "Cocktail classique avec gin, vermouth et Campari.",
      descriptionItalian: "Cocktail classico con gin, vermouth e Campari.",
    },
    {
      nameSpanish: "Long Island Iced Tea",
      price: "8.00",
      image: longIslandTea,
      nameFrench: "Long Island Iced Tea",
      nameEnglish: "Long Island Iced Tea",
      nameItalian: "Long Island Iced Tea",
      descriptionSpanish: "Cóctel potente con mezcla de licores.",
      descriptionEnglish: "Strong cocktail with a mix of liquors.",
      descriptionFrench: "Cocktail fort avec un mélange de liqueurs.",
      descriptionItalian: "Cocktail forte con un mix di liquori.",
    },
    {
      nameSpanish: "Moscow Mule",
      price: "8.00",
      image: moscowMule,
      nameFrench: "Moscow Mule",
      nameEnglish: "Moscow Mule",
      nameItalian: "Moscow Mule",
      descriptionSpanish: "Cóctel refrescante con vodka y jengibre.",
      descriptionEnglish: "Refreshing cocktail with vodka and ginger.",
      descriptionFrench: "Cocktail rafraîchissant avec vodka et gingembre.",
      descriptionItalian: "Cocktail rinfrescante con vodka e zenzero.",
    },
    {
      nameSpanish: "Espresso Martini",
      price: "8.00",
      image: espressoMartini,
      nameFrench: "Espresso Martini",
      nameEnglish: "Espresso Martini",
      nameItalian: "Espresso Martini",
      descriptionSpanish: "Cóctel de café con vodka.",
      descriptionEnglish: "Coffee cocktail with vodka.",
      descriptionFrench: "Cocktail au café avec vodka.",
      descriptionItalian: "Cocktail al caffè con vodka.",
    },
  ];

  const defineLanguage = (item) => {
    switch (store.language) {
      case "spanish":
        return {
          title: item.title.titleSpanish,
          subTitle1: item.subTitle1.titleSpanish,
          subTitle2: item.subTitle2.titleSpanish,
          subTitle3: item.subTitle3.titleSpanish,
        };
      case "english":
        return {
          title: item.title.titleEnglish,
          subTitle1: item.subTitle1.titleEnglish,
          subTitle2: item.ubTitle2.titleEnglish,
          subTitle3: item.subTitle3.titleEnglish,
        };
      case "french":
        return {
          title: item.title.titleFrench,
          subTitle1: item.subTitle1.titleFrench,
          subTitle2: item.subTitle2.titleFrench,
          subTitle3: item.subTitle3.titleFrench,
        };
      case "italian":
        return {
          title: item.title.titleItalian,
          subTitle1: item.subTitle1.titleItalian,
          subTitle2: item.subTitle2.titleItalian,
          subTitle3: item.subTitle3.titleItalian,
        };
      default:
        return {
          title: item.titleSpanish,
          subTitle1: item.subTitle1.titleSpanish,
          subTitle2: item.subTitle2.titleSpanish,
          subTitle3: item.subTitle3.titleSpanish,
        };
    }
  };

  return (
    <>
      <div className="title text-center py-4 bg-white">
        {defineLanguage(titles).title}
      </div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {/* sin alcohol */}
          <h2 className="sub-title py-2">{defineLanguage(titles).subTitle1}</h2>
          {drinksDB.map((drink, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card product={drink} />
            </div>
          ))}
          {/* cervezas */}
          <h2 className="sub-title py-2">{defineLanguage(titles).subTitle2}</h2>
          {beersDB.map((drink, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card product={drink} />
            </div>
          ))}
          {/* cocktails */}
          <h2 className="sub-title py-2">{defineLanguage(titles).subTitle3}</h2>
          {cocktailsDB.map((drink, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card product={drink} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DrinksView;
