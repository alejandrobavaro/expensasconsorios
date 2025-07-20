import React from "react";
import "../assets/scss/_03-Componentes/_MainPreguntasFrecuentes.scss";

const MainPreguntasFrecuentes = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>

      <div className="faq-list">
        <div className="faq-item">
          <h3 className="faq-question">¿Qué incluye el sistema para administraciones?</h3>
          <p className="faq-answer">
            El sistema permite generar expensas, balances, gestionar reclamos, enviar notificaciones y dar acceso online a los consorcistas.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">¿Puedo descargar mis expensas desde esta página?</h3>
          <p className="faq-answer">
            Sí, ingresando al Área Privada podrás descargar tus expensas mensuales, consultar balances y documentos del consorcio.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">¿Cómo accedo al Área Privada?</h3>
          <p className="faq-answer">
            Desde el botón en el menú principal o desde la sección Área Privada, si ya tenés usuario registrado. Si no, contactanos.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">¿Ofrecen capacitaciones para administradores?</h3>
          <p className="faq-answer">
            Sí, contamos con cursos y capacitaciones online y presenciales sobre administración de consorcios, normativa legal y mantenimiento edilicio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPreguntasFrecuentes;