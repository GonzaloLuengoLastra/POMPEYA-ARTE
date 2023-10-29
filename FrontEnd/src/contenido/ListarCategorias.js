import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

export default function ListarCategorias() {

  const [categoria,setCategoria]= useState([]);
  const  [tablaCategoria, setTablaCategoria] = useState([]);
  const  [busqueda, setBusqueda] = useState("");

  const getCategorias = ()=>{
    Axios.get("http://localhost:3001/getCategorias").then((response)=>{
      setCategoria(response.data);
      setTablaCategoria(response.data); 
    });
  }

  const deleteCategoria = (val) =>{
    Swal.fire({
      title: 'Eliminar Categoría',
      text: "¿Desea eliminar la categoría "+val.nombre_categoria+" del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Categoría eliminada!', '', 'success')
        Axios.delete(`http://localhost:3001/deleteCategoria/${val.id_categoria}`).then(()=>{
        getCategorias(); 
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
  var ResultadoBusqueda = tablaCategoria.filter((elemento) => {
    if(elemento.nombre_categoria.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
      return elemento;
    }
  })
  setCategoria(ResultadoBusqueda);
}

useEffect(() => {
  getCategorias();
}, [])

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRODUCTOS
    </h3>
    <p className="text-justify">
      Listar categoría de obras de arte.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevaCategoria"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA CATEGORÍA</Link>
      </li>
      <li>
        <Link className='active' to="/ListarCategorias"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CATEGORÍAS</Link>
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
            <th className="text-dark">NOMBRE CATEGORÍA</th>
            <th className="text-dark">DESCRIPCIÓN</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {categoria.map((val)=>{
          return <tr className="text-center">
            <td>{val.id_categoria}</td>
            <td>{val.nombre_categoria}</td>
            <td>{val.descripcion_categoria}</td>
            <td>
              <Link to={`/ActualizarCategoria/${val.id_categoria}`}className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button onClick={()=>{
                  deleteCategoria(val);
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
