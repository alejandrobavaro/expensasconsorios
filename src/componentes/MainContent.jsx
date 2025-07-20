import React from "react";
import AreaPrivada from "./AreaPrivada";
import MainGaleriaHome from "./MainGaleriaHome";
import MainPreguntasFrecuentes from "./MainPreguntasFrecuentes";
import MainTestimonios from "./MainTestimonios";
import MainNovedades from "./MainNovedades";
import MainPromociones from "./MainPromociones";
import MainHero from "./MainHero";
import "../assets/scss/_03-Componentes/_MainContent.scss";

const MainContent = () => {
  return (
    <main className="MainContentContainer">
      <MainHero />
      {/* <AreaPrivada /> */}
      
      <MainPreguntasFrecuentes />
      <MainTestimonios />
      <MainNovedades />
      <MainPromociones />
      <MainGaleriaHome />
    </main>
  );
};

export default MainContent;
