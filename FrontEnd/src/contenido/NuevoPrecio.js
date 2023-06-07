import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default function NuevoPrecio () {

  const[valor,setValor]=React.useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const precio={valor}
    console.log(precio)
    fetch("http://localhost:8080/precio",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(precio)

    }).then(()=>{
      console.log("Precio añadido")
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVO PRECIO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link className='active' to="/NuevoPrecio"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRECIO</Link>
      </li>
      <li>
        <Link to="/ListarPrecios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRECIOS</Link>
      </li>
      <li>
        <Link to="/BuscarPrecio"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR PRECIO</Link>
      </li>
    </ul>	
  </div>     
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
                onChange={(e)=>setValor(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button type="submit" onClick={handleClick} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }

