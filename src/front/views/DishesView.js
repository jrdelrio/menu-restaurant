import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

const DishesView = () => {

  const { store, actions } = useContext(AppContext);

  const titles = {
    spanish: "Platos Principales",
    english: "Main Dishes",
    french: "Plats de Fond",
    italian: "Piati di Fondo"
  };

  const defineTitle = (titles) => {
    switch (store.language) {
      case "spanish":
        return titles.spanish;
      case "english":
        return titles.english;
      case "french":
        return titles.french;
      case "italian":
        return titles.italian;
      default:
        return titles.spanish;
    }
  };

    const dishesDB = [
        {
          name: "Patatas Bravas",
          nameEnglish: '"Bravas" Potatoes',
          nameFrench: "Pommes  Bravas",
          price: "5.50",
          image: "./images/patatas-bravas.png",
        },
       
        {
          name: "Bomba Tapería",
          nameEnglish: "Tapería Bomb",
          nameFrench: "Bombe Tapería",
          price: "2.85",
          image: "./images/bomba.png",
        },
        {
          name: "Croqueta de Jamón",
          nameEnglish: "Ham Croquette",
          nameFrench: "Croquette de Jambon",
          price: "1.80",
          image: "./images/croqueta.png",
        },
        {
          name: "Calamares Fritos",
          nameEnglish: "Fried Calamari",
          nameFrench: "Calamars Frits",
          price: "8.25",
          image: "./images/calamares.png",
        },
        {
          name: "Rabas de Pollo",
          nameEnglish: "Crispy Chicken Fingers",
          nameFrench: "Doigts de poulet croustillants",
          price: "6.95",
          image: "./images/rabas.png",
        },
        {
          name: "Sardinas a la plancha",
          nameEnglish: "Grilled Sardines",
          nameFrench: "Sardines Grillées",
          price: "5.75",
          image: "./images/sardinas.png",
        },
        {
          name: "Gambas al Ajillo",
          nameEnglish: "Shrimps in Garlic Sauce",
          nameFrench: "Crevettes à la Sauce à l'Ail",
          price: "8.95",
          image: "./images/gambas.png",
        },
        {
          name: "Pulpo a la gallega",
          nameEnglish: "Steamed Octopus",
          nameFrench: "Poulpe Cuit à la Vapeur",
          price: "13.95",
          image: "./images/generic-tapa.jpg",
        },
        {
          name: "Choricitos a la Cerveza",
          nameEnglish: "Baby Chorizos",
          nameFrench: "Chorizos à la Bière",
          price: "4.95",
          image: "./images/choricitos.png",
        },
        {
          name: "Lacón con Patatas Cocidas",
          nameEnglish: "Pork Shoulder",
          nameFrench: "Jambon aux Pommes de Terre Bouillies",
          price: "4.75",
          image: "./images/lacon.png",
        },
        {
          name: "Tortilla de Patatas",
          nameEnglish: "Spanish Omelette",
          nameFrench: "Frites Sauce Brava",
          price: "4.50",
          image: "./images/tortilla.png",
        },
        {
          name: "Champiñones al Jerez",
          nameEnglish: "Mushrooms in Sherry Sauce",
          nameFrench: "Champignons à la Sauce Xérès",
          price: "5.85",
          image: "./images/champinones.png",
        },
        {
          name: "Gyozas de Verduras",
          nameEnglish: "Vegetable Gyozas",
          nameFrench: "Gyosas aux Légumes",
          price: "6.50",
          image: "./images/generic-tapa.jpg",
        },
        {
          name: "Gyozas de Pollo (5pcs)",
          nameEnglish: "Chicken Gyosas",
          nameFrench: "Gyosas au Poulet",
          price: "6.50",
          image: "./images/gyosas-pollo.png",
        },
        {
          name: "Jamon Ibérico",
          nameEnglish: "Iberian Smoked Ham",
          nameFrench: "Jambon Ibérique",
          price: "12.95",
          image: "./images/jamon.png",
        },
        {
          name: "Pan con Tomate",
          nameEnglish: "Bread with Tomato",
          nameFrench: "pain à la Tomate",
          price: "2.50",
          image: "./images/pan-tomate.png",
        },
        {
          name: "Pan",
          nameEnglish: "Bread",
          nameFrench: "Pain",
          price: "1.50",
          image: "./images/pan.png",
        },
        {
          name: "Olivas",
          nameEnglish: "Olives",
          nameFrench: "Olives",
          price: "2.20",
          image: "./images/olivas.png",
        }
      ];

  return (
    <>
      <div className="title text-center py-4 bg-white">{defineTitle(titles)}</div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {dishesDB.map((dish, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
            <Card key={index} name={dish.name} price={dish.price}/>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DishesView;
