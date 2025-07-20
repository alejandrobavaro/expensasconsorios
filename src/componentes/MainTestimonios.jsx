import React from "react";
import "../assets/scss/_03-Componentes/_MainTestimonios.scss";

const MainTestimonios = () => {
  const testimonios = [
    {
      autor: "Carlos G.",
      texto: "Gracias a su sistema de administración, nuestros consorcistas están mucho más informados y todo funciona más ordenado.",
    },
    {
      autor: "María P.",
      texto: "Muy buenas las capacitaciones. Me ayudaron a entender mejor mi rol como administradora y a prevenir problemas en el edificio.",
    },
    {
      autor: "Fernando R.",
      texto: "Excelente atención. Los reportes de mantenimiento nos permiten actuar rápido y evitar gastos mayores.",
    },
  ];

  return (
    <div className="testimonios-wrapper">
      <h2 className="testimonios-title">Lo que dicen nuestros usuarios</h2>

      <div className="testimonios-list">
        {testimonios.map((testimonio, index) => (
          <div key={index} className="testimonio-card">
            <blockquote className="testimonio-text">"{testimonio.texto}"</blockquote>
            <p className="testimonio-author">- {testimonio.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTestimonios;