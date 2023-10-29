import axios from "axios";
import React, {  useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ActualizarSala () {

  let navigate = useNavigate();

  const { id_sala } = useParams();

  const[nsala,setNsala]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')

  const[errorNombre,setErrorNombre]=React.useState(0)
  const[errorDescripcion,setErrorDescripcion]=React.useState(0)

    const cambiarDescripcion= (e) => {
      const valueDescripcion = e.target.value;
      const onliLetDescripcion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]*$/g.test(valueDescripcion);
  
      //Incorrecto
      if(onliLetDescripcion === false){
        setErrorDescripcion(1);
      }

      //Correcto
      if(onliLetDescripcion === true){
        setErrorDescripcion(0);
      }

      setDescripcion(valueDescripcion);
    }

    const cambiarNombre = (e) => {
      const valueNombre = e.target.value;
      const onliLetNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]*$/g.test(valueNombre);
  
      //Incorrecto
      if(onliLetNombre === false){
        setErrorNombre(1);
      }

      //Correcto
      if(onliLetNombre === true){
        setErrorNombre(0);
      }

      setNsala(valueNombre);
    }

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
    Actualiza salas para exhibición de las obras de arte.
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
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Sala de Exhibición</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Sala</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
                defaultValue={nsala}
                onChange={cambiarNombre} 
              />
              {
                  (errorNombre === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35}
                defaultValue={descripcion}
                onChange={cambiarDescripcion} 
                />
                {
                  (errorDescripcion === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button disabled={errorDescripcion===1 || errorNombre===1 } type="button" onClick={updateSala} className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>

  </div>
  </div>
	  </div>
	);
  }

