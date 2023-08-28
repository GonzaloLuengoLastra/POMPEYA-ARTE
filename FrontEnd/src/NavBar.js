import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Axios from "axios";

export default function NavBar() {

    const [loginStatus, setLoginStatus] = useState('');

    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response)=>{
        setLoginStatus(response.data.user[0].nombreUsuario)
      })
    }, [])

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
      <a href="#" className="d-block">{loginStatus}</a>
    </div>
  </div>
  {/* SidebarSearch Form */}
 
  {/* Sidebar Menu */}
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
      <li className="nav-item menu-open">
        <Link to="/Dashboard" className="nav-link">
          <i className="nav-icon fas fa-tachometer-alt" />
          <p>
            Dashboard
          </p>
        </Link>
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
            <Link to="/NuevoUsuario" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nuevo Usuario</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarUsuarios" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Usuarios</p>
            </Link>
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
            <Link to="/NuevoProducto" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nuevo Producto</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarProductos" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Productos</p>
            </Link>
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
            <Link to="/NuevaCategoria" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nueva Categoría</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarCategorias" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Categorías</p>
            </Link>
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
            <Link to="/NuevaSala" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nueva Sala de Exhibición</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarSalas" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Salas de Exhibiciones</p>
            </Link>
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
            <Link to="/NuevoPrecio" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nuevo Precio</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarPrecios" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Precios</p>
            </Link>
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
            <Link to="/NuevoTipoVenta" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nuevo Tipo de Venta</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarTipoVentas" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Tipo de Ventas</p>
            </Link>
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
            <Link to="/NuevoTipoPago" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nuevo Tipo de Pago</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarTipoPagos" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Tipo de Pagos</p>
            </Link>
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
            <Link to="/NuevaIncorporacion" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nueva Incorporación</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="ListarIncorporaciones" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Incorporaciones</p>
            </Link>
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
            <Link to="/NuevoContrato" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nuevo Contrato</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarContrato" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Contratos</p>
            </Link>
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
            <Link to="/NuevoTipoContrato" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Nuevo Tipo de Contrato</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ListarTipoContratos" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Listar Tipos de Contratos</p>
            </Link>
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
