import React from "react";
import "../styles/views.css";
import Card from "../components/Card";

const EggsView = () => {

  const title = 'Huevos Rotos';

    const eggsDB = [
      {
        name: "con Jamón Ibérico",
        nameFrench: "avec Jambon Ibérique",
        nameEnglish: "with Iberic Ham",
        price: "9.50",
        image: "./images/huevos-jamon.png",
      },
      {
        name: "con Choricitos",
        nameFrench: "avec Chorizos",
        nameEnglish: "with Chorizos",
        price: "8.50",
        image: "./images/huevos-chorizo.png",
      },
      {
        name: "con Butifarra Negra",
        nameFrench: "avec Saucisse",
        nameEnglish: "with Sausage",
        price: "8.50",
        image: "./images/huevos-butifarra.png",
      }
    ];

  return (
    <>
      <div className="title text-center py-4 bg-white">{title}</div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {eggsDB.map((wine, index) => (
            <div className="col-12 col-lg-12 col-md-6 mb-4">
            <Card key={index} name={wine.name} price={wine.price}/>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EggsView;
