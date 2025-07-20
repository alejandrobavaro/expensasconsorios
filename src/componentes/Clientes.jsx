// Importación de React y hooks necesarios
import React, { useState, useEffect } from "react";
// Importación de estilos SCSS
import "../assets/scss/_03-Componentes/_Clientes.scss";

const Clientes = () => {
  // Estado para almacenar los datos de clientes (viene del JSON)
  const [data, setData] = useState([]);
  // Estado para el término de búsqueda (maneja lo que escribe el usuario)
  const [searchTerm, setSearchTerm] = useState("");

  // Efecto que se ejecuta al montar el componente para cargar los datos
  useEffect(() => {
    // Fetch para obtener los datos del archivo JSON público
    fetch("/clientes1.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // Filtrado de datos basado en el término de búsqueda
  const filteredData = data.filter((item) => {
    return item.nombre.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="clientes-wrapper">
      {/* Encabezado del componente */}
      <div className="clientes-header">
        <h2>Nuestros Clientes</h2>
        <p>Administraciones que confían en nuestro sistema</p>
      </div>

      {/* Barra de búsqueda */}
      <div className="clientes-search">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Contenedor principal de las tarjetas */}
      <div className="clientes-main">
        {/* Mensaje si no hay resultados */}
        {filteredData.length === 0 ? (
          <div className="clientes-empty">
            <p>No se encontraron coincidencias</p>
          </div>
        ) : (
          /* Grid de tarjetas de clientes */
          <div className="clientes-grid">
            {filteredData.map((item) => (
              <div key={item.id} className="clientes-card">
                {/* Encabezado de la tarjeta con imagen y nombre */}
                <div className="card-header">
                  <img 
                    src={item["imagen portada"]} 
                    alt={`Logo ${item.nombre}`} 
                  />
                  <h3>{item.nombre}</h3>
                  <span>{item.tipo}</span>
                </div>

                {/* Cuerpo de la tarjeta con información */}
                <div className="card-body">
                  <div className="info-section">
                    <h4>Recomendación:</h4>
                    <p>{item["recomendacion del cliente"]}</p>
                  </div>

                  <div className="info-section">
                    <h4>Beneficios:</h4>
                    <ul>
                      {item.comentarios.map((comentario, index) => (
                        <li key={index}>{comentario}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Enlace al sitio web del cliente */}
                  <a 
                    href={item.sitio_web} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    Visitar sitio web
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Clientes;