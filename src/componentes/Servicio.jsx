import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_Servicio.scss";

const Servicio = () => {
  // Estado para almacenar los servicios (viene del JSON)
  const [servicios, setServicios] = useState([]);
  // Estado para manejar errores de carga
  const [error, setError] = useState(null);

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    fetch("/servicio.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error en la red");
        return response.json();
      })
      .then((data) => setServicios(data))
      .catch((error) => {
        console.error("Error:", error);
        setError("No se pudieron cargar los servicios.");
      });
  }, []);

  // Configuración del carrusel (Slider)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="servicio-wrapper">
      {/* Encabezado del componente */}
      <div className="servicio-header">
        <h2>Nuestros Servicios</h2>
        <p>Soluciones especializadas para la gestión de consorcios</p>
      </div>

      {/* Mensaje de error si falla la carga */}
      {error && <div className="servicio-error">{error}</div>}

      {/* Grid de servicios */}
      <div className="servicio-grid">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="servicio-card">
            {/* Encabezado de la tarjeta con imagen y nombre */}
            <div className="card-header">
              <img 
                src={servicio["imagen portada"]} 
                alt={`Servicio ${servicio.nombre}`} 
              />
              <h3>{servicio.nombre}</h3>
              <span>{servicio.tipo} | {servicio.categoria}</span>
            </div>

            <hr className="divider" />

            {/* Cuerpo de la tarjeta con información */}
            <div className="card-body">
              {/* Lista de características del servicio */}
              <div className="info-section">
                <h4>Nuestro servicio incluye:</h4>
                <ul>
                  {Array.isArray(servicio["nuestro servicio"]) && 
                    servicio["nuestro servicio"].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>

              {/* Carrusel de imágenes */}
              <div className="carousel-container">
                <Slider {...settings}>
                  {Array.isArray(servicio["imagenes"]) && 
                    servicio["imagenes"].map((img, index) => (
                      <div key={index}>
                        <img 
                          src={img} 
                          alt={`${servicio.nombre} - ${index + 1}`} 
                        />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicio;