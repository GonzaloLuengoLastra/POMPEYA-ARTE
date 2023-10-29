import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";

export default function Login() {

  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login",{
      nombreUsuario: nombreUsuario,
      contrasena: contrasena,
    }).then((response) => {
      if(response.data.message) {
        setLoginStatus(response.data.message)
      }else{
        if(response.data[0].privilegio == 1){
          navigate("/Dashboard")
        }
        if(response.data[0].privilegio == 2){
          navigate("/")
        }
        if(response.data[0].privilegio == 3){
          navigate("/")
        }
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
    })
  }, [])

  return (
    <div>
        <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">
        <div className="px-5 ms-xl-4">
          <br></br>
          <img src="dist/img/SAP.png" style={{width: '100px', height: '100px'}}/>
          <span className="h1 fw-bold mb-0"></span>
        </div>
        <br></br>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form style={{width: '23rem'}}>
            <br></br>
            <br></br>
            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Acceso al Sistema</h3>
            <div className="form-outline mb-4">
              <input onChange={(e) => setNombreUsuario(e.target.value)} type="text" id="form2Example18" name="nombreUsuario" className="form-control form-control-lg" 
            />
              <label className="form-label" htmlFor="form2Example18">Usuario</label>  
            </div>
            <div className="form-outline mb-4">
              <input onChange={(e) => setContrasena(e.target.value)} type="password" id="form2Example28" name="contrasena" className="form-control form-control-lg" 
            />
              <label className="form-label" htmlFor="form2Example28">Contraseña</label>
            </div>
            <div className="pt-1 mb-4">
              <button type="button" onClick={login} className="btn btn-warning btn-lg btn-block">Ingresar</button>
            </div>
            <h5>{loginStatus}</h5>
            <p className="small mb-5 pb-lg-2"><Link className="text-muted" to="/RecuperarContraseña">¿Recuperar Contraseña?</Link></p>
            <p>¿No tienes una cuenta? <a href="#!" className="link-info">Registrarse</a></p>
          </form>
        </div>
      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" classname="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left', width: '600px', height: '570px'}} />
      </div>
    </div>
  </div>
</section>

  </div>
    );
}

