import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';




export default class NavBarInicio extends Component {
  render() {
    return (
      <div>
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Acceso al Sistema</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationCustom01" className="form-label">Usuario</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder='Nombre de Usuario' required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom02" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="validationCustom02" placeholder='*******' required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <a href='/RecuperarContraseña'>¿Se le ha olvidado la contraseña?</a>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <a href="/Dashboard" class="btn btn-primary">Ingresar</a>
      </div>
    </div>
  </div>
</div>
        <section className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ul>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="icon">
          </div>
        </div>
        <div className="col-md-4">
          <div className="a-right">
            <a href='' data-bs-toggle="modal" data-bs-target="#exampleModal"><p><span><i className="fa fa-user" /></span>Login</p></a>
            <a href="#"><p><span><i className="fa fa-pencil" /></span>Registrar</p></a>
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
            <a href="/"><img src="dist/img/logo-one.jpg" alt/></a>
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
}
