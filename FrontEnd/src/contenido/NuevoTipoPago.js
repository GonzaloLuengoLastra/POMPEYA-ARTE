import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

export default function NuevoTipoPago () {

  const navigate = useNavigate();
  const[ntipopago,setNtipopago]= useState('')
  const[descripcion,setDescripcion]= useState('')
  const {register, formState:{errors}, handleSubmit} = useForm();

  const guardarTipoPago = (val) =>{
    Swal.fire({
      title: 'Guardar Tipo de Pago',
      text: "¿Desea guardar el tipo de pago en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tipo de Pago guardado!', '', 'success')
        Axios.post("http://localhost:3001/tpago", {
        nombre_tipo_pago:ntipopago,
        descripcion_tipo_pago:descripcion
      }).then(()=>{
        console.log("Tipo de pago registrado");
        
      });
      navigate("/ListarTipoPagos");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVA TIPO PAGO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoTipoPago"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO PAGO</Link>
      </li>
      <li>
        <Link to="/ListarTipoPagos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO PAGOS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoPago"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO PAGO</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form onSubmit={handleSubmit(guardarTipoPago)} action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo Pago</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo de Pago</label>
                <input type="text" onChange={(e)=>setNtipopago(e.target.value)} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
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
                <input type="text" onChange={(e)=>setDescripcion(e.target.value)} className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
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