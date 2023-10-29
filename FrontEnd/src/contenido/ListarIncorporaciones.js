import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

export default function ListarIncorporaciones () {
  const[incorporacion,setIncorporacion]=React.useState([])
  const [loginStatus, setLoginStatus] = useState('');
  const [privilegio, setPrivilegio] = useState();

  const  [tablaInc, setTablaInc] = useState([]);
  const  [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
      setLoginStatus(response.data.user[0].nombreUsuario);
      setPrivilegio(response.data.user[0].privilegio)
    })
  }, [])

  const verificar3 = (user) => {
    if(privilegio == 1 ){
      return <Link to="/NuevaIncorporacion"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA INCORPORACIÓN</Link>
    }
    return <p><span><i className="fa fa-pencil" /></span></p>
  }

  
  
  const getIncor = ()=>{
    Axios.get("http://localhost:3001/getIncor").then((response)=>{
      setIncorporacion(response.data); 
      setTablaInc(response.data);
    });
  }

  const deleteIncor = (val) =>{
    Swal.fire({
      title: 'Eliminar Incorporación',
      text: "¿Desea eliminar la incorporación del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Incorporación eliminada!', '', 'success')
        Axios.delete(`http://localhost:3001/deleteIncor/${val.id_incor}`).then(()=>{
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
  var ResultadoBusqueda = tablaInc.filter((elemento) => {
    if(elemento.descripcion_incor.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
      return elemento;
    }
  })
  setIncorporacion(ResultadoBusqueda);
}

useEffect(() => {
  getIncor();
}, [])

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE INCORPORACIONES
    </h3>
    <p className="text-justify">
    Listar incorporacion de artistas.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
    {verificar3(loginStatus)}
      </li>
      <li>
        <Link className='active' to="/ListarIncorporaciones"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE INCORPORACIONES</Link>
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
            <th className="text-dark">DESCRIPCIÓN</th>
            <th className="text-dark">VALOR</th>
            <th className="text-dark">USUARIO</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {incorporacion.map((val, key)=>{
          return <tr className="text-center">
            <td>{val.id_incor}</td>
            <td>{val.descripcion_incor}</td>
            <td>{val.valor_incor}</td>
            <td>{val.id_usuario}</td>
            <td>
              <Link to={`/ActualizarIncorporacion/${val.id_incor}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button type="button" className="btn btn-warning" onClick={() => deleteIncor(val)}>
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

