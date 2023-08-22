import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function NuevoTipoVenta () {

  const navigate = useNavigate();
  const[ntipoventa,setNtipoventa]= useState('')
  const[descripcion,setDescripcion]= useState('')

  const guardarTipoVenta = (val) =>{
    Swal.fire({
      title: 'Guardar Tipo de Venta',
      text: "¿Desea guardar el tipo de venta en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tipo de Venta guardado!', '', 'success')
        Axios.post("http://localhost:3001/tventa", {
        nombre_tipo_venta:ntipoventa,
        descripcion_tipo_venta:descripcion
      }).then(()=>{
        console.log("Tipo de venta registrado");
        
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVO TIPO VENTA
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoTipoVenta"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO VENTA</Link>
      </li>
      <li>
        <Link to="/ListarTipoVentas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO VENTAS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoVenta"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO VENTA</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo Venta</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo Venta</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                onChange={(e)=>setNtipoventa(e.target.value)}/>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35}
                onChange={(e)=>setDescripcion(e.target.value)} />
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button type="button" onClick={guardarTipoVenta} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }

