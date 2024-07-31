import React from "react";
import "../styles/views.css";
import Card from "../components/Card";

const DessertsView = () => {
  const title = "Postres";


  const dessertsDB = [
    {
      name: "Crema Catalana",
      nameEnglish: "Catalan Cream",
      nameFrench: "Crème Catalane",
      price: "5.50",
      image: "./images/crema-catalana.png",
    },
    {
      name: "Strudel de Manzana",
      nameEnglish: "Apple Strudel",
      nameFrench: "Strudel aux Pommes",
      price: "5.50",
      image: "./images/strudel.png",
    },
    {
      name: "Helado",
      nameEnglish: "Ice-Cream",
      nameFrench: "Glace",
      price: "5.50",
      image: "./images/helado.png",
    },
    {
      name: "Sorbet de Limón con Cava",
      nameFrench: "Sorbet Citron au Cava",
      nameEnglish: "Lemon Sorbet with Cava",
      price: "5.50",
      image: "./images/generic-tapa.jpg",
    },
  ];

  return (
    <>
      <div className="title text-center py-4 bg-white">{title}</div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {dessertsDB.map((dessert, index) => (
            <div className="col-12 col-lg-12 col-md-6 mb-4">
              <Card key={index} name={dessert.name} price={dessert.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DessertsView;
