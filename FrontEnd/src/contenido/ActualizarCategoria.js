import axios from "axios";
import React, { useEffect} from 'react';
import { Link, Router, useNavigate, useParams } from 'react-router-dom';

export default function ActualizarCategoria () {
  
  let navigate = useNavigate();

  const { id } = useParams();

  const[ncategoria,setNcategoria]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const[categoria,setCategoria]=React.useState([])


  useEffect(() => {
    loadUser();
  }, []);

  const handleClick=(e)=>{
    e.preventDefault()
    const categoria={ncategoria,descripcion}
    console.log(categoria)
    fetch(`http://localhost:8080/editt/${id}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(categoria)

    }).then(()=>{
      console.log("Categoria editada")
    })
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/editt/${id}`);
    setCategoria(result.data);
  };

	return (
    
	  <div>
		<div class="content-wrapper">
		{/* Page content */}
		<div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR CATEGORÍA
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevaCategoria"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO CATEGORÍA</Link>
      </li>
      <li>
        <Link to="/ListarCategorias"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CATEGORÍAS</Link>
      </li>
      <li>
        <Link to="/BuscarCategoria"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR CATEGORÍA</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Categoría</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Categoría</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                defaultValue={categoria.ncategoria}
                onChange={(e)=>setNcategoria(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text"  className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
                defaultValue={categoria.descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
                />
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