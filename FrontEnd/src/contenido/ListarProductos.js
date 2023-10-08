import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

const ListarCategorias = () => {

  const [producto,setProducto] = useState([]);

  const getProducto = async() => {
    const res = await axios.get("http://localhost:3001/getProductos",{
      headers:{
          "Content-Type":"application/json"
      }
    });
    setProducto(res.data)
    console.log(res)
  }

  useEffect(()=>{
    getProducto()
  }, [])

  const deleteProductos = (val) =>{
    Swal.fire({
      title: 'Eliminar Producto',
      text: "¿Desea eliminar el producto "+val.nombre_producto+" del sistema",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Producto eliminado!', '', 'success')
        axios.delete(`http://localhost:3001/deleteProductos/${val.id_producto}`).then(()=>{
      });
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
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
      <li>
        <Link to="/BuscarProducto"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR CATEGORÍA</Link>
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
            <th className="text-dark">NOMBRE PRODUCTO</th>
            <th className="text-dark">SALA</th>
            <th className="text-dark">ARTISTA</th>
            <th className="text-dark">AÑO</th>
            <th className="text-dark">CATEGORÍA</th>
            <th className="text-dark">PRECIO</th>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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

