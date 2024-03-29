import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

export default function ListarTipoVentas () {

  const[tventas,setTventas]= useState([])

  const getTipoVenta = ()=>{
    Axios.get("http://localhost:3001/getTVenta").then((response)=>{
      setTventas(response.data); 
    });
  }

  const deleteTipoVenta = (val) =>{
    Swal.fire({
      title: 'Eliminar Tipo de Venta',
      text: "¿Desea eliminar el tipo de venta "+val.nombre_tipo_venta+" del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tipo de Venta eliminado!', '', 'success')
        Axios.delete(`http://localhost:3001/deleteTVenta/${val.id_tipo_venta}`).then(()=>{
      });
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
}

getTipoVenta();

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE VENTAS
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoTipoVenta"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO VENTA</Link>
      </li>
      <li>
        <Link className='active' to="/ListarTipoVentas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO VENTAS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoVenta"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO VENTA</Link>
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
            <th className="text-dark">TIPO VENTA</th>
            <th className="text-dark">DESCRIPCIÓN</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {tventas.map((val, key)=>{
          return <tr className="text-center">
            <td>{val.id_tipo_venta}</td>
            <td>{val.nombre_tipo_venta}</td>
            <td>{val.descripcion_tipo_venta}</td>
            <td>
              <Link to={`/ActualizarTipoVenta/${val.id_tipo_venta}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button type="button" className="btn btn-warning" onClick={() => deleteTipoVenta(val)}>
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

