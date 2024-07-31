import React, { useContext } from "react";
import "../styles/views.css";
import Card from "../components/Card";
import { AppContext } from "../store/appContext.js";

const WinesView = () => {
  const { store, actions } = useContext(AppContext);

  const titles = {
    spanishTitle: "Vinos",
    englishTitle: "Wines",
    frenchTitle: "Vins",
    italianTitle: "Vini",
  };

  const defineTitle = (titles) => {
    switch (store.language) {
      case "spanish":
        return titles.spanishTitle;
      case "english":
        return titles.englishTitle;
      case "french":
        return titles.frenchTitle;
      case "italian":
        return titles.italianTitle;
      default:
        return titles.spanishTitle;
    }
  };

  const winesDB = [
    {
      type: "red",
      name: "Vino de la Casa (típico de Catalunya)",
      nameEnglish: "Wine of the House",
      nameFrench: "Vin de la Maison",
      glassPrice: "3.50",
      bottlePrice: "12.95",
      image: "wine-images/solaguen.png",
    },
    {
      type: "red",
      name: "Molins Montsant Catalunya",
      glassPrice: "4.00",
      bottlePrice: "16.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "red",
      name: "Camins del Vents Pla de Bages",
      glassPrice: "4.50",
      bottlePrice: "20.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "red",
      name: "Ebano 6 Ribera/Cocecha",
      glassPrice: "4.00",
      bottlePrice: "16.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "red",
      name: "Solaguen Rioja/Crianza",
      glassPrice: "4.50",
      bottlePrice: "20.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "red",
      name: "Viña Salceda Rioja Reserva",
      glassPrice: null,
      bottlePrice: "22.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "white",
      name: "Vino de la Casa (típico de Cataluña",
      nameEnglish: "Wine of the House",
      nameFrench: "Vin de la Maison",
      glassPrice: "3.50",
      bottlePrice: "12.95",
      image: "wine-images/solaguen.png",
    },
    {
      type: "white",
      name: "Granfeudo Navarra Chardonnay",
      glassPrice: "3.50",
      bottlePrice: "15.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "white",
      name: "Petit Baldoma",
      glassPrice: "3.50",
      bottlePrice: "15.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "white",
      name: "Baluarte Verdejo",
      glassPrice: "4.00",
      bottlePrice: "18.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "white",
      name: "Innurieta Sauvignon Blanc",
      glassPrice: "4.00",
      bottlePrice: "18.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "rose",
      name: "Vino de la Casa",
      nameEnglish: "Wine of the House",
      nameFrench: "Vin de la Maison",
      glassPrice: "3.50",
      bottlePrice: "12.95",
      image: "wine-images/solaguen.png",
    },
    {
      type: "rose",
      name: "Corral Navarra",
      glassPrice: "3.50",
      bottlePrice: "15.00",
      image: "wine-images/solaguen.png",
    },
    {
      type: "cava",
      name: "Cava de Casa",
      nameEnglish: "Cava of the House",
      nameFrench: "Cava de la Maison",
      glassPrice: "3.50",
      bottlePrice: "14.50",
      image: "wine-images/solaguen.png",
    },
    {
      type: "cava",
      name: "Cava Reserva",
      nameEnglish: "Reserved Cava",
      nameFrench: "Cava Réserver",
      glassPrice: null,
      bottlePrice: "18.50",
      image: "wine-images/solaguen.png",
    },
  ];

  return (
    <>
      <div className="title text-center py-4 bg-white">
        {defineTitle(titles)}
      </div>
      <div className="container pb-3rem">
        <div className="row mt-3">
          {winesDB.map((wine, index) => (
            <div key={index} className="col-12 col-lg-12 col-md-6 mb-4">
              {/* falta una card especial para vinos */}
              <Card product={wine} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WinesView;
