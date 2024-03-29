import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Axios from "axios";
import Swal from 'sweetalert2';

export default function NuevaIncorporacion () {
  const navigate = useNavigate();
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


  const[usuario,setUsuario]= React.useState([])
    React.useEffect(()=>{
      fetch("http://localhost:3001/usuarios")
      .then(res=>res.json())
      .then((result)=>{
        setUsuario(result);
      }
    )
    },[])

    const guardarIncor = (val) =>{
      Swal.fire({
        title: 'Guardar Incorporación',
        text: "¿Desea guardar la incorporación en el sistema?",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Incorporación guardada!', '', 'success')
          Axios.post("http://localhost:3001/incor", {
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVA INCORPORACIÓN
    </h3>
    <p className="text-justify">
      Ingresar nueva incorporación de artista.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevaIncorporacion"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA INCORPORACIÓN</Link>
      </li>
      <li>
        <Link to="/ListarIncorporaciones"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE INCORPORACIONES</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Incorporación</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Descripción</label>
                <input type="text" onChange={cambiarDescripcion} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                />
                {
                  (errorDescripcion === 1) && (
                    <p style={{color: 'red'}}>Carácter no permitido</p>
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Valor Incorporación $</label>
                <input type="text" onChange={cambiarValor} className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
                />
                {
                  (errorValor === 1) && (
                    <p style={{color: 'red'}}>Solo números</p>
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
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button disabled={errorDescripcion===1 || errorValor===1 }
         type='button' onClick={guardarIncor} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }
