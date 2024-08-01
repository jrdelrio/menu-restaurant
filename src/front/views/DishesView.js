import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

import patatasBravasImg from "../images/patatas-bravas.png";
import bombaImg from "../images/bomba.png";
import croquetaImg from "../images/croqueta.png";
import calamaresImg from "../images/calamares.png";
import rabasImg from "../images/rabas.png";
import sardinasImg from "../images/sardinas.png";
import gambasImg from "../images/gambas.png";
import pulpoGallega from "../images/pulpo-gallega.png";
import choricitosImg from "../images/choricitos.png";
import laconImg from "../images/lacon.png";
import tortillaImg from "../images/tortilla.png";
import champinonesImg from "../images/champinones.png";
import gyosasPolloImg from "../images/gyosas-pollo.png";
import jamonImg from "../images/jamon.png";
import panTomateImg from "../images/pan-tomate.png";
import panImg from "../images/pan.png";
import olivasImg from "../images/olivas.png";

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
      image: patatasBravasImg,
      descriptionSpanish:
        "Patatas fritas cubiertas con una salsa picante especial.",
      descriptionEnglish: "Fried potatoes topped with a special spicy sauce.",
      descriptionFrench:
        "Pommes de terre frites nappées d'une sauce épicée spéciale.",
      descriptionItalian:
        "Patate fritte ricoperte con una salsa piccante speciale.",
    },
    {
      nameSpanish: "Bomba Tapería",
      nameEnglish: "Tapería Bomb",
      nameFrench: "Bombe Tapería",
      nameItalian: "Bomba Tapería",
      price: "2.85",
      image: bombaImg,
      descriptionSpanish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionEnglish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionFrench:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionItalian:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      nameSpanish: "Croqueta de Jamón",
      nameEnglish: "Ham Croquette",
      nameFrench: "Croquette de Jambon",
      nameItalian: "Crocchetta di Prosciutto",
      price: "1.80",
      image: croquetaImg,
      descriptionSpanish: "Deliciosas croquetas rellenas de jamón serrano.",
      descriptionEnglish: "Delicious croquettes filled with serrano ham.",
      descriptionFrench: "Délicieuses croquettes farcies au jambon serrano.",
      descriptionItalian: "Deliziose crocchette ripiene di prosciutto serrano.",
    },
    {
      nameSpanish: "Calamares Fritos",
      nameEnglish: "Fried Calamari",
      nameFrench: "Calamars Frits",
      nameItalian: "Calamari Fritti",
      price: "8.25",
      image: calamaresImg,
      descriptionSpanish: "Calamares frescos rebozados y fritos hasta dorarse.",
      descriptionEnglish:
        "Fresh calamari battered and fried to a golden brown.",
      descriptionFrench:
        "Calamars frais panés et frits jusqu'à ce qu'ils soient dorés.",
      descriptionItalian: "Calamari freschi impanati e fritti fino a doratura.",
    },
    {
      nameSpanish: "Rabas de Pollo",
      nameEnglish: "Crispy Chicken Fingers",
      nameFrench: "Doigts de Poulet Croustillants",
      nameItalian: "Dita di Pollo Croccanti",
      price: "6.95",
      image: rabasImg,
      descriptionSpanish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionEnglish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionFrench:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionItalian:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      nameSpanish: "Sardinas a la Plancha",
      nameEnglish: "Grilled Sardines",
      nameFrench: "Sardines Grillées",
      nameItalian: "Sarde alla Griglia",
      price: "5.75",
      image: sardinasImg,
      descriptionSpanish:
        "Sardinas frescas asadas a la parrilla con un toque de sal.",
      descriptionEnglish: "Fresh sardines grilled with a touch of salt.",
      descriptionFrench: "Sardines fraîches grillées avec une touche de sel.",
      descriptionItalian: "Sardine fresche grigliate con un tocco di sale.",
    },
    {
      nameSpanish: "Gambas al Ajillo",
      nameEnglish: "Shrimps in Garlic Sauce",
      nameFrench: "Crevettes à la Sauce à l'Ail",
      nameItalian: "Gamberetti in Salsa all'Aglio",
      price: "8.95",
      image: gambasImg,
      descriptionSpanish: "Gambas salteadas en una deliciosa salsa de ajo.",
      descriptionEnglish: "Shrimps sautéed in a delicious garlic sauce.",
      descriptionFrench: "Crevettes sautées dans une délicieuse sauce à l'ail.",
      descriptionItalian:
        "Gamberetti saltati in una deliziosa salsa all'aglio.",
    },
    {
      nameSpanish: "Pulpo a la Gallega",
      nameEnglish: "Steamed Octopus",
      nameFrench: "Poulpe Cuit à la Vapeur",
      nameItalian: "Polpo alla Gallega",
      price: "13.95",
      image: pulpoGallega,
      descriptionSpanish:
        "Pulpo tierno servido con pimentón, sal y aceite de oliva.",
      descriptionEnglish:
        "Tender octopus served with paprika, salt, and olive oil.",
      descriptionFrench:
        "Poulpe tendre servi avec du paprika, du sel et de l'huile d'olive.",
      descriptionItalian:
        "Polpo tenero servito con paprika, sale e olio d'oliva.",
    },
    {
      nameSpanish: "Choricitos a la Cerveza",
      nameEnglish: "Baby Chorizos",
      nameFrench: "Chorizos à la Bière",
      nameItalian: "Chorizitos alla Birra",
      price: "4.95",
      image: choricitosImg,
      descriptionSpanish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionEnglish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionFrench:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionItalian:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      nameSpanish: "Lacón con Patatas Cocidas",
      nameEnglish: "Pork Shoulder",
      nameFrench: "Jambon aux Pommes de Terre Bouillies",
      nameItalian: "Spalla di Maiale con Patate Bollite",
      price: "4.75",
      image: laconImg,
      descriptionSpanish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionEnglish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionFrench:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionItalian:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      nameSpanish: "Tortilla de Patatas",
      nameEnglish: "Spanish Omelette",
      nameFrench: "Omelette Espagnole",
      nameItalian: "Frittata di Patate",
      price: "4.50",
      image: tortillaImg,
      descriptionSpanish: "Clásica tortilla española con patatas y cebolla.",
      descriptionEnglish: "Classic Spanish omelette with potatoes and onions.",
      descriptionFrench:
        "Omelette espagnole classique avec des pommes de terre et des oignons.",
      descriptionItalian: "Classica frittata spagnola con patate e cipolle.",
    },
    {
      nameSpanish: "Champiñones al Jerez",
      nameEnglish: "Mushrooms in Sherry Sauce",
      nameFrench: "Champignons à la Sauce Xérès",
      nameItalian: "Funghi in Salsa di Sherry",
      price: "5.85",
      image: champinonesImg,
      descriptionSpanish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionEnglish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionFrench:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionItalian:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      nameSpanish: "Gyozas de Pollo (5pcs)",
      nameEnglish: "Chicken Gyozas",
      nameFrench: "Gyozas au Poulet",
      nameItalian: "Gyozas di Pollo",
      price: "6.50",
      image: gyosasPolloImg,
      descriptionSpanish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionEnglish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionFrench:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionItalian:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      nameSpanish: "Jamón Ibérico",
      nameEnglish: "Iberian Smoked Ham",
      nameFrench: "Jambon Ibérique",
      nameItalian: "Prosciutto Ibérico",
      price: "12.95",
      image: jamonImg,
      descriptionSpanish: "Jamón ibérico curado de alta calidad.",
      descriptionEnglish: "High-quality cured Iberian ham.",
      descriptionFrench: "Jambon ibérique de haute qualité.",
      descriptionItalian: "Prosciutto iberico di alta qualità.",
    },
    {
      nameSpanish: "Pan con Tomate",
      nameEnglish: "Bread with Tomato",
      nameFrench: "Pain à la Tomate",
      nameItalian: "Pane con Pomodoro",
      price: "2.50",
      image: panTomateImg,
      descriptionSpanish: "Pan crujiente con tomate fresco rallado.",
      descriptionEnglish: "Crispy bread with fresh grated tomato.",
      descriptionFrench: "Pain croustillant avec tomate fraîche râpée.",
      descriptionItalian: "Pane croccante con pomodoro fresco grattugiato.",
    },
    {
      nameSpanish: "Pan",
      nameEnglish: "Bread",
      nameFrench: "Pain",
      nameItalian: "Pane",
      price: "1.50",
      image: panImg,
      descriptionSpanish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionEnglish:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionFrench:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      descriptionItalian:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      nameSpanish: "Olivas",
      nameEnglish: "Olives",
      nameFrench: "Olives",
      nameItalian: "Olive",
      price: "2.20",
      image: olivasImg,
      descriptionSpanish: "Una selección de olivas verdes y negras.",
      descriptionEnglish: "A selection of green and black olives.",
      descriptionFrench: "Une sélection d'olives vertes et noires.",
      descriptionItalian: "Una selezione di olive verdi e nere.",
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
              <Card key={index} product={dish} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DishesView;
