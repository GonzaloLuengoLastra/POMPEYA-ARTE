import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

export default function ListarTipoContratos () {
  

  const[tcontrato,setTcontrato]= useState([])
  const  [tablatContrato, setTablatContrato] = useState([]);
  const  [busqueda, setBusqueda] = useState("");

  const getTipoContrato = ()=>{
    Axios.get("http://localhost:3001/getTContrato").then((response)=>{
      setTcontrato(response.data); 
      setTablatContrato(response.data);
    });
  }

  const deleteTipoContrato = (val) =>{
    Swal.fire({
      title: 'Eliminar Tipo de Contrato',
      text: "¿Desea eliminar el tipo de contrato "+val.nombre_tipo_contrato+" del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tipo de Contrato eliminada!', '', 'success')
        Axios.delete(`http://localhost:3001/deleteTContrato/${val.id_tipo_contrato}`).then(()=>{
      });
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
}

const handleChange = e => {
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar = (terminobusqueda) => {
  var ResultadoBusqueda = tablatContrato.filter((elemento) => {
    if(elemento.nombre_tipo_contrato.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
      return elemento;
    }
  })
  setTcontrato(ResultadoBusqueda);
}

useEffect(() => {
  getTipoContrato();
}, [])

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO CONTRATOS
    </h3>
    <p className="text-justify">
    Listar tipo contrato de los artistas.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoTipoContrato"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO CONTRATO</Link>
      </li>
      <li>
        <Link className='active' to="/ListarTipoContratos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO CONTRATOS</Link>
      </li>
    </ul>	
  </div>
  {/* Content */}
  <div className="col-12 col-md-6">
    <label htmlFor="usuario_dni" className="bmd-label-floating">Buscar</label>
    <input onChange={handleChange} className=" form-control" value={busqueda} placeholder="Búsqueda por nombre"></input>
  </div>
  <br/>
  <br/><br/>
  <div className="container-fluid">
    <div className="table-responsive">
      <table className="table table-ligth table-sm">
        <thead>
          <tr className="text-center roboto-medium">
            <th className="text-dark">#</th>
            <th className="text-dark">NOMBRE</th>
            <th className="text-dark">DESCRIPCIÓN</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {tcontrato.map((val, key)=>{
          return <tr className="text-center">
            <td>{val.id_tipo_contrato}</td>
            <td>{val.nombre_tipo_contrato}</td>
            <td>{val.descripcion_tipo_contrato}</td>
            <td>
              <Link to={`/ActualizarTipoContrato/${val.id_tipo_contrato}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button type="button" className="btn btn-warning" 
                onClick={()=>{
                  deleteTipoContrato(val);
                }}>
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

