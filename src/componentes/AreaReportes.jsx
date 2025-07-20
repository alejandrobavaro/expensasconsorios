import React, { useState } from 'react';
import { BiDownload, BiCalendar, BiBarChartAlt2, BiPieChartAlt } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaReportes.scss';

const AreaReportes = () => {
  // Estados para los filtros
  const [reportType, setReportType] = useState('mensual');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Datos de ejemplo para los reportes
  const reportData = {
    mensual: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      expensas: [120000, 125000, 130000, 128000, 135000, 140000],
      reclamos: [5, 8, 6, 10, 7, 4],
    },
    anual: {
      labels: ['2020', '2021', '2022', '2023'],
      expensas: [1450000, 1500000, 1550000, 1600000],
      reclamos: [45, 52, 48, 60],
    }
  };

  const currentData = reportData[reportType];

  return (
    <div className="reportes-wrapper">
      {/* Encabezado del componente */}
      <div className="reportes-header">
        <div className="header-text">
          <h2>Reportes y Estadísticas</h2>
          <p>Visualiza y exporta los datos de tu consorcio</p>
        </div>
        <button className="export-button">
          <BiDownload className="button-icon" />
          <span>Exportar Reporte</span>
        </button>
      </div>

      {/* Filtros del reporte */}
      <div className="reportes-filters">
        <div className="filter-section">
          <h3>Tipo de Reporte</h3>
          <div className="filter-options">
            <button 
              className={`filter-button ${reportType === 'mensual' ? 'active' : ''}`}
              onClick={() => setReportType('mensual')}
            >
              <BiCalendar className="filter-icon" />
              <span>Mensual</span>
            </button>
            <button 
              className={`filter-button ${reportType === 'anual' ? 'active' : ''}`}
              onClick={() => setReportType('anual')}
            >
              <BiBarChartAlt2 className="filter-icon" />
              <span>Anual</span>
            </button>
          </div>
        </div>

        <div className="filter-section">
          <h3>Filtros por Fecha</h3>
          <div className="date-filters">
            {reportType === 'mensual' && (
              <select 
                value={month} 
                onChange={(e) => setMonth(e.target.value)}
                className="date-select"
              >
                <option value="">Todos los meses</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                {/* ... otros meses ... */}
              </select>
            )}
            <select 
              value={year} 
              onChange={(e) => setYear(e.target.value)}
              className="date-select"
            >
              <option value="">Todos los años</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contenido principal con estadísticas */}
      <div className="reportes-content">
        <div className="stats-container">
          {/* Tarjeta de Expensas */}
          <div className="stat-card">
            <div className="card-header">
              <BiBarChartAlt2 className="card-icon" />
              <h3>Expensas {reportType === 'mensual' ? 'Mensuales' : 'Anuales'}</h3>
            </div>
            <div className="card-value">
              ${currentData.expensas.reduce((a, b) => a + b, 0).toLocaleString()}
            </div>
            <div className="card-graph">
              <div className="graph-placeholder">
                Gráfico de {reportType === 'mensual' ? 'barras mensuales' : 'línea anual'}
              </div>
            </div>
          </div>

          {/* Tarjeta de Reclamos */}
          <div className="stat-card">
            <div className="card-header">
              <BiPieChartAlt className="card-icon" />
              <h3>Distribución de Reclamos</h3>
            </div>
            <div className="card-value">
              {currentData.reclamos.reduce((a, b) => a + b, 0)} total
            </div>
            <div className="card-graph">
              <div className="graph-placeholder">
                Gráfico de torta por categorías
              </div>
            </div>
          </div>

          {/* Tabla histórica */}
          <div className="stat-card full-width">
            <div className="card-header">
              <BiCalendar className="card-icon" />
              <h3>Histórico</h3>
            </div>
            <div className="card-table">
              <table>
                <thead>
                  <tr>
                    <th>{reportType === 'mensual' ? 'Mes' : 'Año'}</th>
                    <th>Expensas</th>
                    <th>Reclamos</th>
                    <th>Morosidad</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.labels.map((label, index) => (
                    <tr key={index}>
                      <td>{label}</td>
                      <td>${currentData.expensas[index].toLocaleString()}</td>
                      <td>{currentData.reclamos[index]}</td>
                      <td>{Math.floor(Math.random() * 10)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaReportes;