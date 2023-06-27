import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

export default function ListarSalas () {
 
  const [salas,setSalas]= useState([]);

  const getSalas = ()=>{
    Axios.get("http://localhost:3001/getSalas").then((response)=>{
      setSalas(response.data); 
    });
  }

  const deleteSalas = (val) =>{
    Swal.fire({
      title: 'Eliminar Sala',
      text: "¿Desea eliminar la sala "+val.nombre_sala+" del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Sala eliminada!', '', 'success')
        Axios.delete(`http://localhost:3001/deleteSala/${val.id_sala}`).then(()=>{
        getSalas(); 
      });
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
}

  getSalas();
    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE SALAS
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevaSala"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA SALA</Link>
      </li>
      <li>
        <Link className='active' to="/ListarSalas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE SALAS</Link>
      </li>
      <li>
        <Link to="/BuscarSala"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR SALA</Link>
      </li>
    </ul>	
  </div>
  {/* Content */}
  <div className="container-fluid">
    <div className="table-responsive">
      <table className="table table-ligth table-sm">
        <thead>
          <tr className="text-center roboto-medium">
            <th className="text-dark">#</th>
            <th className="text-dark">NOMBRE SALA</th>
            <th className="text-dark">DESCRIPCIÓN</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {salas.map((val, key)=>{
          return <tr className="text-center" key={val.id_sala}>
            <td>{val.id_sala}</td>
            <td>{val.nombre_sala}</td>
            <td>{val.descripcion_sala}</td>
            <td>
              <Link to={`/ActualizarSala/${val.id_sala}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button onClick={()=>{
                  deleteSalas(val);
                }} type="button" className="btn btn-warning">
                  <i className="far fa-trash-alt" />
                </button>
              </form>
            </td>
          </tr>
         })
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