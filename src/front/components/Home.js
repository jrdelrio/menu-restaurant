import React, { useContext } from "react";
import "../../front/styles/home.css";
import injectContext from "../store/appContext";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { AppContext } from "../store/appContext.js";
import OffCanvasCart from "../components/OffCanvasCart"

const Home = () => {
  const { store, actions } = useContext(AppContext);

  return (
    <div className="wrapper">
      {store.language ? (
        <button
          className="btn btn-primary cart-button-fixed"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      ) : (
        ""
      )}

      <OffCanvasCart />

      <Navbar />
      {/* <Footer /> */}
    </div>
  );
};

export default injectContext(Home);
