import React, { useContext } from "react";
import "../styles/navbar.css";
import NavbarButton from "./NavbarButton.js";
import { AppContext } from "../store/appContext.js";

// import views for sifferent tabs
import DishesView from "../views/DishesView.js";
import PaellasView from "../views/PaellasView.js";
import DrinksView from "../views/DrinksView.js";
import WinesView from "../views/WinesView.js";
import EggsView from "../views/EggsView.js";
import DessertsView from "../views/DessertsView.js";
import WelcomeView from "../views/WelcomeView.js";

export const Navbar = () => {
  const buttons = [
    { tag: "dishes" },
    { tag: "paellas" },
    { tag: "drinks" },
    // { tag: "wines" },
    { tag: "eggs" },
    { tag: "desserts" },
  ];

  const { store } = useContext(AppContext);

  const renderContent = () => {
    switch (store.currentTab) {
      case "dishes":
        console.log('renderizando dishes')
        return <DishesView />;
      case "paellas":
        return <PaellasView />;
      case "drinks":
        return <DrinksView />;
      case "wines":
        return <WinesView />;
      case "eggs":
        return <EggsView />;
      case "desserts":
        return <DessertsView />;
      default:
        return <WelcomeView />;
    }
  };

    return (
      <>
        <div className="fixed bottom-0 max-w-30rem left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
            {buttons.map((button, index) => (
              <NavbarButton key={index} tag={button.tag} />
            ))}
  
          </div>
        </div>
  
        {renderContent()}
      </>
    );
  }
