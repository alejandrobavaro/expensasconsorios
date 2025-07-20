// === MainPromociones.jsx ===
import React from "react";
import "../assets/scss/_03-Componentes/_MainPromociones.scss";

const MainPromociones = () => {
  return (
    <div className="promos-container">
      <h2 className="promos-title">Promociones y Packs Especiales</h2>

      <div className="promos-list">
        <div className="promo-item">
          <h3 className="promo-name">Pack Administraciones</h3>
          <p className="promo-detail">Consultoría + Capacitación inicial con 20% OFF</p>
        </div>

        <div className="promo-item">
          <h3 className="promo-name">Pack Consorcistas</h3>
          <p className="promo-detail">Asesoría Legal + Taller práctico a precio promocional</p>
        </div>

        <div className="promo-item">
          <h3 className="promo-name">Promoción Comercial</h3>
          <p className="promo-detail">Descuentos especiales para nuevos clientes en junio</p>
        </div>
      </div>
    </div>
  );
};

export default MainPromociones;
