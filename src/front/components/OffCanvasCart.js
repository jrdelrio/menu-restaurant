import React, {useContext} from "react";
import { AppContext } from "../store/appContext.js";
import CartItemCard from "./CartItemCard";


const OffCanvasCart = () => {

    const { store } = useContext(AppContext);
    return(
        <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Carrito de compras
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {store.cart.map((item, index) => <CartItemCard key={index} product={item}/>)}
        </div>
      </div>
    )
}

export default OffCanvasCart;