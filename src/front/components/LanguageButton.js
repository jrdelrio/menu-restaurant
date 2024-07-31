import React, { useContext } from "react";
import { AppContext } from "../store/appContext.js";

import "../styles/language-button.css";

import spainLogo from "../icons/languages/spain.png";
import englandLogo from "../icons/languages/england.png";
import frenchLogo from "../icons/languages/france.png";
import italyLogo from "../icons/languages/italy.png";

const LanguageButton = () => {

  const { store, actions } = useContext(AppContext);

  const handleClick = (language) => {
    actions.setLanguage(language);
  };

  return (
    <div className="btn-position">
      {/* Dropdown */}

      <button
        type="button"
        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        L<span className="visually-hidden">Toggle Dropdown</span>
      </button>

      <ul className="dropdown-menu">
        <li className="align-right">
          <img
            src={spainLogo}
            className="lang-icon"
            onClick={() => handleClick("spanish")}
          />
        </li>
        <li className="align-right">
          <img
            src={englandLogo}
            className="lang-icon"
            onClick={() => handleClick("english")}
          />
        </li>
        <li className="align-right">
          <img
            src={frenchLogo}
            className="lang-icon"
            onClick={() => handleClick("french")}
          />
        </li>
        <li className="align-right">
          <img
            src={italyLogo}
            className="lang-icon"
            onClick={() => handleClick("italian")}
          />
        </li>
      </ul>
    </div>
  );
};

export default LanguageButton;
