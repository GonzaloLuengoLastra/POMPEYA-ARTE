import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Galería Pompeya</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Administrador</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
   
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i class="nav-icon fas fa-users fa-fw"></i>
            <p>
              Usuarios
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="contenido/NuevoUsuario.js" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nuevo Usuario</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Usuarios</p>
              </a>
            </li> 
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Productos
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nuevo Producto</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Productos</p>
              </a>
            </li> 
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Categorías
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nueva Categoría</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Categorías</p>
              </a>
            </li> 
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Salas de Exhibiciones
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nueva Sala de Exhibición</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Salas de Exhibiciones</p>
              </a>
            </li> 
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Precios
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nuevo Precio</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Precios</p>
              </a>
            </li> 
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Tipo de Ventas
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nuevo Tipo de Venta</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Tipo de Ventas</p>
              </a>
            </li> 
          </ul>
        </li>   

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Tipo de Pagos
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nuevo Tipo de Pago</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Tipo de Pagos</p>
              </a>
            </li> 
          </ul>
        </li>   

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Incorporación
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nueva Incorporación</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Incorporaciones</p>
              </a>
            </li> 
          </ul>
        </li>   

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Contratos
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nuevo Contrato</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Contratos</p>
              </a>
            </li> 
          </ul>
        </li>   

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Tipo de Contratos
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Nuevo Tipo de Contrato</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Listar Tipos de Contratos</p>
              </a>
            </li> 
          </ul>
        </li>

      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

      </div>
    );
  }
}
