import React, { useContext } from "react";
import "../styles/views.css";
import { AppContext } from "../store/appContext.js";

import spainLogo from "../icons/languages/spain.png";
import englandLogo from "../icons/languages/england.png";
import frenchLogo from "../icons/languages/france.png";
import italyLogo from "../icons/languages/italy.png";

const WelcomeView = () => {
  const { store, actions } = useContext(AppContext);

  const titles = {
    spanish: "Bienvenido a nuestro Restaurante",
    english: "Welcome to our Restaurant",
    french: "Bienvenue dans notre Restaurant",
    italian: "Benvenuto nel nostro Ristorante",
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

  const handleClick = (language) => {
    actions.setLanguage(language);
    actions.setCurrentTab("dishes");
  };

  return (
    <>
      <div className="title text-center py-4 bg-white">{defineTitle(titles)}</div>
      <div className="language-selection-container">
        <div className="language-icon" onClick={() => handleClick("spanish")}>
          <img src={spainLogo} alt="Spanish" />
        </div>
        <div className="language-icon" onClick={() => handleClick("english")}>
          <img src={englandLogo} alt="English" />
        </div>
        <div className="language-icon" onClick={() => handleClick("french")}>
          <img src={frenchLogo} alt="French" />
        </div>
        <div className="language-icon" onClick={() => handleClick("italian")}>
          <img src={italyLogo} alt="Italian" />
        </div>
      </div>
    </>
  );
};

export default WelcomeView;
