import React from 'react';
import Validation from '../LoginValidation';
import { useState } from 'react';

/*const [values, setValues] = useState({
  nombreUsuario: '',
  contrasena: ''
});

const [errors, setErrors] = useState([]);
const handleInput = (event) => {
  setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit = (event) =>{
  event.preventDefault();
  setErrors(Validation(values));
}*/

export default function Login() {
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
          <form style={{width: '23rem'}}>
            <br></br>
            <br></br>
            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Acceso al Sistema</h3>
            <div className="form-outline mb-4">
              <input type="text" id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form2Example18">Usuario</label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form2Example28">Contraseña</label>
            </div>
            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="button">Ingresar</button>
            </div>
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

