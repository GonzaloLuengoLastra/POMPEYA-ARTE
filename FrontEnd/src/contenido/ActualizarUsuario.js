import axios from "axios";
import React, { useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';


export default function ActualizarUsuario () {
  let navigate = useNavigate();

  const { id } = useParams();

  const[dni,setDNI]=React.useState('')
  const[nombres,setName]=React.useState('')
  const[apellidos,setApellidos]=React.useState('')
  const[telefono,setTelefono]=React.useState('')
  const[direccion,setDireccion]=React.useState('')
  const[username,setUsername]=React.useState('')
  const[email,setEmail]=React.useState('')
  const[privilegio,setPrivilegio]=React.useState()
  const[usuario,setUsuarios]=React.useState([])

  

  

  useEffect(() => {
    loadUser();
  }, []);

  const handleClick=(e)=>{
    e.preventDefault()
    const usuario={dni,nombres,apellidos,telefono,direccion,username,email,privilegio}
    console.log(usuario)
    fetch(`http://localhost:8080/edit/${id}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(usuario)

    }).then(()=>{
      console.log("Estudiante editado")
    })
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/get/${id}`);
    setUsuarios(result.data);
  };

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
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información personal</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">DNI</label>
                <input type={"text"} pattern="[0-9-]{1,20}" className="form-control" name="usuario_dni_up" id="usuario_dni" maxLength={20}
                  Value={usuario.dni}
                  onChange={(e)=>setDNI(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombres</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_up" id="usuario_nombre" maxLength={35} 
                 defaultValue={usuario.nombres}
                 onChange={(e)=>setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Apellidos</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_apellido_up" id="usuario_apellido" maxLength={35} 
                defaultValue={usuario.apellidos}
                onChange={(e)=>setApellidos(e.target.value)}
                />
                
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_telefono" className="bmd-label-floating">Teléfono</label>
                <input type="text" className="form-control" name="usuario_telefono_up" id="usuario_telefono" maxLength={20} 
                defaultValue={usuario.telefono}
                onChange={(e)=>setTelefono(e.target.value)}
                />
                
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_direccion" className="bmd-label-floating">Dirección</label>
                <input type="text" pattern="[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}" className="form-control" name="usuario_direccion_up" id="usuario_direccion" maxLength={190}
                defaultValue={usuario.direccion}
                onChange={(e)=>setDireccion(e.target.value)}
                />
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
                <input type="text" pattern="[a-zA-Z0-9]{1,35}" className="form-control" name="usuario_usuario_up" id="usuario_usuario" maxLength={35}
                defaultValue={usuario.username}
                onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_email" className="bmd-label-floating">Email</label>
                <input type="email" className="form-control" name="usuario_email_up" id="usuario_email" maxLength={70} 
                defaultValue={usuario.email}
                onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <span>Estado de la cuenta  &nbsp; <span className="badge badge-info">Activa</span></span>
                <select className="form-control" name="usuario_estado_up">
                  <option value="Activa" selected>Activa</option>
                  <option value="Deshabilitada">Deshabilitada</option>
                </select>
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
                <input type="password" className="form-control" name="usuario_clave_nueva_1" id="usuario_clave_nueva_1" pattern="[a-zA-Z0-9$@.-]{7,100}" maxLength={100}
                /*onChange={(e)=>setPassword(e.target.value)}*/
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_clave_nueva_2" className="bmd-label-floating">Repetir contraseña</label>
                <input type="password" className="form-control" name="usuario_clave_nueva_2" id="usuario_clave_nueva_2" pattern="[a-zA-Z0-9$@.-]{7,100}" maxLength={100} />
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
                <select className="form-control" name="usuario_privilegio_up" defaultValue={usuario.privilegio} onChange={(e)=>setPrivilegio(e.target.value)} >
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
      <fieldset>
        <p className="text-center">Para poder guardar los cambios en esta cuenta debe de ingresar su nombre de usuario y contraseña</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_admin" className="bmd-label-floating">Nombre de usuario</label>
                <input type="text" pattern="[a-zA-Z0-9]{1,35}" className="form-control" name="usuario_admin" id="usuario_admin" maxLength={35} required />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="clave_admin" className="bmd-label-floating">Contraseña</label>
                <input type="password" className="form-control" name="clave_admin" id="clave_admin" pattern="[a-zA-Z0-9$@.-]{7,100}" maxLength={100} required />
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
