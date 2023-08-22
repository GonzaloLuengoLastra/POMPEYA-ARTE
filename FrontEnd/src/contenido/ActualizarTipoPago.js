import axios from "axios";
import React, {  useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ActualizarTipoPago () {
  
  let navigate = useNavigate();

  const { id_tipo_pago } = useParams();

  const[ntipopago,setNtipopago]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/editTipoPago/'+id_tipo_pago)
    .then(res => {
      setNtipopago(res.data[0].nombre_tipo_pago);
      setDescripcion(res.data[0].descripcion_tipo_pago)
    })
    .catch(err => console.log(err));
  }, [])

  const updateTipoPago = (e) =>{
    Swal.fire({
      title: 'Actualizar Tipo de Pago',
      text: "¿Desea actualizar el tipo de pago en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tipo de Pago actualizado!', '', 'success')
        axios.put('http://localhost:3001/updateTipoPago/'+id_tipo_pago, {
        nombre_tipo_pago:ntipopago,
        descripcion_tipo_pago:descripcion
      }).then(()=>{
        console.log("Tipo de contrato registrado");
        
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR TIPO PAGO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoTipoPago"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO PAGO</Link>
      </li>
      <li>
        <Link to="/ListarTipoPagos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO PAGOS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoPago"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO PAGO</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo Pago</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo de Pago</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
                defaultValue={ntipopago}
                onChange={(e)=>setNtipopago(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35}
                defaultValue={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="button" onClick={updateTipoPago} className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
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

