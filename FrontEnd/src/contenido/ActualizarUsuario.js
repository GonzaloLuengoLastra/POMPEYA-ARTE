import axios from "axios";
import React, { useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";


export default function ActualizarUsuario () {
    let navigate = useNavigate();

    const {id_usuario} = useParams();

    const [Rut, setRut] = useState("");
    const [nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Telefono, setTelefono] = useState();
    const [Direccion, setDireccion] = useState("");
    const [NombreUsuario, setNombreUsuario] = useState();
    const [Email, setEmail] = useState("");
    const [Contrasena, setContrasena] = useState("");
    const [Privilegio, setPrivilegio] = useState("");

    const {register, formState:{errors}, handleSubmit} = useForm();

    useEffect(() => {
      axios.get('http://localhost:3001/edit/'+id_usuario)
      .then(res => {
        setRut(res.data[0].rut)
        setNombre(res.data[0].nombre)
        setApellido(res.data[0].apellido)
        setTelefono(res.data[0].telefono)
        setDireccion(res.data[0].direccion)
        setNombreUsuario(res.data[0].nombreUsuario)
        setEmail(res.data[0].email)
        setContrasena(res.data[0].contrasena)
        setPrivilegio(res.data[0].privilegio)
      })
      .catch(err => console.log(err));
    }, [])
  
    const updateUsuario = (e) =>{
      Swal.fire({
        title: 'Actualizar Usuario',
        text: "¿Desea actualizar al usuario en el sistema?",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Usuario actualizado!', '', 'success')
          axios.put('http://localhost:3001/updateUsuario/'+id_usuario, {
          rut:Rut,
          nombre:nombre,
          apellido:Apellido,
          telefono:Telefono,
          direccion:Direccion,
          nombreUsuario:NombreUsuario,
          email:Email,
          contrasena:Contrasena,
          privilegio:Privilegio
        }).then(()=>{
          console.log("Tipo de contrato registrado");
          
        });
        navigate("/ListarUsuarios");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR USUARIO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
	<li>
        <Link to="/NuevoUsuario"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO USUARIO</Link>
      </li>
      <li>
        <Link to="/ListarUsuarios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE USUARIOS</Link>
      </li>
      <li>
        <Link to="/BuscarUsuario"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR USUARIO</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
   <div className="container-fluid" >
    <form onSubmit={handleSubmit(updateUsuario)} action className="form-neon" autoComplete="off" >
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información personal</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">RUT</label>
                <input defaultValue={Rut}
                onChange={e => setRut(e.target.value)}
                type="text" name="usuario_dni_up" id="usuario_dni" className="form-control" maxLength={12} 
                {...register("rut",{
                  required:true,
                  pattern: /^\d{1,3}(?:\.\d{1,3}){2}-[\dkK]$/
                })}
                /> 
                {
                  errors.rut?.type==="required" && (<span className='errors'>Ingrese un Rut</span>)
                }
                {
                  errors.rut?.type==="pattern" && (<span className='errors'>Ejemplo forma correcta es: 19.575.214-1</span>)
                }
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombres</label>
                <input defaultValue={nombre} type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_up" id="usuario_nombre" maxLength={35}
                onChange={e => setNombre(e.target.value)}
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
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Apellidos</label>
                <input defaultValue={Apellido} type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_apellido_up" id="usuario_apellido" maxLength={35}
                onChange={e => setApellido(e.target.value)}
                {...register("apellido",{
                  required:true,
                  pattern: /[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}/
                })}
              />
              {
                errors.apellido?.type==="required" && (<span className='errors'>Ingrese un Apellido</span>)
              }
              {
                errors.apellido?.type==="pattern" && (<span className='errors'>Formato de solo letras</span>)
              }
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_telefono" className="bmd-label-floating">Teléfono</label>
                <input defaultValue={Telefono} type="text" className="form-control" name="usuario_telefono_up" id="usuario_telefono" maxLength={20}
                onChange={e => setTelefono(e.target.value)}
                {...register("telefono",{
                  required:true,
                  pattern: /^[0-9()+]{12,12}/
                })}
              />
              {
                errors.telefono?.type==="required" && (<span className='errors'>Ingrese un Teléfono</span>)
              }
              {
                errors.telefono?.type==="pattern" && (<span className='errors'>Formato: +56912345678</span>)
              }
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_direccion" className="bmd-label-floating">Dirección</label>
                <input defaultValue={Direccion} type="text" className="form-control" name="usuario_direccion_up" id="usuario_direccion" maxLength={190}
                onChange={e => setDireccion(e.target.value)}
                {...register("direccion",{
                  required:true,
                  pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}/
                })}
                />
                {
                  errors.direccion?.type==="required" && (<span className='errors'>Ingrese una Dirección</span>)
                }
                {
                  errors.direccion?.type==="pattern" && (<span className='errors'>Carácter no permitido</span>)
                }
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <fieldset>
        <legend><i className="fas fa-user-lock" /> &nbsp; Información de la cuenta</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_usuario" className="bmd-label-floating">Nombre de usuario</label>
                <input defaultValue={NombreUsuario} type="text" pattern="[a-zA-Z0-9]{1,35}" className="form-control" name="usuario_usuario_up" id="usuario_usuario" maxLength={35}
                onChange={e => setNombreUsuario(e.target.value)}
                {...register("usuario",{
                  required:true,
                  pattern: /[a-zA-Z0-9]{1,35}/
                })}
              />
              {
                errors.usuario?.type==="required" && (<span className='errors'>Ingrese un Nombre de Usuario</span>)
              }
              {
                errors.usuario?.type==="pattern" && (<span className='errors'>Carácter no permitido</span>)
              }
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_email" className="bmd-label-floating">Email</label>
                <input defaultValue={Email} type="email" className="form-control" name="usuario_email_up" id="usuario_email" maxLength={70} 
                onChange={e => setEmail(e.target.value)}
                {...register("email",{
                  required:true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                })}
              />
              {
                errors.email?.type==="required" && (<span className='errors'>Ingrese un Email</span>)
              }
              {
                errors.email?.type==="pattern" && (<span className='errors'>Ejemplo: pompeya1@gmail.com</span>)
              }
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <fieldset>
        <legend style={{marginTop: 40}}><i className="fas fa-lock" /> &nbsp; Nueva contraseña</legend>
        <p>Para actualizar la contraseña de esta cuenta ingrese una nueva y vuelva a escribirla. En caso que no desee actualizarla debe dejar vacíos los dos campos de las contraseñas.</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_clave_nueva_1" className="bmd-label-floating">Contraseña</label>
                <input type="password" defaultValue={Contrasena} className="form-control" name="usuario_clave_nueva_1" id="usuario_clave_nueva_1" pattern="[a-zA-Z0-9$@.-]{7,100}" maxLength={100}
                onChange={e => setContrasena(e.target.value)}
                {...register("contrasena",{
                  required:true,
                  pattern: /[a-zA-Z0-9$@.-]{7,100}/
                })}
              />
              {
                errors.contrasena?.type==="required" && (<span className='errors'>Ingrese una Contraseña</span>)
              }
              {
                errors.contrasena?.type==="pattern" && (<span className='errors'>Carácter no permitido</span>)
              }
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <fieldset>
        <legend><i className="fas fa-medal" /> &nbsp; Nivel de privilegio</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p><span className="badge badge-info">Control total</span> Permisos para registrar, actualizar y eliminar</p>
              <p><span className="badge badge-success">Edición</span> Permisos para registrar y actualizar</p>
              <p><span className="badge badge-dark">Registrar</span> Solo permisos para registrar</p>
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_up">
                  <option value selected disabled>Seleccione una opción</option>
                  <option value={1}>Control total</option>
                  <option value={2}>Edición</option>
                  <option value={3}>Registrar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <p className="text-center" style={{marginTop: 40}}>
        <button className="btn btn-raised btn-success btn-sm" ><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }
  

