import axios from "axios";
import React, {  useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from "../Header";
import NavBar from "../NavBar";
import Swal from 'sweetalert2';

export default function ActualizarContrato () {
  
  let navigate = useNavigate();

  const { id_contrato } = useParams();

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

  useEffect(() => {
    axios.get('http://localhost:3001/editContrato/'+id_contrato)
    .then(res => {
      setDescripcion(res.data[0].descripcion_contrato)
      setPlazo(res.data[0].plazo_contrato)
      setValor(res.data[0].precio_contrato)
      setTcontrato(res.data[0].id_tipo_contrato)
      setSala(res.data[0].id_sala)
      setArtista(res.data[0].id_usuario)
    })
    .catch(err => console.log(err));
  }, [])

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

    const updateContrato = (e) =>{
      Swal.fire({
        title: 'Actualizar Contrato',
        text: "¿Desea actualizar el contrato en el sistema?",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Contrato actualizado!', '', 'success')
          axios.put('http://localhost:3001/updateContrato/'+id_contrato, {
          descripcion_contrato:descripcion,
          plazo_contrato:plazo,
          precio_contrato:valor,
          id_tipo_contrato:tcontrato,
          id_sala:sala,
          id_usuario:artista
        }).then(()=>{
          console.log("Tipo de contrato registrado");
          
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR CONTRATO
    </h3>
    <p className="text-justify">
      Actualiza contratos de los artistas.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoContrato"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO CONTRATO</Link>
      </li>
      <li>
        <Link to="/ListarContrato"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CONTRATOS</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

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
                defaultValue={descripcion}
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
                <input type="date" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20} 
                defaultValue={plazo}
                onChange={(e)=>setPlazo(e.target.value)} />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="form-group">
              <label htmlFor="usuario_clave_2" className="bmd-label-floating">Precio del Contrato $</label>
                <input type="number" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20} 
                defaultValue={valor}
                onChange={cambiarValor} 
                />
                {
                  (errorValor === 1) && (
                    <p style={{color: 'red'}}>Solo números</p>
                  )
                }
              </div>
            </div>
          </div>
      
      <p className="text-center" style={{marginTop: 40}}>
        <button disabled={errorDescripcion===1 || errorValor===1 } type="button" onClick={updateContrato} className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }

