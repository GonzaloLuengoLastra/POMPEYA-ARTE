import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';

export default function ListarCategorias () {

  const[productos,setProductos]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/productooos")
    .then(res=>res.json())
    .then((result)=>{
      setProductos(result);
    }
  )
  },[])

  const deleteProductos = async (id) => {
    await axios.delete(`http://localhost:8080/deleteproducto/${id}`);
  };

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
      <table className="table table-dark table-sm">
        <thead>
          <tr className="text-center roboto-medium">
            <th>#</th>
            <th>NOMBRE PRODUCTO</th>
            <th>SALA</th>
            <th>ARTISTA</th>
            <th>AÑO</th>
            <th>CATEGORÍA</th>
            <th>PRECIO</th>
            <th>ACTUALIZAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {productos.map(producto=>(
          <tr className="text-center">
          <td>{producto.id}</td>
          <td>{producto.nombres}</td>
          <td>{producto.sala}</td>
          <td>{producto.artista}</td>
          <td>{producto.año}</td>
          <td>{producto.categoria}</td>
          <td>{producto.precio}</td>
            <td>
              <Link to={`/ActualizarProducto/${producto.id}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button type="button" className="btn btn-warning" onClick={() => deleteProductos(producto.id)}>
                  <i className="far fa-trash-alt" />
                </button>
              </form>
            </td>
          </tr>
         ))
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

