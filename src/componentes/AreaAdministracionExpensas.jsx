import React, { useState } from 'react';
import { BiCalendar, BiDownload, BiPrinter, BiChevronDown } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaAdministracionExpensas.scss';

const AreaAdministracionExpensas = () => {
  // Estados para pestañas y filtros
  const [activeTab, setActiveTab] = useState('generar');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');

  // Datos de ejemplo de expensas
  const expensas = [
    { mes: 'Enero 2023', estado: 'Cerrado', total: '$120,000' },
    { mes: 'Febrero 2023', estado: 'Cerrado', total: '$125,000' },
    { mes: 'Marzo 2023', estado: 'Pendiente', total: '$130,000' },
    { mes: 'Abril 2023', estado: 'En Proceso', total: '$128,000' }
  ];

  return (
    <div className="expensas-wrapper">
      {/* Encabezado del componente */}
      <div className="expensas-header">
        <div className="header-text">
          <h2>Gestión de Expensas</h2>
          <p>Administra las expensas del consorcio</p>
        </div>
        
        {/* Pestañas de navegación */}
        <div className="expensas-tabs">
          <button 
            className={`tab-button ${activeTab === 'generar' ? 'active' : ''}`}
            onClick={() => setActiveTab('generar')}
          >
            Generar Expensas
          </button>
          <button 
            className={`tab-button ${activeTab === 'historico' ? 'active' : ''}`}
            onClick={() => setActiveTab('historico')}
          >
            Histórico
          </button>
        </div>
      </div>

      {/* Contenido según pestaña activa */}
      {activeTab === 'generar' ? (
        <div className="generar-expensas">
          {/* Formulario para generar expensas */}
          <div className="form-group">
            <label htmlFor="mes-select">Mes</label>
            <select 
              id="mes-select"
              value={mes} 
              onChange={(e) => setMes(e.target.value)}
              className="form-select"
            >
              <option value="">Seleccionar mes</option>
              <option value="enero">Enero</option>
              <option value="febrero">Febrero</option>
              <option value="marzo">Marzo</option>
              <option value="abril">Abril</option>
              <option value="mayo">Mayo</option>
              <option value="junio">Junio</option>
              <option value="julio">Julio</option>
              <option value="agosto">Agosto</option>
              <option value="septiembre">Septiembre</option>
              <option value="octubre">Octubre</option>
              <option value="noviembre">Noviembre</option>
              <option value="diciembre">Diciembre</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="anio-select">Año</label>
            <select 
              id="anio-select"
              value={anio} 
              onChange={(e) => setAnio(e.target.value)}
              className="form-select"
            >
              <option value="">Seleccionar año</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          {/* Botones de acción */}
          <div className="action-buttons">
            <button className="generate-button">
              <BiCalendar className="button-icon" />
              <span>Generar Expensas</span>
            </button>
            <button className="preview-button">
              <BiPrinter className="button-icon" />
              <span>Vista Previa</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="historico-expensas">
          {/* Tabla de histórico */}
          <div className="table-container">
            <table className="expensas-table">
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Estado</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {expensas.map((expensa, index) => (
                  <tr key={index}>
                    <td data-label="Mes">{expensa.mes}</td>
                    <td data-label="Estado">
                      <span className={`status-badge ${expensa.estado.toLowerCase().replace(' ', '-')}`}>
                        {expensa.estado}
                      </span>
                    </td>
                    <td data-label="Total">{expensa.total}</td>
                    <td data-label="Acciones">
                      <div className="action-buttons">
                        <button className="download-button">
                          <BiDownload className="button-icon" />
                          <span>Descargar</span>
                        </button>
                        <button className="details-button">
                          <BiChevronDown className="button-icon" />
                          <span>Detalles</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaAdministracionExpensas;