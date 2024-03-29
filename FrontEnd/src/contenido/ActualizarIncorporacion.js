import Axios from "axios";
import React, {  useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

export default function ActualizarIncorporacion () {
  
  let navigate = useNavigate();
  
  const { id_incor } = useParams();

  const[vincorporacion,setVincorporacion]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const[artista,setArtista]= React.useState('')

  const[errorValor,setErrorValor]=React.useState(0)
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

    const cambiarValor = (e) => {
      const valueValor = e.target.value;
      const onliLetValor = /^[0-9]*$/g.test(valueValor);
  
      //Incorrecto
      if(onliLetValor === false){
        setErrorValor(1);
      }

      //Correcto
      if(onliLetValor === true){
        setErrorValor(0);
      }

      setVincorporacion(valueValor);
    }

  React.useEffect(() => {
    Axios.get('http://localhost:3001/editIncor/'+id_incor)
    .then(res => {
      setDescripcion(res.data[0].descripcion_incor)
      setVincorporacion(res.data[0].valor_incor)
      setArtista(res.data[0].id_usuario)
    })
    .catch(err => console.log(err));
  }, [])

  const[usuario,setUsuario]= React.useState([])
    React.useEffect(()=>{
      fetch("http://localhost:3001/usuarios")
      .then(res=>res.json())
      .then((result)=>{
        setUsuario(result);
      }
    )
    },[])

    const updateIncor = (val) =>{
      Swal.fire({
        title: 'Actualizar Incorporación',
        text: "¿Desea actualizar la incorporación en el sistema?",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Incorporación Actualizada!', '', 'success')
          Axios.put("http://localhost:3001/updateIncor/"+id_incor, {
            descripcion_incor: descripcion,
            valor_incor: vincorporacion,
            id_usuario: artista
        }).then(()=>{
          console.log("Contrato registrado");
          
        });
        navigate("/ListarIncorporaciones");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR INCORPORACIÓN
    </h3>
    <p className="text-justify">
    Actualiza Incorporación de artistas.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevaIncorporacion"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA INCORPORACIÓN</Link>
      </li>
      <li>
        <Link to="/ListarIncorporaciones"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE INCORPORACIONES</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Incorporación</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Descripción</label>
                <input type="text" defaultValue={descripcion} onChange={cambiarDescripcion} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                />
                {
                  (errorDescripcion === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Valor</label>
                <input type="text" defaultValue={vincorporacion} onChange={cambiarValor}  className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
                />
                {
                  (errorValor === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <fieldset>
        <legend><i className="fas fa-medal" /> &nbsp; información Artista a Incorporar</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setArtista(e.target.value)}>
                  <option value selected disabled>Seleccione un Artista</option>
                  {usuario.map(usuario=>(
                  <option>{usuario.id_usuario}</option>
                  ))
                  } 
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button disabled={errorDescripcion===1 || errorValor===1 } type="button" onClick={updateIncor} className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }

