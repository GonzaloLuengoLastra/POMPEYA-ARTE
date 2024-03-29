import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

export default function ListarPrecios () {

  const [precio,setPrecios]= useState([]);
  const  [tablaPrecio, setTablaPrecio] = useState([]);
  const  [busqueda, setBusqueda] = useState("");

  const getPrecio = ()=>{
    Axios.get("http://localhost:3001/getPrecios").then((response)=>{
      setPrecios(response.data); 
      setTablaPrecio(response.data);
    });
  }

  const deletePrecio = (val) =>{
    Swal.fire({
      title: 'Eliminar Precio',
      text: "¿Desea eliminar el precio de "+val.cantidad_precio+" del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Precio eliminado!', '', 'success')
        Axios.delete(`http://localhost:3001/deletePrecio/${val.id_precio}`).then(()=>{
        getPrecio(); 
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
  var ResultadoBusqueda = tablaPrecio.filter((elemento) => {
    if(elemento.cantida_precio.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
      return elemento;
    }
  })
  setPrecios(ResultadoBusqueda);
}

useEffect(() => {
  getPrecio();
}, [])

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRECIOS
    </h3>
    <p className="text-justify">
    Listar precio de obras de arte.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoPrecio"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRECIO</Link>
      </li>
      <li>
        <Link className='active' to="/ListarPrecios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRECIOS</Link>
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
            <th className="text-dark">PRECIO $</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {precio.map((val, key)=>{
          return <tr className="text-center" key={val.id_precio}>
            <td>{val.id_precio}</td>
            <td>{val.cantida_precio}</td>
            <td>
              <Link to={`/ActualizarPrecio/${val.id_precio}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button onClick={()=>{
                  deletePrecio(val);
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

