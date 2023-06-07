import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default class BuscarTipoPago extends Component {
  render() {
	return (
	  <div>
      <Header/>
      <NavBar/>
		<div class="content-wrapper">
		<div>

  {/* Page content */}
  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO PAGO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoTipoPago"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO PAGO</Link>
      </li>
      <li>
        <Link to="/ListarTipoPagos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO PAGOS</Link>
      </li>
      <li>
        <Link className='active' to="/BuscarTipoPago"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO PAGO</Link>
      </li>
    </ul>	
  </div>
  {/* Content */}
  <div className="container-fluid">
    <form className="form-neon" action>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="inputSearch" className="bmd-label-floating">¿Qué tipo pago estás buscando?</label>
              <input type="text" className="form-control" name="busqueda-" id="inputSearch" maxLength={30} />
            </div>
          </div>
          <div className="col-12">
            <p className="text-center" style={{marginTop: 40}}>
              <button type="submit" className="btn btn-raised btn-info"><i className="fas fa-search" /> &nbsp; BUSCAR</button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
  
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1}>Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</div>
	 
	);
  }
}
