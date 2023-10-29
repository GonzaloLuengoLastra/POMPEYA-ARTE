import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, {  useEffect, useState } from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ActualizarVenta() {
  const navigate = useNavigate();

  const { id_venta } = useParams();
  const[precio,setPrecio]=React.useState('')
  const[ganancia,setGanancia]=React.useState('')
  const[pro,setPro]=React.useState('')
  const[tp,settp]=React.useState('')


  useEffect(() => {
    axios.get('http://localhost:3001/editVenta/'+id_venta)
    .then(res => {
      setPrecio(res.data[0].precio_venta)
      setGanancia(res.data[0].ganancia_venta)
      setPro(res.data[0].id_producto)
      settp(res.data[0].id_tipo_pago)
    })
    .catch(err => console.log(err));
  }, [])

  const[producto,setProducto]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3001/getProductoVenta")
    .then(res=>res.json())
    .then((result)=>{
      setProducto(result);
    }
  )
  },[])

  const[tipoPago,setTipoPago]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3001/getTPago")
    .then(res=>res.json())
    .then((result)=>{
      setTipoPago(result);
    }
  )
  },[])

  const updateVenta = (val) =>{
    Swal.fire({
      title: 'Actualizar Venta',
      text: "¿Desea actualizar la venta en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Venta actualizada!', '', 'success')
        axios.put("http://localhost:3001/updateVenta/"+id_venta, {
          precio_venta: precio,
          ganancia_venta: ganancia, 
          id_producto: pro,
          id_tipo_pago: tp
      }).then(()=>{
        console.log("Venta actualizada");
        
      });
      navigate("/ListarVentas");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR VENTA
    </h3>
    <p className="text-justify">
      Actualiza venta de las obras de arte.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevaVenta"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA VENTA</Link>
      </li>
      <li>
        <Link to="/ListarVentas"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE VENTAS</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form className="form-neon" autoComplete="off" enctype="multipart/form-data">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Venta</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Precio</label>
                <input type="number" defaultValue={precio} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="nombre" id="usuario_nombre" maxLength={35}
                onChange={(e)=>setPrecio(e.target.value)} 
              />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Ganancia</label>
                <input type="number" defaultValue={ganancia} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="nombre" id="usuario_nombre" maxLength={35}
                onChange={(e)=>setGanancia(e.target.value)} 
              ></input>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Producto</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="producto" onChange={(e)=>setPro(e.target.value)}>
                  <option value selected disabled>Seleccione el Producto</option>
                  {producto.map(produc=>(
                  <option>{produc.id_producto}</option>
                  ))
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo de Pago</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="TPago" onChange={(e)=>settp(e.target.value)}>
                  <option value selected disabled>Seleccione una tipo pago</option>
                  {tipoPago.map(tpa=>(
                  <option>{tpa.id_tipo_pago}</option>
                  ))
                }
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button type='button' onClick={updateVenta} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
}

