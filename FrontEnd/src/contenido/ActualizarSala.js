import axios from "axios";
import React, {  useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

export default function ActualizarSala () {

  let navigate = useNavigate();

  const { id_sala } = useParams();

  const[nsala,setNsala]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const {register, formState:{errors}, handleSubmit} = useForm();

  useEffect(() => {
    axios.get('http://localhost:3001/editSala/'+id_sala)
    .then(res => {
      setNsala(res.data[0].nombre_sala);
      setDescripcion(res.data[0].descripcion_sala)
    })
    .catch(err => console.log(err));
  }, [])

  const updateSala = (e) =>{
    Swal.fire({
      title: 'Actualizar Sala',
      text: "¿Desea actualizar la sala en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Sala actualizada!', '', 'success')
        axios.put('http://localhost:3001/updateSala/'+id_sala, {
        nombre_sala:nsala,
        descripcion_sala:descripcion
      }).then(()=>{
        console.log("Tipo de contrato registrado");
        
      });
      navigate("/ListarSalas");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR SALA
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevaSala"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA SALA</Link>
      </li>
      <li>
        <Link to="/ListarSalas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE SALAS</Link>
      </li>
      <li>
        <Link to="/BuscarSala"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR SALA</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form onSubmit={handleSubmit(updateSala)} action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Sala de Exhibición</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Sala</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
                defaultValue={nsala}
                onChange={(e)=>setNsala(e.target.value)} 
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
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35}
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

