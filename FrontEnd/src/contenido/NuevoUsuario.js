import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import { useState } from 'react';
import Axios from 'axios';

export default function NuevoUsuario() {
  
    const [Rut, setRut] = useState("");
    const [nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Telefono, setTelefono] = useState(0);
    const [Direccion, setDireccion] = useState("");
    const [NombreUsuario, setNombreUsuario] = useState("");
    const [Email, setEmail] = useState("");
    const [Contraseña, setContraseña] = useState("");
    const [Provilegio, setPrivilegio] = useState(0);

    const addUsuario = ()=>{
      alert(nombre);
    }

    return (
      
      <div>
  <Header/>      
  <NavBar/>
        <div class="content-wrapper">
        {/* Page content */}
        <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVO USUARIO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoUsuario"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO USUARIO</Link>
      </li>
      <li>
        <Link to="/ListarUsuarios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE USUARIOS</Link>
      </li>
      <li>
        <Link to="/BuscarUsuario"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR USUARIO</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información personal</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">RUT</label>
                <input onChange={(event)=>{
                    setRut(event.target.value);
                 }} 
                type="text" className="form-control" name="usuario_rut_reg" id="usuario_dni" maxLength={20}
                /> 
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombres</label>
                <input onChange={(event)=>{
                    setNombre(event.target.value);
                 }}
                  type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Apellidos</label>
                <input onChange={(event)=>{
                    setApellido(event.target.value);
                 }}
                  type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 

                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_telefono" className="bmd-label-floating">Teléfono</label>
                <input onChange={(event)=>{
                    setTelefono(event.target.value);
                 }}
                  type="text" pattern="[0-9()+]{8,20}" className="form-control" name="usuario_telefono_reg" id="usuario_telefono" maxLength={20} 

                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_direccion" className="bmd-label-floating">Dirección</label>
                <input onChange={(event)=>{
                    setDireccion(event.target.value);
                 }}
                 type="text" pattern="[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}" className="form-control" name="usuario_direccion_reg" id="usuario_direccion" maxLength={190}

                />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <fieldset>
        <legend><i className="fas fa-user-lock" /> &nbsp; Información de la cuenta</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_usuario" className="bmd-label-floating">Nombre de usuario</label>
                <input onChange={(event)=>{
                    setNombreUsuario(event.target.value);
                 }}
                  type="text" pattern="[a-zA-Z0-9]{1,35}" className="form-control" name="usuario_usuario_reg" id="usuario_usuario" maxLength={35}
/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_email" className="bmd-label-floating">Email</label>
                <input onChange={(event)=>{
                    setEmail(event.target.value);
                 }}
                  type="email" className="form-control" name="usuario_email_reg" id="usuario_email" maxLength={70}
   
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_clave_1" className="bmd-label-floating">Contraseña</label>
                <input onChange={(event)=>{
                    setContraseña(event.target.value);
                 }}
                  type="password" className="form-control" name="usuario_clave_1_reg" id="usuario_clave_1" pattern="[a-zA-Z0-9$@.-]{7,100}" maxLength={100} required 
            
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_clave_2" className="bmd-label-floating">Repetir contraseña</label>
                <input type="password" className="form-control" name="usuario_clave_2_reg" id="usuario_clave_2" pattern="[a-zA-Z0-9$@.-]{7,100}" maxLength={100} required />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <fieldset>
        <legend><i className="fas fa-medal" /> &nbsp; Nivel de privilegio</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p><span className="badge badge-info">Administrador</span> Permisos para registrar, actualizar y eliminar</p>
              <p><span className="badge badge-success">Edición</span> Permisos para registrar y actualizar</p>
              <p><span className="badge badge-dark">Artista</span> Solo permisos para registrar</p>
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" >
                  <option value selected disabled>Seleccione una opción</option>
                  <option value={1}>Administrador</option>
                  <option value={2}>Editor</option>
                  <option value={3}>Artista</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button onClick={monstrarDatos} type="submit" className="btn btn-raised btn-info btn-sm" ><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
}
  

