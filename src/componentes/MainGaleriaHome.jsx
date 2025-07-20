// === MainGaleriaHome.jsx ===
import React from "react";
import "../assets/scss/_03-Componentes/_MainGaleriaHome.scss";

const MainGaleriaHome = () => {
  const galeria = [
    "/img/10-imagenes-cursos/bannerclase2.png",
    "/img/10-imagenes-cursos/bannerclase3.png",
    "/img/10-imagenes-cursos/bannerclase2.png",
  ];

  return (
    <div className="galeria-container">
      <h2 className="galeria-title">Galería de Imágenes</h2>

      <div className="galeria-grid">
        {galeria.map((img, index) => (
          <div key={index} className="galeria-item">
            <img src={img} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGaleriaHome;
