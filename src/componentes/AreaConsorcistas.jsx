import React, { useState } from 'react';
import { BiSearch, BiPlusCircle, BiEdit, BiTrash, BiUserPlus } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaConsorcistas.scss';

const AreaConsorcistas = () => {
  // Estados para búsqueda y filtro
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');
  
  // Datos de ejemplo de consorcistas
  const consorcistas = [
    {
      id: 1,
      nombre: 'María González',
      unidad: 'A101',
      email: 'maria.g@email.com',
      telefono: '+54 11 1234-5678',
      estado: 'activo'
    },
    {
      id: 2,
      nombre: 'Carlos Pérez',
      unidad: 'B205',
      email: 'carlos.p@email.com',
      telefono: '+54 11 2345-6789',
      estado: 'moroso'
    },
    {
      id: 3,
      nombre: 'Laura Fernández',
      unidad: 'C302',
      email: 'laura.f@email.com',
      telefono: '+54 11 3456-7890',
      estado: 'inhabilitado'
    }
  ];

  // Filtrar consorcistas según búsqueda y filtro
  const filteredConsorcistas = consorcistas.filter(consorcista => {
    const matchesSearch = consorcista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         consorcista.unidad.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'todos' || consorcista.estado === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Obtener clase y texto para el estado
  const getEstadoBadge = (estado) => {
    switch(estado) {
      case 'activo':
        return { class: 'activo', text: 'Activo' };
      case 'moroso':
        return { class: 'moroso', text: 'Moroso' };
      case 'inhabilitado':
        return { class: 'inhabilitado', text: 'Inhabilitado' };
      default:
        return { class: 'desconocido', text: 'Desconocido' };
    }
  };

  return (
    <div className="consorcistas-wrapper">
      {/* Encabezado del componente */}
      <div className="consorcistas-header">
        <div className="header-text">
          <h2>Administración de Consorcistas</h2>
          <p>Gestiona los propietarios y residentes del consorcio</p>
        </div>
        
        {/* Barra de búsqueda y botón de acción */}
        <div className="search-container">
          <div className="search-bar">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar consorcistas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="add-button">
            <BiUserPlus className="button-icon" />
            <span>Nuevo Consorcista</span>
          </button>
        </div>
      </div>

      {/* Filtros de estado */}
      <div className="consorcistas-filters">
        <button 
          className={`filter-button ${activeFilter === 'todos' ? 'active' : ''}`}
          onClick={() => setActiveFilter('todos')}
        >
          Todos
        </button>
        <button 
          className={`filter-button ${activeFilter === 'activo' ? 'active' : ''}`}
          onClick={() => setActiveFilter('activo')}
        >
          Activos
        </button>
        <button 
          className={`filter-button ${activeFilter === 'moroso' ? 'active' : ''}`}
          onClick={() => setActiveFilter('moroso')}
        >
          Morosos
        </button>
        <button 
          className={`filter-button ${activeFilter === 'inhabilitado' ? 'active' : ''}`}
          onClick={() => setActiveFilter('inhabilitado')}
        >
          Inhabilitados
        </button>
      </div>

      {/* Tabla de consorcistas */}
      <div className="consorcistas-content">
        {filteredConsorcistas.length > 0 ? (
          <div className="table-container">
            <table className="consorcistas-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Unidad</th>
                  <th>Contacto</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredConsorcistas.map(consorcista => (
                  <tr key={consorcista.id}>
                    <td data-label="Nombre">{consorcista.nombre}</td>
                    <td data-label="Unidad">{consorcista.unidad}</td>
                    <td data-label="Contacto">
                      <div className="contact-info">
                        <div>{consorcista.email}</div>
                        <div>{consorcista.telefono}</div>
                      </div>
                    </td>
                    <td data-label="Estado">
                      <span className={`status-badge ${getEstadoBadge(consorcista.estado).class}`}>
                        {getEstadoBadge(consorcista.estado).text}
                      </span>
                    </td>
                    <td data-label="Acciones">
                      <div className="action-buttons">
                        <button className="edit-button">
                          <BiEdit className="action-icon" />
                          <span>Editar</span>
                        </button>
                        <button className="delete-button">
                          <BiTrash className="action-icon" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-results">
            No se encontraron consorcistas con los filtros seleccionados
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaConsorcistas;