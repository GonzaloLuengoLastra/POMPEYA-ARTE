import { Link} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Header from '../Header';
import NavBar from '../NavBar';
import Axios from "axios";

export default function Dashboard () {

  const [loginStatus, setLoginStatus] = useState('');
  const [privilegio, setPrivilegio] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
      setLoginStatus(response.data.user[0].nombreUsuario);
      setPrivilegio(response.data.user[0].privilegio)
    })
  }, [])

  const verificar1 = (user) => {
    if(privilegio == 1){
      return <section className="full-box page-content">
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
        <Link to="/ListarProductos" className="tile">
          <div className="tile-tittle">Productos</div>
          <div className="tile-icon">
            <i className="fas fa-pallet fa-fw" />
            <p>1 Registrados</p>
          </div>
        </Link>
        <Link href="/ListarCategorias" className="tile">
          <div className="tile-tittle">Categorías</div>
          <div className="tile-icon">
            <i className="far fa-calendar-alt fa-fw" />
            <p>1 Registradas</p>
          </div>
        </Link>
        <Link to="ListarSalas" className="tile">
          <div className="tile-tittle">Sala de Exhibiciones</div>
          <div className="tile-icon">
            <i className="fas fa-hand-holding-usd fa-fw" />
            <p>1 Registrados</p>
          </div>
        </Link>
        <Link to="/ListarPrecios" className="tile">
          <div className="tile-tittle">Precios</div>
          <div className="tile-icon">
            <i className="fas fa-clipboard-list fa-fw" />
            <p>1 Registrados</p>
          </div>
        </Link>
        <Link to="/ListarVentas" className="tile">
          <div className="tile-tittle">Tipo de Ventas</div>
          <div className="tile-icon">
            <i className="fas fa-user-secret fa-fw" />
            <p>1 Registrados</p>
          </div>
        </Link>
        <Link to="/ListarTipoPagos" className="tile">
          <div className="tile-tittle">Tipo de Pagos</div>
          <div className="tile-icon">
            <i className="fas fa-store-alt fa-fw" />
            <p>1 Registrada</p>
          </div>
        </Link>
        <Link to="/ListarIncorporaciones" className="tile">
          <div className="tile-tittle">Incorporaciones</div>
          <div className="tile-icon">
            <i className="fas fa-store-alt fa-fw" />
            <p>1 Registrada</p>
          </div>
        </Link>
        <Link to="/ListarContrato" className="tile">
          <div className="tile-tittle">Contratos</div>
          <div className="tile-icon">
            <i className="fas fa-store-alt fa-fw" />
            <p>1 Registrada</p>
          </div>
        </Link>
        <Link to="/ListarTipoContratos" className="tile">
          <div className="tile-tittle">Tipos de Contratos</div>
          <div className="tile-icon">
            <i className="fas fa-store-alt fa-fw" />
            <p>1 Registrada</p>
          </div>
        </Link>
      </div>
    </section>
    }
    return <section className="full-box page-content">
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
      <Link to="/ListarVentas" className="tile">
        <div className="tile-tittle">Lista de Ventas</div>
        <div className="tile-icon">
          <i className="fas fa-user-secret fa-fw" />
          <p>1 Registrados</p>
        </div>
      </Link>
      <Link to="/ListarTipoContratos" className="tile">
        <div className="tile-tittle">Tipos de Contratos</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>1 Registrada</p>
        </div>
      </Link>
    </div>
  </section>
  }

    return (
      <div>
        <Header/>
      <NavBar/>
         <div class="content-wrapper">
          
    {/* Main container */}
<main className="full-box main-container">
  
  {/* Nav lateral */}
  {/* Page content */}
  {verificar1(loginStatus)}
</main>

      </div>
</div>
    );
  }


