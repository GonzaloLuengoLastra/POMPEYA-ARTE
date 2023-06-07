import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default function NuevaCategoria() {

    const[ncategoria,setNcategoria]=React.useState('')
    const[descripcion,setDescripcion]=React.useState('')

    const handleClick=(e)=>{
      e.preventDefault()
      const categoria={ncategoria,descripcion}
      console.log(categoria)
      fetch("http://localhost:8080/categoria",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(categoria)
  
      }).then(()=>{
        console.log("Categoria añadido")
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVA CATEGORÍA
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevaCategoria"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO CATEGORÍA</Link>
      </li>
      <li>
        <Link to="/ListarCategorias"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CATEGORÍAS</Link>
      </li>
      <li>
        <Link to="/BuscarCategoria"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR CATEGORÍA</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Categoría</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Categoría</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
                onChange={(e)=>setNcategoria(e.target.value)} />
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
        <button type="submit" className="btn btn-raised btn-info btn-sm" onClick={handleClick}><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }

