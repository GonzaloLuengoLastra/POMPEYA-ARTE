import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import { useState }  from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function NuevoTipoContrato () {

  const navigate = useNavigate();
  const[ntipocontrato,setNtipocontrato]= useState('')
  const[descripcion,setDescripcion]= useState('')

  const[errorNombre,setErrorNombre]=useState(0)
  const[errorDescripcion,setErrorDescripcion]=useState(0)

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

      setNtipocontrato(valueNombre);
    }

  const guardarTipoContrato = (val) =>{
    Swal.fire({
      title: 'Guardar Tipo de contrato',
      text: "¿Desea guardar el tipo de contrato en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tipo de Contrato guardado!', '', 'success')
        Axios.post("http://localhost:3001/tcontrato", {
        nombre_tipo_contrato:ntipocontrato,
        descripcion_tipo_contrato:descripcion
      }).then(()=>{
        console.log("Tipo de contrato registrado");
        
      });
      navigate("/ListarTipoContratos");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVA TIPO CONTRATO
    </h3>
    <p className="text-justify">
    Ingresar nuevo tipo contrato para artista.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoTipoContrato"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO CONTRATO</Link>
      </li>
      <li>
        <Link to="/ListarTipoContratos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO CONTRATOS</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo Contrato</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo de Contrato</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
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
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button disabled={errorDescripcion===1 || errorNombre===1 } type='button' onClick={guardarTipoContrato} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }
