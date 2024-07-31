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
    italian: "Piati di Fondo",
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
      nameSpanish: "Patatas Bravas",
      nameEnglish: '"Bravas" Potatoes',
      nameFrench: "Pommes Bravas",
      nameItalian: "Patate Bravas",
      price: "5.50",
      image: "./images/patatas-bravas.png",
    },
    {
      nameSpanish: "Bomba Tapería",
      nameEnglish: "Tapería Bomb",
      nameFrench: "Bombe Tapería",
      nameItalian: "Bomba Tapería",
      price: "2.85",
      image: "./images/bomba.png",
    },
    {
      nameSpanish: "Croqueta de Jamón",
      nameEnglish: "Ham Croquette",
      nameFrench: "Croquette de Jambon",
      nameItalian: "Crocchetta di Prosciutto",
      price: "1.80",
      image: "./images/croqueta.png",
    },
    {
      nameSpanish: "Calamares Fritos",
      nameEnglish: "Fried Calamari",
      nameFrench: "Calamars Frits",
      nameItalian: "Calamari Fritti",
      price: "8.25",
      image: "./images/calamares.png",
    },
    {
      nameSpanish: "Rabas de Pollo",
      nameEnglish: "Crispy Chicken Fingers",
      nameFrench: "Doigts de Poulet Croustillants",
      nameItalian: "Dita di Pollo Croccanti",
      price: "6.95",
      image: "./images/rabas.png",
    },
    {
      nameSpanish: "Sardinas a la Plancha",
      nameEnglish: "Grilled Sardines",
      nameFrench: "Sardines Grillées",
      nameItalian: "Sarde alla Griglia",
      price: "5.75",
      image: "./images/sardinas.png",
    },
    {
      nameSpanish: "Gambas al Ajillo",
      nameEnglish: "Shrimps in Garlic Sauce",
      nameFrench: "Crevettes à la Sauce à l'Ail",
      nameItalian: "Gamberetti in Salsa all'Aglio",
      price: "8.95",
      image: "./images/gambas.png",
    },
    {
      nameSpanish: "Pulpo a la Gallega",
      nameEnglish: "Steamed Octopus",
      nameFrench: "Poulpe Cuit à la Vapeur",
      nameItalian: "Polpo alla Gallega",
      price: "13.95",
      image: "./images/generic-tapa.jpg",
    },
    {
      nameSpanish: "Choricitos a la Cerveza",
      nameEnglish: "Baby Chorizos",
      nameFrench: "Chorizos à la Bière",
      nameItalian: "Chorizitos alla Birra",
      price: "4.95",
      image: "./images/choricitos.png",
    },
    {
      nameSpanish: "Lacón con Patatas Cocidas",
      nameEnglish: "Pork Shoulder",
      nameFrench: "Jambon aux Pommes de Terre Bouillies",
      nameItalian: "Spalla di Maiale con Patate Bollite",
      price: "4.75",
      image: "./images/lacon.png",
    },
    {
      nameSpanish: "Tortilla de Patatas",
      nameEnglish: "Spanish Omelette",
      nameFrench: "Omelette Espagnole",
      nameItalian: "Frittata di Patate",
      price: "4.50",
      image: "./images/tortilla.png",
    },
    {
      nameSpanish: "Champiñones al Jerez",
      nameEnglish: "Mushrooms in Sherry Sauce",
      nameFrench: "Champignons à la Sauce Xérès",
      nameItalian: "Funghi in Salsa di Sherry",
      price: "5.85",
      image: "./images/champinones.png",
    },
    {
      nameSpanish: "Gyozas de Verduras",
      nameEnglish: "Vegetable Gyozas",
      nameFrench: "Gyozas aux Légumes",
      nameItalian: "Gyozas di Verdure",
      price: "6.50",
      image: "./images/generic-tapa.jpg",
    },
    {
      nameSpanish: "Gyozas de Pollo (5pcs)",
      nameEnglish: "Chicken Gyozas",
      nameFrench: "Gyozas au Poulet",
      nameItalian: "Gyozas di Pollo",
      price: "6.50",
      image: "./images/gyosas-pollo.png",
    },
    {
      nameSpanish: "Jamón Ibérico",
      nameEnglish: "Iberian Smoked Ham",
      nameFrench: "Jambon Ibérique",
      nameItalian: "Prosciutto Ibérico",
      price: "12.95",
      image: "./images/jamon.png",
    },
    {
      nameSpanish: "Pan con Tomate",
      nameEnglish: "Bread with Tomato",
      nameFrench: "Pain à la Tomate",
      nameItalian: "Pane con Pomodoro",
      price: "2.50",
      image: "./images/pan-tomate.png",
    },
    {
      nameSpanish: "Pan",
      nameEnglish: "Bread",
      nameFrench: "Pain",
      nameItalian: "Pane",
      price: "1.50",
      image: "./images/pan.png",
    },
    {
      nameSpanish: "Olivas",
      nameEnglish: "Olives",
      nameFrench: "Olives",
      nameItalian: "Olive",
      price: "2.20",
      image: "./images/olivas.png",
    },
  ];

  return (
    <>
      <div className="title text-center py-4 bg-white">
        {defineTitle(titles)}
      </div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {dishesDB.map((dish, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              <Card 
              key={index} 
              product={dish} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DishesView;
