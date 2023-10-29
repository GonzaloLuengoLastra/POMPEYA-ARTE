import React, {Component, useState, useEffect} from "react";
import { Link, redirect, useNavigate } from 'react-router-dom';
import Axios from "axios";
import Swal from "sweetalert2";


export default function NavBarInicio() {
    
    const [loginStatus, setLoginStatus] = useState('');
  const [privilegio, setPrivilegio] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
      setLoginStatus(response.data.user[0].nombre);
      setPrivilegio(response.data.user[0].privilegio)
    })
  }, [])

  const cerrarSesion = (val) =>{
    Swal.fire({
      title: 'Cerrar Sesión',
      text: "¿Desea cerrar sesión?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Cerrar Sesión',
      denyButtonText: `Cancelar`,
    })
    .then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.reload(true);
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
}

  const verificar = (user) => {
    if(!loginStatus){
      return <Link to="/Login" ><p><span><i className="fa fa-user" /></span>Login</p></Link>
    }
    return <p style={{color: 'white'}}><span>Bienvenido(a) </span>{loginStatus}</p>
  }

  const verificar1 = (user) => {
    if(!loginStatus){
      return <Link to="/RegistrarUsuarioNormal"><p><span><i className="fa fa-pencil" /></span>Registrar</p></Link>
    }
    return <button type="button" href="/" onClick={cerrarSesion} style={{color: 'white', paddingLeft: '10px', backgroundColor: 'transparent', border: 'none'}}>Cerrar Sesión</button> 
  }

  const verificar3 = (user) => {
    if(privilegio == 1 || privilegio == 2){
      return <Link to="/Dashboard" style={{color: 'white', paddingLeft: '10px'}}>DashBoard</Link>
    }
    return <p><span><i className="fa fa-pencil" /></span></p>
  }
    return (

      
      <div>

        <section className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
        {verificar(loginStatus)}
          <ul>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="icon">
            
          </div>
        </div>
        <div className="col-md-4">
          <div className="a-right">
            
            {verificar1(loginStatus)}
            {verificar3(loginStatus)}
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="header-catagory">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="row">
            <div className="col-md-12">
              <form method="post" action="#">
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="clear" />
  <section className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <br></br>
          <div className="logo">
            <img src="dist/img/SAP.png" style={{width: '200px', height: '200px'}}/>
          </div>
        </div>
        <div className="col-md-7">
          <ul className="nav navbar-nav lado">
            <li className="active"><a href="/">INICIO</a></li>
            <li><a href="#section1">PRODUCTOS</a></li>
            <li><a href="#section2">ARTISTAS</a></li>
            <li><a href="#section3">CONTACTANOS</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="cart">
            <p><i className="fa fa-cart-arrow-down" /><sup>0</sup> $&nbsp;&nbsp;0.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>
 );
    }
