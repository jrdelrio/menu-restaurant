import React from "react";
import "../styles/views.css";
import Card from "../components/Card";

const DrinksView = () => {
  const title = "Bebidas";
  const subTitle1 = "Bebidas sin alcohol";
  const subTitle2 = "Cervezas";
  const subTitle3 = "Cocktails";

  const drinksDB = [
    {
      name: "Agua",
      price: "2.50",
      image: "images/agua.png",
      nameFrench: "Eau",
      nameEnglish: "Water",
    },
    {
      name: "Agua con Gas",
      price: "2.50",
      image: "./images/perrier.png",
      nameFrench: "Eau Gazeuse",
      nameEnglish: "Sparkling Water",
    },
    {
      name: "Coca Cola",
      price: "3.50",
      image: "./images/coca-cola-classic.png",
      nameFrench: "Coca Cola",
      nameEnglish: "Coca Cola",
    },
    {
      name: "Coca Cola Zero",
      price: "2.50",
      image: "./images/coca-cola-zero.png",
      nameFrench: "Coca Cola Zero",
      nameEnglish: "Coca Cola Zero",
    },
    {
      name: "Fanta",
      price: "2.50",
      image: "./images/fanta-classic.png",
      nameFrench: "Fanta",
      nameEnglish: "Fanta",
    },
    {
      name: "Fanta Limón",
      price: "2.50",
      image: "./images/fanta-lemon.png",
      nameFrench: "Fanta Citron",
      nameEnglish: "Fanta Lemon",
    },
    {
      name: "Sprite",
      price: "2.50",
      image: "./images/sprite-classic.png",
      nameFrench: "Sprite",
      nameEnglish: "Sprite",
    },
    {
      name: "7Up",
      price: "2.50",
      image: "images/7up.png",
      nameFrench: "7Up",
      nameEnglish: "7Up",
    },
    {
      name: "Nestea",
      price: "2.50",
      image: "images/nestea.png",
      nameFrench: "Nestea",
      nameEnglish: "Nestea",
    },
    {
      name: "Agua Tónica",
      price: "2.50",
      image: "images/tonic.png",
      nameFrench: "L'eau Tonique",
      nameEnglish: "Tonic Water",
    },
    {
      name: "Zumos",
      price: "2.50",
      image: "images/orange-juice.png",
      nameFrench: "Jus de fruit",
      nameEnglish: "Juices",
    },
    {
      name: "Ginger Ale",
      price: "2.50",
      image: "images/ginger-ale.png",
      nameFrench: "Ginger Ale",
      nameEnglish: "Ginger Ale",
    },
    {
      name: "Red Bull",
      price: "3.00",
      image: "images/red-bull.png",
      nameFrench: "Red Bull",
      nameEnglish: "Red Bull",
    },
    {
      name: "Limonada",
      price: "3.50",
      image: "images/lemonade.png",
      nameFrench: "Limonade",
      nameEnglish: "Lemonade",
    },
  ];

  const beersDB = [
    {
      name: "Moritz 7 330cc",
      price: "2.95",
      image: "images/moritz7-330.png",
    },
    {
      name: "Moritz 7 650cc",
      price: "5.5",
      image: "images/moritz7-650.png",
    },
    {
      name: "Moritz Epidor",
      price: "3.00",
      image: "./images/epidor.png",
    },
    {
      name: "Ámbar (sin glúten)",
      price: "3.50",
      image: "images/ambar.png",
    },
    {
      name: "Red IPA",
      price: "3.50",
      image: "images/ipa.png",
    },
    {
      name: "Moritz 0.0 (sin alcohol)",
      price: "2.95",
      image: "images/0.0.png",
    }
  ];

  const cocktailsDB = [
    {
      name: "Mojito",
      price: "7.00",
      image: "images/mojito.png",
    },
    {
      name: "Caipirinha",
      price: "7.00",
      image: "images/caipirinha.png",
    },
    {
      name: "Caipiroska",
      price: "7.00",
      image: "images/caipiroska.png",
    },
    {
      name: "Margarita",
      price: "7.50",
      image: "images/margarita.png",
    },
    {
      name: "Aperol Spritz",
      price: "6.00",
      image: "images/aperol-spritz.png",
    },
    {
      name: "Tequila Sunrise",
      price: "7.00",
      image: "images/tequila-sunrise.png",
    },
    {
      name: "Negroni",
      price: "8.00",
      image: "images/negroni.png",
    },
    {
      name: "Long Island Iced Tea",
      price: "8.00",
      image: "images/long-island-tea.png",
    },
    {
      name: "Moscow Mule",
      price: "8.00",
      image: "images/moscow-mule.png",
    },
    {
      name: "Espresso Martini",
      price: "8.00",
      image: "images/espresso-martini.png",
    }
  ];

  //falta agregar los coctails y cervezas

  return (
    <>
      <div className="title text-center py-4 bg-white">{title}</div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {/* sin alcohol */}
          <h2 className="sub-title py-2">{subTitle1}</h2>
          {drinksDB.map((drink, index) => (
            <div className="col-12 col-lg-12 col-md-6 mb-4">
              <Card key={index} name={drink.name} price={drink.price} />
            </div>
          ))}
          {/* cervezas */}
          <h2 className="sub-title py-2">{subTitle2}</h2>
          {beersDB.map((drink, index) => (
            <div className="col-12 col-lg-12 col-md-6 mb-4">
              <Card key={index} name={drink.name} price={drink.price} />
            </div>
          ))}
          {/* cocktails */}
          <h2 className="sub-title py-2">{subTitle3}</h2>
          {cocktailsDB.map((drink, index) => (
            <div className="col-12 col-lg-12 col-md-6 mb-4">
              <Card key={index} name={drink.name} price={drink.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DrinksView;
