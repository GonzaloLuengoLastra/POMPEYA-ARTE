import axios from "axios";
import React, {  useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default function ActualizarTipoVenta () {
 
  let navigate = useNavigate();

  const { id } = useParams();

  const[ntipoventa,setNtipoventa]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const[tventas,setTventas]=React.useState([])


  useEffect(() => {
    loadUser();
  }, []);

  const handleClick=(e)=>{
    e.preventDefault()
    const tventas={ntipoventa,descripcion}
    console.log(tventas)
    fetch(`http://localhost:8080/edittv/${id}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(tventas)

    }).then(()=>{
      console.log("tipo de venta editado")
    })
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/gettv/${id}`);
    setTventas(result.data);
  };
  
	return (
	  <div>
      <Header/>
      <NavBar/>
		<div class="content-wrapper">
		{/* Page content */}
		<div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR TIPO VENTA
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoTipoVenta"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO VENTA</Link>
      </li>
      <li>
        <Link to="/ListarTipoVentas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO VENTAS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoVenta"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO VENTA</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo Venta</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo Venta</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                defaultValue={tventas.ntipoventa}
                onChange={(e)=>setNtipoventa(e.target.value)} />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35}
                defaultValue={tventas.descripcion}
                onChange={(e)=>setDescripcion(e.target.value)} />
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="submit" onClick={handleClick} className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
    <div className="alert alert-danger text-center" role="alert">
      <p><i className="fas fa-exclamation-triangle fa-5x" /></p>
      <h4 className="alert-heading">¡Ocurrió un error inesperado!</h4>
      <p className="mb-0">Lo sentimos, no podemos mostrar la información solicitada debido a un error.</p>
    </div>
  </div>
  </div>
	  </div>
	);
  }

