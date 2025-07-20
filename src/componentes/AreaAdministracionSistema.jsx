import React, { useState } from 'react';
import { BiCog, BiSave, BiReset, BiUser, BiBell } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaAdministracionSistema.scss';

const AreaAdministracionSistema = () => {
  // Estado para la configuración del sistema
  const [config, setConfig] = useState({
    notificaciones: true,
    recordatorios: false,
    accesoConsorcistas: true
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Configuración guardada correctamente');
  };

  // Restablecer valores por defecto
  const handleReset = () => {
    setConfig({
      notificaciones: true,
      recordatorios: false,
      accesoConsorcistas: true
    });
  };

  return (
    <div className="sistema-wrapper">
      {/* Encabezado del componente */}
      <div className="sistema-header">
        <h2>Configuración del Sistema</h2>
        <p>Ajustes generales de la plataforma</p>
      </div>
      
      {/* Formulario de configuración */}
      <form onSubmit={handleSubmit} className="sistema-form">
        {/* Sección de Configuración General */}
        <div className="config-section">
          <h3>
            <BiCog className="section-icon" />
            <span>Configuración General</span>
          </h3>
          
          <div className="form-group">
            <label className="switch">
              <input 
                type="checkbox" 
                name="notificaciones" 
                checked={config.notificaciones}
                onChange={handleChange}
              />
              <span className="slider"></span>
              <span className="switch-label">
                <BiBell className="input-icon" />
                <span>Notificaciones por Email</span>
              </span>
            </label>
          </div>
          
          <div className="form-group">
            <label className="switch">
              <input 
                type="checkbox" 
                name="recordatorios" 
                checked={config.recordatorios}
                onChange={handleChange}
              />
              <span className="slider"></span>
              <span className="switch-label">
                <BiBell className="input-icon" />
                <span>Recordatorios Automáticos</span>
              </span>
            </label>
          </div>
        </div>
        
        {/* Sección de Accesos y Permisos */}
        <div className="config-section">
          <h3>
            <BiUser className="section-icon" />
            <span>Accesos y Permisos</span>
          </h3>
          
          <div className="form-group">
            <label className="switch">
              <input 
                type="checkbox" 
                name="accesoConsorcistas" 
                checked={config.accesoConsorcistas}
                onChange={handleChange}
              />
              <span className="slider"></span>
              <span className="switch-label">
                <BiUser className="input-icon" />
                <span>Acceso para Consorcistas</span>
              </span>
            </label>
          </div>
        </div>
        
        {/* Botones de acción */}
        <div className="form-actions">
          <button type="submit" className="save-button">
            <BiSave className="button-icon" />
            <span>Guardar Configuración</span>
          </button>
          <button type="button" className="reset-button" onClick={handleReset}>
            <BiReset className="button-icon" />
            <span>Restablecer</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AreaAdministracionSistema;