import axios from "axios";
import React, { useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';


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

    const[errorRut,setErrorRut]=React.useState(0)
    const[errorNombre,setErrorNombre]=React.useState(0)
    const[errorApellido,setErrorApellido]=React.useState(0)
    const[errorTelefono,setErrorTelefono]=React.useState(0)
    const[errorDireccion,setErrorDireccion]=React.useState(0)
    const[errorUsuario,setErrorUsuario]=React.useState(0)
    const[errorEmail,setErrorEmail]=React.useState(0)
    const[errorContrasena,setErrorContrasena]=React.useState(0)

    const cambiarRut = (e) => {
      const valueRut = e.target.value;
      const onliLetRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/g.test(valueRut);
  
      //Incorrecto
      if(onliLetRut === false){
        setErrorRut(1);
      }

      //Correcto
      if(onliLetRut === true){
        setErrorRut(0);
      }

      setRut(valueRut);
    }

    const cambiarNombre = (e) => {
      const valueNombre = e.target.value;
      const onliLetNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]*$/g.test(valueNombre);
  
      //Incorrecto
      if(onliLetNombre === false){
        setErrorNombre(1);
      }

      //Correcto
      if(onliLetNombre === true){
        setErrorNombre(0);
      }

      setNombre(valueNombre);
    }

    const cambiarApellido = (e) => {
      const valueApellido = e.target.value;
      const onliLetApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]*$/g.test(valueApellido);
  
      //Incorrecto
      if(onliLetApellido === false){
        setErrorApellido(1);
      }

      //Correcto
      if(onliLetApellido === true){
        setErrorApellido(0);
      }

      setApellido(valueApellido);
    }

    const cambiarTelefono = (e) => {
      const valueTelefono = e.target.value;
      const onliLetTelefono = /^\+?569?[0-9]{8}?$/g.test(valueTelefono);
  
      //Incorrecto
      if(onliLetTelefono === false){
        setErrorTelefono(1);
      }

      //Correcto
      if(onliLetTelefono === true){
        setErrorTelefono(0);
      }

      setTelefono(valueTelefono);
    }

    const cambiarDireccion = (e) => {
      const valueDireccion = e.target.value;
      const onliLetDireccion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]*$/g.test(valueDireccion);
  
      //Incorrecto
      if(onliLetDireccion === false){
        setErrorDireccion(1);
      }

      //Correcto
      if(onliLetDireccion === true){
        setErrorDireccion(0);
      }

      setDireccion(valueDireccion);
    }

    const cambiarNombreUsuario = (e) => {
      const valueNombreUsuario = e.target.value;
      const onliLetNombreUsuario = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]*$/g.test(valueNombreUsuario);
  
      //Incorrecto
      if(onliLetNombreUsuario === false){
        setErrorUsuario(1);
      }

      //Correcto
      if(onliLetNombreUsuario === true){
        setErrorUsuario(0);
      }

      setNombreUsuario(valueNombreUsuario);
    }

    const cambiarEmail = (e) => {
      const valueEmail = e.target.value;
      const onliLetEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(valueEmail);
  
      //Incorrecto
      if(onliLetEmail === false){
        setErrorEmail(1);
      }

      //Correcto
      if(onliLetEmail === true){
        setErrorEmail(0);
      }

      setEmail(valueEmail);
    }

    const cambiarContrasena = (e) => {
      const valueContrasena = e.target.value;
      const onliLetContrasena = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]*$/g.test(valueContrasena);
  
      //Incorrecto
      if(onliLetContrasena === false){
        setErrorContrasena(1);
      }

      //Correcto
      if(onliLetContrasena === true){
        setErrorContrasena(0);
      }

      setContrasena(valueContrasena);
    }


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
    Actualiza usuario ingresado en el sistema.
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
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
   <div className="container-fluid" >
    <form action className="form-neon" autoComplete="off" >
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información personal</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">RUT</label>
                <input defaultValue={Rut}
                onChange={cambiarRut}
                type="text" name="usuario_dni_up" id="usuario_dni" className="form-control" maxLength={12} 
                /> 
                {
                  (errorRut === 1) && (
                    <p style={{color: 'red'}}>Ejemplo: 12.345.678-9</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombres</label>
                <input defaultValue={nombre} type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_up" id="usuario_nombre" maxLength={35}
                onChange={cambiarNombre}
              />
              {
                  (errorNombre === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Apellidos</label>
                <input defaultValue={Apellido} type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_apellido_up" id="usuario_apellido" maxLength={35}
                onChange={cambiarApellido}
              />
              {
                  (errorApellido === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_telefono" className="bmd-label-floating">Teléfono</label>
                <input defaultValue={Telefono} type="text" className="form-control" name="usuario_telefono_up" id="usuario_telefono" maxLength={20}
                onChange={cambiarTelefono}
              />
              {
                  (errorTelefono === 1) && (
                    <p style={{color: 'red'}}>Ejemplo: +56912345678</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_direccion" className="bmd-label-floating">Dirección</label>
                <input defaultValue={Direccion} type="text" className="form-control" name="usuario_direccion_up" id="usuario_direccion" maxLength={190}
                onChange={cambiarDireccion}
                />
                {
                  (errorDireccion === 1) && (
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
        <legend><i className="fas fa-user-lock" /> &nbsp; Información de la cuenta</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_usuario" className="bmd-label-floating">Nombre de usuario</label>
                <input defaultValue={NombreUsuario} type="text" pattern="[a-zA-Z0-9]{1,35}" className="form-control" name="usuario_usuario_up" id="usuario_usuario" maxLength={35}
                onChange={cambiarNombreUsuario}
              />
              {
                  (errorUsuario === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_email" className="bmd-label-floating">Email</label>
                <input defaultValue={Email} type="email" className="form-control" name="usuario_email_up" id="usuario_email" maxLength={70} 
                onChange={cambiarEmail}
              />
              {
                  (errorEmail === 1) && (
                    <p style={{color: 'red'}}>Ejemplo: pompeya@gmail.com</p>
                  )
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
                onChange={cambiarContrasena}
              />
              {
                  (errorContrasena === 1) && (
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
        <legend><i className="fas fa-medal" /> &nbsp; Nivel de privilegio</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p><span className="badge badge-info">Administrador</span> Permisos para registrar, actualizar y eliminar</p>
              <p><span className="badge badge-success">Artista</span> Permisos para ver y comprar</p>
              <p><span className="badge badge-dark">Cliente</span> Solo permisos para comprar</p>
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_up"
                onChange={(e) => {
                  const selectedPrivilegio = e.target.value;
                  setPrivilegio(selectedPrivilegio);
                }}
                >
                  <option value selected disabled>Seleccione una opción</option>
                  <option value={1}>Administrador</option>
                  <option value={2}>Artista</option>
                  <option value={3}>Cliente</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <p className="text-center" style={{marginTop: 40}}>
        <button
        disabled={errorRut===1 || errorNombre===1 || errorApellido===1 || errorTelefono===1
          || errorDireccion===1 || errorEmail===1 || errorUsuario===1 || errorContrasena===1}
         type="button" onClick={updateUsuario} className="btn btn-raised btn-success btn-sm" ><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }
  

