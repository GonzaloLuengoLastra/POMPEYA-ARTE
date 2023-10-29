import * as React from 'react';
import { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function RegistrarUsuarioNormal() {
  
  const navigate = useNavigate();
    const [Rut, setRut] = useState("");
    const [nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Telefono, setTelefono] = useState(0);
    const [Direccion, setDireccion] = useState("");
    const [NombreUsuario, setNombreUsuario] = useState("");
    const [Email, setEmail] = useState("");
    const [Contrasena, setContrasena] = useState("");

    const[errorRut,setErrorRut]= useState(0)
    const[errorNombre,setErrorNombre]= useState(0)
    const[errorApellido,setErrorApellido]= useState(0)
    const[errorTelefono,setErrorTelefono]= useState(0)
    const[errorDireccion,setErrorDireccion]= useState(0)
    const[errorUsuario,setErrorUsuario]= useState(0)
    const[errorEmail,setErrorEmail]= useState(0)
    const[errorContrasena,setErrorContrasena]= useState(0)

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
      const onliLetNombreUsuario = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]*$/g.test(valueNombreUsuario);
  
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
      const onliLetContrasena = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]*$/g.test(valueContrasena);
  
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

    const registrarUsuario = (val) =>{
      Swal.fire({
        title: 'Guardar Usuarios',
        text: "¿Desea guardar al usuario en el sistema?",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Usuario guardado!', '', 'success')
          Axios.post("http://localhost:3001/create", {
            rut:Rut,
            nombre:nombre,
            apellido: Apellido,
            telefono: Telefono,
            direccion: Direccion,
            nombreUsuario: NombreUsuario,
            email: Email,
            contrasena: Contrasena,
            privilegio: 3
        }).then(()=>{
          console.log("Usuario registrado");
          
        });
        navigate("/");
        } else if (result.isDenied) {
          Swal.fire('Operación cancelada', '', 'info')
        }
      })
    }

    return (
      
        <div>
        <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">
        <div className="px-5 ms-xl-4">
          <br></br>
          <img src="dist/img/SAP.png" style={{width: '100px', height: '100px'}}/>
          <span className="h1 fw-bold mb-0"></span>
        </div>
        <br></br>
        <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1, marginLeft: '100px'}}>Registrar Usuario</h3>
        <br></br>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
        <form className="form-neon" autoComplete="off">
      <fieldset>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">RUT</label>
                <input onChange={cambiarRut} 
                type="text" className="form-control" name="usuario_rut_reg" id="usuario_dni" maxLength={12}
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
                <input onChange={cambiarNombre}
                  type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
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
                <input onChange={cambiarApellido}
                  type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
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
                <input onChange={cambiarTelefono}
                  type="text" pattern="[0-9()+]{8,20}" className="form-control" name="usuario_telefono_reg" id="usuario_telefono" maxLength={20} 
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
                <input onChange={cambiarDireccion}
                 type="text" pattern="[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}" className="form-control" name="usuario_direccion_reg" id="usuario_direccion" maxLength={190}
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
      <fieldset>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_usuario" className="bmd-label-floating">Nombre de usuario</label>
                <input onChange={cambiarNombreUsuario}
                  type="text" pattern="[a-zA-Z0-9]{1,35}" className="form-control" name="usuario_usuario_reg" id="usuario_usuario" maxLength={35}      
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
                <input onChange={cambiarEmail}
                  type="email" className="form-control" name="usuario_email_reg" id="usuario_email" maxLength={70}
                />
                {
                  (errorEmail === 1) && (
                    <p style={{color: 'red'}}>Ejemplo: pompeya@gmail.com</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_clave_1" className="bmd-label-floating">Contraseña</label>
                <input onChange={cambiarContrasena}
                  type="password" className="form-control" name="usuario_clave_1_reg" id="usuario_clave_1" pattern="[a-zA-Z0-9$@.-]{7,100}" maxLength={100} 
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
      <br />
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button 
        disabled={errorRut===1 || errorNombre===1 || errorApellido===1 || errorTelefono===1
          || errorDireccion===1 || errorEmail===1 || errorUsuario===1 || errorContrasena===1} 
        type='button' onClick={registrarUsuario} className="btn btn-raised btn-info btn-sm" ><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
        </div>
      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" classname="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left', width: '600px', height: '570px'}} />
      </div>
    </div>
  </div>
</section>

  </div>
    );
}
  

