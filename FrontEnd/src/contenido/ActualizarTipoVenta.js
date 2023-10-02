import axios from "axios";
import React, {  useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

export default function ActualizarTipoVenta () {
 
  let navigate = useNavigate();

  const { id_tipo_venta } = useParams();

  const[ntipoventa,setNtipoventa]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const {register, formState:{errors}, handleSubmit} = useForm();


  useEffect(() => {
    axios.get('http://localhost:3001/editTipoVenta/'+id_tipo_venta)
    .then(res => {
      setNtipoventa(res.data[0].nombre_tipo_venta)
      setDescripcion(res.data[0].descripcion_tipo_venta)
    })
    .catch(err => console.log(err));
  }, [])

  const updateTipoVenta = (e) =>{
    Swal.fire({
      title: 'Actualizar Tipo de Venta',
      text: "¿Desea actualizar el tipo de venta en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tipo de Venta actualizado!', '', 'success')
        axios.put('http://localhost:3001/updateTipoVenta/'+id_tipo_venta, {
        nombre_tipo_venta:ntipoventa,
        descripcion_tipo_venta:descripcion
      }).then(()=>{
        console.log("Tipo de contrato registrado");
        
      });
      navigate("/ListarTipoVentas");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR TIPO VENTA
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoTipoVenta"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO VENTA</Link>
      </li>
      <li>
        <Link to="/ListarTipoVentas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO VENTAS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoVenta"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO VENTA</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form onSubmit={handleSubmit(updateTipoVenta)} action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo Venta</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo Venta</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                defaultValue={ntipoventa}
                onChange={(e)=>setNtipoventa(e.target.value)} 
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
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35}
                defaultValue={descripcion}
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
      <p className="text-center" style={{marginTop: 40}}>
        <button className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }

