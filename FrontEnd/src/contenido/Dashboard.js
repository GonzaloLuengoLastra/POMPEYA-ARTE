import { Link} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Header from '../Header';
import NavBar from '../NavBar';
import Axios from "axios";

export default function Dashboard () {


    return (
      <div>
        <Header/>
      <NavBar/>
         <div class="content-wrapper">
          
    {/* Main container */}
<main className="full-box main-container">
  
  {/* Nav lateral */}
  {/* Page content */}
  <section className="full-box page-content">
    <nav className="full-box navbar-info">
      <a href="#" className="float-left show-nav-lateral">
        <i className="fas fa-exchange-alt" />
      </a>
      <a  href="#">
        <i className="fas fa-user-cog" />
      </a>
      <a href="#" className="btn-exit-system">
        <i className="fas fa-power-off" />
      </a>
    </nav>
    
    {/* Content */}
    <div className="full-box tile-container">
      <Link to="/ListarUsuarios" className="tile">
        <div className="tile-tittle">Usuarios</div>

        <div className="tile-icon">
          <i className="fas fa-users fa-fw" />
          <p>1 Registrados</p>
        </div> 
      </Link>
      <a href="ListarProductos" className="tile">
        <div className="tile-tittle">Productos</div>
        <div className="tile-icon">
          <i className="fas fa-pallet fa-fw" />
          <p>1 Registrados</p>
        </div>
      </a>
      <a href="ListarCategorias" className="tile">
        <div className="tile-tittle">Categorías</div>
        <div className="tile-icon">
          <i className="far fa-calendar-alt fa-fw" />
          <p>1 Registradas</p>
        </div>
      </a>
      <a href="ListarSalas" className="tile">
        <div className="tile-tittle">Sala de Exhibiciones</div>
        <div className="tile-icon">
          <i className="fas fa-hand-holding-usd fa-fw" />
          <p>1 Registrados</p>
        </div>
      </a>
      <a href="ListarPrecios" className="tile">
        <div className="tile-tittle">Precios</div>
        <div className="tile-icon">
          <i className="fas fa-clipboard-list fa-fw" />
          <p>1 Registrados</p>
        </div>
      </a>
      <a href="ListarTipoVentas" className="tile">
        <div className="tile-tittle">Tipo de Ventas</div>
        <div className="tile-icon">
          <i className="fas fa-user-secret fa-fw" />
          <p>1 Registrados</p>
        </div>
      </a>
      <a href="ListarTipoPagos" className="tile">
        <div className="tile-tittle">Tipo de Pagos</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>1 Registrada</p>
        </div>
      </a>
      <a href="ListarIncorporaciones" className="tile">
        <div className="tile-tittle">Incorporaciones</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>1 Registrada</p>
        </div>
      </a>
      <a href="ListarContrato" className="tile">
        <div className="tile-tittle">Contratos</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>1 Registrada</p>
        </div>
      </a>
      <a href="ListarTipoContratos" className="tile">
        <div className="tile-tittle">Tipos de Contratos</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>1 Registrada</p>
        </div>
      </a>
    </div>
  </section>
</main>

      </div>
</div>
    );
  }


