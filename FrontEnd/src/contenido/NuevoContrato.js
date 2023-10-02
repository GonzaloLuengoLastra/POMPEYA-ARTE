import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Axios from "axios";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

export default function NuevoContrato () {

  const navigate = useNavigate();
    const[descripcion,setDescripcion]= useState('')
    const[tcontrato,setTcontrato]= useState('')
    const[sala,setSala]= useState('')
    const[plazo,setPlazo]= useState()
    const[valor,setValor]= useState('')
    const[artista,setArtista]= useState('')

    const {register, formState:{errors}, handleSubmit} = useForm();
    
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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
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
      <li>
        <Link to="/BuscarContrato"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR CONTRATO</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form onSubmit={handleSubmit(guardarContrato)} action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Contrato</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">Descripción</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20}
                onChange={(e)=>setDescripcion(e.target.value)}  
                {...register("direccion",{
                  required:true,
                  pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}/
                })}
                />
                {
                  errors.direccion?.type==="required" && (<span className='errors'>Ingrese una Descripción</span>)
                }
                {
                  errors.direccion?.type==="pattern" && (<span className='errors'>Carácter no permitido</span>)
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
                <input type="number" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20} 
                onChange={(e)=>setValor(e.target.value)} />
              </div>
            </div>
          </div>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }

