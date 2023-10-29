import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

const ListarCategorias = () => {

  const [producto,setProducto] = useState([]);
  const  [tablaProducto, setTablaProducto] = useState([]);
  const  [busqueda, setBusqueda] = useState("");

  const [loginStatus, setLoginStatus] = useState('');

    useEffect(() => {
      axios.get("http://localhost:3001/login").then((response)=>{
        setLoginStatus(response.data.user[0].privilegio)
      })
    }, [])

  const getProducto = async() => {
    const res = await axios.get("http://localhost:3001/getProductos",{
      headers:{
          "Content-Type":"application/json"
      }
    });
    setProducto(res.data)
    setTablaProducto(res.data)
    console.log(res)
  }

  useEffect(()=>{
    getProducto()
  }, [])

  const deleteProductos = (val) =>{
    Swal.fire({
      title: 'Eliminar Producto',
      text: "¿Desea eliminar a "+val.nombre_producto+" del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Producto eliminado!', '', 'success')
        axios.delete(`http://localhost:3001/deleteProductos/${val.id_producto}`).then(()=>{
        getProducto(); 
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
  var ResultadoBusqueda = tablaProducto.filter((elemento) => {
    if(elemento.nombre_producto.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
      return elemento;
    }
  })
  setProducto(ResultadoBusqueda);
}

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
    Listar obras de arte del sistema.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoProducto"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRODUCTO</Link>
      </li>
      <li>
        <Link className='active' to="/ListarProductos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CATEGORÍAS</Link>
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
            <th className="text-dark">PINTURA</th>
            <th className="text-dark">NOMBRE PRODUCTO</th>
            <th className="text-dark">SALA</th>
            <th className="text-dark">ARTISTA</th>
            <th className="text-dark">AÑO</th>
            <th className="text-dark">CATEGORÍA</th>
            <th className="text-dark">PRECIO</th>
            <th className="text-dark">ESTADO</th>
            <th className="text-dark">ACTUALIZAR</th>
            <th className="text-dark">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {
        producto.length > 0 ? producto.map((el, i) => {
          return (
            <> 
          <tr className="text-center">
          <td><img src={`http://localhost:3001/uploads/${el.imagen_producto}`} style={{width: '100px', height: '100px'}}/></td>
          <td>{el.nombre_producto}</td>
          <td>{el.id_sala}</td>
          <td>{el.id_usuario}</td>
          <td>{el.fecha_producto}</td>
          <td>{el.id_categoria}</td>
          <td>{el.id_precio}</td>
          <td>{el.estado_producto}</td>
            <td>
              <Link to={`/ActualizarProducto/${el.id_producto}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
                <button type="button" className="btn btn-warning" onClick={() => deleteProductos(el)}>
                  <i className="far fa-trash-alt" />
                </button>
            </td>
          </tr>
          </>
          )
          }):""
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
    )
  }

 export default ListarCategorias; 

