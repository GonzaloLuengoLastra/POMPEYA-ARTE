import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ListarVentas() {
  
  const  [listarVenta, setListarVenta] = useState([]);
  const [loginStatus, setLoginStatus] = useState('');
  const [privilegio, setPrivilegio] = useState();

  const  [tablaVenta, setTablaVenta] = useState([]);
  const  [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
      setLoginStatus(response.data.user[0].nombreUsuario);
      setPrivilegio(response.data.user[0].privilegio)
    })
  }, [])

  const verificar3 = (user) => {
    if(privilegio == 1 ){
      return <Link to="/NuevaVenta"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA VENTA</Link>
    }
    return <p><span><i className="fa fa-pencil" /></span></p>
  }
  

  const getVenta = ()=>{
    Axios.get("http://localhost:3001/getVenta").then((response)=>{
      setListarVenta(response.data); 
      setTablaVenta(response.data);
    });
  }

  const deleteVenta = (val) =>{
      Swal.fire({
        title: 'Eliminar Venta',
        text: "¿Desea eliminar la venta del sistema",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Venta eliminada!', '', 'success')
          Axios.delete(`http://localhost:3001/deleteVenta/${val.id_venta}`).then(()=>{
          getVenta(); 
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
    var ResultadoBusqueda = tablaVenta.filter((elemento) => {
      if(elemento.id_usuario.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
        return elemento;
      }
    })
    setListarVenta(ResultadoBusqueda);
  }

  useEffect(() => {
    getVenta();
  }, [])
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
    Listar ventas de las obras de arte.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        {verificar3(loginStatus)}
      </li>
      <li>
        <Link className="active" to="/ListarVentas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTAR VENTAS</Link>
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
            <th className="text-dark">PRECIO</th>
            <th className="text-dark">GANANCIA</th>
            <th className="text-dark">IVA 19%</th>
            <th className="text-dark">PRODUCTO</th>
            <th className="text-dark">TIPO PAGO</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {listarVenta.map((val, key)=>{
            return <tr className="text-center" key={val.id_venta}>
            <td>{val.id_venta}</td>
            <td>{val.precio_venta}</td>
            <td>{val.ganancia_venta}</td>
            <td>{val.IVA}</td>
            <td>{val.id_producto}</td>
            <td>{val.id_tipo_pago}</td>
            <td>
              <Link to={`/ActualizarVenta/${val.id_venta}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button onClick={()=>{
                  deleteVenta(val);
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

