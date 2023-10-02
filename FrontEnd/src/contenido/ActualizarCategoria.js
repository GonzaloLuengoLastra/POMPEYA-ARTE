import axios from "axios";
import React, {  useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

export default function ActualizarCategoria () {
  
  let navigate = useNavigate();

  const { id_categoria } = useParams();

  const[ncategoria,setNcategoria]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const {register, formState:{errors}, handleSubmit} = useForm();


  useEffect(() => {
    axios.get('http://localhost:3001/editCategoria/'+id_categoria)
    .then(res => {
      setNcategoria(res.data[0].nombre_categoria)
      setDescripcion(res.data[0].descripcion_categoria)
    })
    .catch(err => console.log(err));
  }, [])

  const updateCategoria = (e) =>{
    Swal.fire({
      title: 'Actualizar Categoría',
      text: "¿Desea actualizar la categoría en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Categoría actualizada!', '', 'success')
        axios.put('http://localhost:3001/updateCategoria/'+id_categoria, {
        nombre_categoria:ncategoria,
        descripcion_categoria:descripcion
      }).then(()=>{
        console.log("Tipo de contrato registrado");
        
      });
      navigate("/ListarCategorias");
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
    <form onSubmit={handleSubmit(updateCategoria)} action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Categoría</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Categoría</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                defaultValue={ncategoria}
                onChange={(e)=>setNcategoria(e.target.value)}
                {...register("nombre",{
                  required:true,
                  pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}/
                })}
              />
              {
                errors.nombre?.type==="required" && (<span className='errors'>Ingrese un Nombre</span>)
              }
              {
                errors.nombre?.type==="pattern" && (<span className='errors'>Formato de solo letras</span>)
              }
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text"  className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
                defaultValue={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
                {...register("direccion",{
                  required:true,
                  pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}/
                })}
                />
                {
                  errors.direccion?.type==="required" && (<span className='errors'>Ingrese una Descripción</span>)
                }
                {
                  errors.direccion?.type==="pattern" && (<span className='errors'>Carácter no permitido</span>)
                }
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }