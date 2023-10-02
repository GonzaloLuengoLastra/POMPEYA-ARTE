import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {

  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const {register, formState:{errors}, handleSubmit} = useForm();

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login",{
      nombreUsuario: nombreUsuario,
      contrasena: contrasena,
    }).then((response) => {
      if(response.data.message) {
        setLoginStatus(response.data.message)
      }else{
        navigate('/Dashboard')
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
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}} />
          <span className="h1 fw-bold mb-0"></span>
        </div>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form onSubmit={handleSubmit(login)} style={{width: '23rem'}}>
            <br></br>
            <br></br>
            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Acceso al Sistema</h3>
            <div className="form-outline mb-4">
              <input onChange={(e) => setNombreUsuario(e.target.value)} type="text" id="form2Example18" name="nombreUsuario" className="form-control form-control-lg" 
              {...register("usuario",{
                required:true,
                pattern: /[a-zA-Z0-9]{1,35}/
              })}
            />
            {
              errors.usuario?.type==="required" && (<span className='errors'>Ingrese un Nombre de Usuario</span>)
            }
            {
              errors.usuario?.type==="pattern" && (<span className='errors'>Carácter no permitido</span>)
            }
              <label className="form-label" htmlFor="form2Example18">Usuario</label>  
            </div>
            <div className="form-outline mb-4">
              <input onChange={(e) => setContrasena(e.target.value)} type="password" id="form2Example28" name="contrasena" className="form-control form-control-lg" 
              {...register("contrasena",{
                required:true,
                pattern: /[a-zA-Z0-9$@.-]{7,100}/
              })}
            />
            {
              errors.contrasena?.type==="required" && (<span className='errors'>Ingrese una Contraseña</span>)
            }
            {
              errors.contrasena?.type==="pattern" && (<span className='errors'>Carácter no permitido</span>)
            }
              <label className="form-label" htmlFor="form2Example28">Contraseña</label>
            </div>
            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block">Ingresar</button>
            </div>
            <h5>{loginStatus}</h5>
            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">¿Recuperar Contraseña?</a></p>
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

