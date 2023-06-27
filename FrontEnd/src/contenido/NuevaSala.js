import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function NuevaSala () {

  const navigate = useNavigate();
  const[nsala,setNsala]= useState('')
  const[descripcion,setDescripcion]= useState('')

  const guardarSalas = (val) =>{
    Swal.fire({
      title: 'Guardar Sala',
      text: "¿Desea guardar la Sala en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Sala guardada!', '', 'success')
        Axios.post("http://localhost:3001/salas", {
        nombre_sala:nsala,
        descripcion_sala:descripcion
      }).then(()=>{
        console.log("Sala registrado");
        
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVA SALA
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevaSala"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA SALA</Link>
      </li>
      <li>
        <Link to="/ListarSalas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE SALAS</Link>
      </li>
      <li>
        <Link to="/BuscarSala"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR SALA</Link>
      </li>
    </ul>	
  </div>     
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
                onChange={(e)=>setNsala(e.target.value)}/>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35}
                onChange={(e)=>setDescripcion(e.target.value)} />
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <Link onClick={guardarSalas} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</Link>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }

