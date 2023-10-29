import axios from "axios";
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ActualizarPrecio () {

  let navigate = useNavigate();

  const { id_precio } = useParams();

  const[valor,setValor]=React.useState('')
  const[valorError,setValorError]=React.useState(0)

  const cambiarPrecio = (e) => {
    const value = e.target.value;
    const onliLet = /^[0-9]*$/g.test(value);
    console.log("Solo numeros", onliLet)

    if(onliLet === false){
      setValorError(1);
    }
    if(onliLet === true){
      setValorError(0);
    }
    setValor(value);
  }

  useEffect(() => {
    axios.get('http://localhost:3001/editPrecio/'+id_precio)
    .then(res => {
      setValor(res.data[0].cantida_precio)
    })
    .catch(err => console.log(err));
  }, [])

  const updatePrecio = (e) =>{
    Swal.fire({
      title: 'Actualizar Precio',
      text: "¿Desea actualizar el precio en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Precio actualizado!', '', 'success')
        axios.put('http://localhost:3001/updatePrecio/'+id_precio, {
        cantida_precio:valor
      }).then(()=>{
        console.log("Tipo de contrato registrado");
        
      });
      navigate("/ListarPrecios");
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR PRECIO
    </h3>
    <p className="text-justify">
    Actualiza precios de las obras de arte.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoPrecio"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRECIO</Link>
      </li>
      <li>
        <Link to="/ListarPrecios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRECIOS</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Precio</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Precio $</label>
                <input type="number" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                defaultValue={valor}
                onChange={cambiarPrecio}
                /> 
                {
                  (valorError === 1) && (
                    <p style={{color: 'red'}}>Solo números</p>
                  )
                }
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button disabled={valorError===1} type="button" onClick={updatePrecio} className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }

