import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ListarContrato () {
  
  const  [listaContratos, setContrato] = useState([]);
  const [loginStatus, setLoginStatus] = useState('');
  const [privilegio, setPrivilegio] = useState();

  const  [tablaContrato, setTablaContrato] = useState([]);
  const  [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
      setLoginStatus(response.data.user[0].nombreUsuario);
      setPrivilegio(response.data.user[0].privilegio)
    })
  }, [])

  const verificar3 = (user) => {
    if(privilegio == 1 ){
      return <Link to="/NuevoContrato"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO CONTRATO</Link>
    }
    return <p><span><i className="fa fa-pencil" /></span></p>
  }

  

  const getContrato = ()=>{
    Axios.get("http://localhost:3001/getContrato").then((response)=>{
      setContrato(response.data); 
      setTablaContrato(response.data);
    });
  }

  const deleteContrato = (val) =>{
      Swal.fire({
        title: 'Eliminar Contrato',
        text: "¿Desea eliminar el contrato del sistema",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Contrato eliminado!', '', 'success')
          Axios.delete(`http://localhost:3001/deleteContrato/${val.id_contrato}`).then(()=>{
          getContrato(); 
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
    var ResultadoBusqueda = tablaContrato.filter((elemento) => {
      if(elemento.nombre_contrato.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
        return elemento;
      }
    })
    setContrato(ResultadoBusqueda);
  }

  useEffect(() => {
    getContrato();
  }, [])

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CONTRATOS
    </h3>
    <p className="text-justify">
    Listar contrato de artistas.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
    {verificar3(loginStatus)}
      </li>
      <li>
        <Link className='active' to="/ListarContrato"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CONTRATOS</Link>
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
            <th className="text-dark">TIPO DE CONTRATO</th>
            <th className="text-dark">SALA</th>
            <th className="text-dark">ARTISTA</th>
            <th className="text-dark">PLAZO</th>
            <th className="text-dark">VALOR</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {listaContratos.map((val, key)=>{
          return <tr className="text-center" key={val.id_contrato}>
            <td>{val.id_contrato}</td>
            <td>{val.descripcion_contrato}</td>
            <td>{val.id_sala}</td>
            <td>{val.id_tipo_contrato}</td>
            <td>{val.id_usuario}</td>
            <td>{val.plazo_contrato}</td>
            <td>{val.precio_contrato}</td>
            <td>
              <Link to={`/ActualizarContrato/${val.id_contrato}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
              <button onClick={()=>{
                  deleteContrato(val);
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

