import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Axios from "axios";
import Swal from 'sweetalert2';

export default function NuevoContrato () {

  const navigate = useNavigate();
    const[descripcion,setDescripcion]= useState('')
    const[tcontrato,setTcontrato]= useState('')
    const[sala,setSala]= useState('')
    const[plazo,setPlazo]= useState()
    const[valor,setValor]= useState('')
    const[artista,setArtista]= useState('')

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

      setValor(valueValor);
    }
    
    const[usuario,setUsuario]= useState([])
    useEffect(()=>{
      fetch("http://localhost:3001/usuarios")
      .then(res=>res.json())
      .then((result)=>{
        setUsuario(result);
      }
    )
    },[])
    
    const[ssala,setSsala]=useState([])
    useEffect(()=>{
      fetch("http://localhost:3001/getSalas")
      .then(res=>res.json())
      .then((result)=>{
        setSsala(result);
      }
    )
    },[])

    const[ttipo,setTtipo]=useState([])
    useEffect(()=>{
      fetch("http://localhost:3001/getTContrato")
      .then(res=>res.json())
      .then((result)=>{
        setTtipo(result);
      }
    )
    },[])

    const guardarContrato = (val) =>{
          Swal.fire({
            title: 'Guardar Contrato',
            text: "¿Desea guardar el contrato en el sistema?",
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Contrato guardado!', '', 'success')
              Axios.post("http://localhost:3001/Contrato", {
                descripcion_contrato: descripcion,
                plazo_contrato: plazo,
                precio_contrato: valor,
                id_tipo_contrato: tcontrato,
                id_sala: sala,
                id_usuario: artista
            }).then(()=>{
              console.log("Contrato registrado");
              
            });
            navigate("/ListarContrato");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVO CONTRATO
    </h3>
    <p className="text-justify">
    Ingresar nuevo contrato para artista.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoContrato"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO CONTRATO</Link>
      </li>
      <li>
        <Link to="/ListarContrato"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CONTRATOS</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Contrato</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">Descripción</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20}
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
    
      
          <div className="row">
            
            <div className="col-4">
            
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setTcontrato(e.target.value)}>
                  <option value selected disabled>Seleccionar Tipo Contrato</option>
                  {ttipo.map(tipoo=>(
                  <option>{tipoo.id_tipo_contrato}</option>
                  ))
              } 
                </select>
                
              </div>
            </div>
              
            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setSala(e.target.value)}>
                  <option value selected disabled>Seleccionar Sala</option>
                  {ssala.map(ssalas=>(
                  <option>{ssalas.id_sala}</option>
                  ))
                }  
                </select>
              </div>
            </div>

            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setArtista(e.target.value)}>
                  <option value selected disabled>Seleccionar Artista</option>
                  {usuario.map(usuario=>(
                  <option>{usuario.id_usuario}</option>
                  ))
                  }  
                </select>
              </div>
            </div>
          <br/><br/><br/><br/>
            <div className="col-12 col-md-4">
              <div className="form-group">
              <label htmlFor="usuario_clave_2" className="bmd-label-floating">Plazo del Contrato</label>
                <input type="date" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20} 
                onChange={(e)=>setPlazo(e.target.value)} />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="form-group">
              <label htmlFor="usuario_clave_2" className="bmd-label-floating">Precio del Contrato $</label>
                <input type="text" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20} 
                onChange={cambiarValor} />
                {
                  (errorValor === 1) && (
                    <p style={{color: 'red'}}>Solo números</p>
                  )
                }
              </div>
            </div>
          </div>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button disabled={errorDescripcion===1 || errorValor===1 }
         type="button" onClick={guardarContrato} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }

