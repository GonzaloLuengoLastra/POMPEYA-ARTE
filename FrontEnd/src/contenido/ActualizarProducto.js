import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default class ActualizarUsuario extends Component {
  render() {
	return (
	  <div>
      <Header/>
      <NavBar/>
		<div class="content-wrapper">
		{/* Page content */}
		<div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR PRODUCTO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
     <li>
        <Link to="/NuevoProducto"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRODUCTO</Link>
      </li>
      <li>
        <Link to="/ListarProductos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRODUCTOS</Link>
      </li>
      <li>
        <Link to="/BuscarProducto"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR PRODUCTO</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Producto</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombres</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Año Creación</label>
                <input type="date" pattern="" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_direccion" className="bmd-label-floating">Pintura</label>
                <input type="file" pattern="[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}" className="form-control" name="usuario_direccion_reg" id="usuario_direccion" maxLength={190} />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Artista</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg">
                  <option value selected disabled>Seleccione al Artista</option>
                  <option value={1}>Artista 1</option>
                  <option value={2}>Artista 2</option>
                  <option value={3}>Artista 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Categoría</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg">
                  <option value selected disabled>Seleccione una categoría</option>
                  <option value={1}>Categoría 1</option>
                  <option value={2}>Categoría 2</option>
                  <option value={3}>Categoría 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Precio</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg">
                  <option value selected disabled>Seleccione un Precio</option>
                  <option value={1}>Precio 1</option>
                  <option value={2}>Precio 2</option>
                  <option value={3}>Precio 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Sala</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg">
                  <option value selected disabled>Seleccione una Sala de Exhibición</option>
                  <option value={1}>Sala 1</option>
                  <option value={2}>Sala 2</option>
                  <option value={3}>Sala 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="submit" className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
    <div className="alert alert-danger text-center" role="alert">
      <p><i className="fas fa-exclamation-triangle fa-5x" /></p>
      <h4 className="alert-heading">¡Ocurrió un error inesperado!</h4>
      <p className="mb-0">Lo sentimos, no podemos mostrar la información solicitada debido a un error.</p>
    </div>
  </div>
  </div>
	  </div>
	);
  }
}
