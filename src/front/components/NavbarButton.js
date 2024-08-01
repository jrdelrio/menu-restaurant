import React, { useState, useContext } from "react";
import { AppContext } from "../store/appContext";
import '@fortawesome/fontawesome-free/css/all.css';


const NavbarButton = (props) => {
  const { store, actions } = useContext(AppContext);

  console.log(store)

  const handleClick = () => {
    actions.setCurrentTab(props.tag);
  };

  const [ icon, setIcon ] = useState(props.tag); 

  const selectIcon = (tag) => {
    switch (tag) {
      case "dishes":
        // console.log(`este icon es ${tag}`);
        return <i className="fa-solid fa-mug-hot"></i>;
      case "paellas":
        // console.log(`este icon es ${tag}`);
        return <i className="fa-solid fa-mug-hot"></i>;
      case "drinks":
        // console.log(`este icon es ${tag}`);
        return <i className="fa-solid fa-bacon"></i>;
      case "wines":
        // console.log(`este icon es ${tag}`);
        return <i className="fa-solid fa-mug-hot"></i>;
      case "eggs":
        // console.log(`este icon es ${tag}`);
        return <i className="fa-solid fa-bowl-food"></i>;
      case "desserts":
        // console.log(`este icon es ${tag}`);
        return <i className="fa-solid fa-mug-hot"></i>;
      default:
        // console.log(`este icon es default`);
        return <i className="fa-solid fa-bacon"></i>;
    }
  };

  return (
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group navbar-tab"
      data-target="folder-content-tapas"
      onClick={handleClick}
      disabled={!store.language}
    >
      {selectIcon(icon)}
    </button>
  );
};

export default NavbarButton;
