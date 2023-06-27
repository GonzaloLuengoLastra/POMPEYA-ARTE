import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ListarUsuarios() {
  
  const  [listaUsuarios, setUsuarios] = useState([]);

  const getUsuarios = ()=>{
    Axios.get("http://localhost:3001/usuarios").then((response)=>{
      setUsuarios(response.data); 
    });
  }

  const deleteUsuario = (val) =>{
      Swal.fire({
        title: 'Eliminar Usuario',
        text: "¿Desea eliminar a "+val.nombre+" del sistema",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Usuario eliminado!', '', 'success')
          Axios.delete(`http://localhost:3001/delete/${val.id_usuario}`).then(()=>{
          getUsuarios(); 
        });
        } else if (result.isDenied) {
          Swal.fire('Operación cancelada', '', 'info')
        }
      })
  }

  getUsuarios();
    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE USUARIOS
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoUsuario"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO USUARIO</Link>
      </li>
      <li>
        <Link className="active" to="/ListarUsuarios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE USUARIOS</Link>
      </li>
      <li>
        <Link to="/BuscarUsuario"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR USUARIO</Link>
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
            <th className="text-dark">RUT</th>
            <th className="text-dark">NOMBRE</th>
            <th className="text-dark">APELLIDO</th>
            <th className="text-dark">TELÉFONO</th>
            <th className="text-dark">USUARIO</th>
            <th className="text-dark">EMAIL</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((val, key)=>{
            return <tr className="text-center" key={val.id_usuario}>
            <td>{val.id_usuario}</td>
            <td>{val.rut}</td>
            <td>{val.nombre}</td>
            <td>{val.apellido}</td>
            <td>{val.telefono}</td>
            <td>{val.nombreUsuario}</td>
            <td>{val.email}</td>
            <td>
              <Link to={`/ActualizarUsuario/${val.id_usuario}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button onClick={()=>{
                  deleteUsuario(val);
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
