import React from "react";
import "../assets/scss/_03-Componentes/_MainNovedades.scss";

const MainNovedades = () => {
  const novedades = [
    "Nuevo curso sobre reglamentaciones vigentes",
    "Actualización en protocolos de mantenimiento",
    "Promoción en asesoría integral"
  ];

  return (
    <section className="novedades-container">
      <h2 className="novedades-title">Últimas Novedades</h2>
      <ul className="novedades-list">
        {novedades.map((novedad, index) => (
          <li key={index} className="novedad-item">
            {novedad}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainNovedades;