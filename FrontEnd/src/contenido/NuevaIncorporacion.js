import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default function NuevaIncorporacion () {

  const[vincorporacion,setVincorporacion]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const incorporacion={vincorporacion,descripcion}
    console.log(incorporacion)
    fetch("http://localhost:8080/Incorporacion",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(incorporacion)

    }).then(()=>{
      console.log("Incorporacion añadida")
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVA INCORPORACIÓN
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevaIncorporacion"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA INCORPORACIÓN</Link>
      </li>
      <li>
        <Link to="/ListarIncorporaciones"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE INCORPORACIONES</Link>
      </li>
      <li>
        <Link to="/BuscarIncorporacion"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR INCORPORACIÓN</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Incorporación</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Descripción</label>
                <input type="text" onChange={(e)=>setDescripcion(e.target.value)} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} />
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Valor Incorporación $</label>
                <input type="number" onChange={(e)=>setVincorporacion(e.target.value)} className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} />
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <br /><br /><br />
      <fieldset>
        <legend><i className="fas fa-medal" /> &nbsp; información Artista a Incorporar</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg">
                  <option value selected disabled>Seleccione un Artista</option>
                  <option value={1}>Artista 1</option>
                  <option value={2}>Artista 2</option>
                  <option value={3}>Artista 3</option>
                </select>
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
