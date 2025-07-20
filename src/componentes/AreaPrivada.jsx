import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BiBuilding, BiReceipt, BiCog, BiUser, BiUserPlus, BiChart } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaPrivada.scss';

const AreaPrivada = () => {
  // Hook para navegación entre rutas
  const navigate = useNavigate();
  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = React.useState('sistema');

  // Maneja el cambio de pestaña
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        {/* Encabezado del panel */}
        <header className="admin-header">
          <h1>Panel de Administración</h1>
          <div className="admin-user">
            <span>Administrador</span>
            <div className="admin-avatar">A</div>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="admin-content">
          {/* Barra de navegación lateral */}
          <nav className="admin-nav">
            <ul className="admin-menu">
              <li 
                className={`admin-item ${activeTab === 'sistema' ? 'active' : ''}`}
                onClick={() => handleTabChange('sistema')}
              >
                <BiCog className="admin-icon" />
                <span>Configuración</span>
              </li>
              <li 
                className={`admin-item ${activeTab === 'expensas' ? 'active' : ''}`}
                onClick={() => handleTabChange('expensas')}
              >
                <BiReceipt className="admin-icon" />
                <span>Gestión de Expensas</span>
              </li>
              <li 
                className={`admin-item ${activeTab === 'reclamos' ? 'active' : ''}`}
                onClick={() => handleTabChange('reclamos')}
              >
                <BiBuilding className="admin-icon" />
                <span>Reclamos</span>
              </li>
              <li 
                className={`admin-item ${activeTab === 'usuarios' ? 'active' : ''}`}
                onClick={() => handleTabChange('usuarios')}
              >
                <BiUserPlus className="admin-icon" />
                <span>Consorcistas</span>
              </li>
              <li 
                className={`admin-item ${activeTab === 'reportes' ? 'active' : ''}`}
                onClick={() => handleTabChange('reportes')}
              >
                <BiChart className="admin-icon" />
                <span>Reportes</span>
              </li>
            </ul>
          </nav>

          {/* Área de contenido dinámico */}
          <main className="admin-main">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AreaPrivada;