import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';

export default function ListarTipoPagos () {

  const[tipopago,setTipopago]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/Tpagos")
    .then(res=>res.json())
    .then((result)=>{
      setTipopago(result);
    }
  )
  },[])

  const deleteTipoPagos = async (id) => {
    await axios.delete(`http://localhost:8080/editt/${id}`);
  };

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO PAGOS
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
        <Link className='active' to="/ListarTipoPagos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO PAGOS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoPago"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO PAGO</Link>
      </li>
    </ul>	
  </div>
  {/* Content */}
  <div className="container-fluid">
    <div className="table-responsive">
      <table className="table table-dark table-sm">
        <thead>
          <tr className="text-center roboto-medium">
            <th>#</th>
            <th>TIPO PAGO</th>
            <th>DESCRIPCIÓN</th>
            <th>ACTUALIZAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {tipopago.map(tipopagos=>(
          <tr className="text-center">
            <td>{tipopagos.id}</td>
            <td>{tipopagos.ntipopago}</td>
            <td>{tipopagos.descripcion}</td>
            <td>
              <Link to={`/ActualizarTipoPago/${tipopagos.id}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button type="button" className="btn btn-warning" onClick={() => deleteTipoPagos(tipopagos.id)}>
                  <i className="far fa-trash-alt" />
                </button>
              </form>
            </td>
          </tr>
          ))
        } 
        </tbody>
      </table>
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

