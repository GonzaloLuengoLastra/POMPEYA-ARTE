import * as React from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function NuevoProducto() {
  const[nombres,setNombre]=React.useState('')
  const[sala,setSala]=React.useState('')
  const[artista,setArtista]=React.useState('')
  const[fecha, setFecha]=React.useState('')
  const[categoria,setCategoria]=React.useState('')
  const[precio,setPrecio]=React.useState('')
  const[file,setFile]=React.useState("")
  const navigate = useNavigate();

  const[usuario,setUsuario]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3001/usuarios")
    .then(res=>res.json())
    .then((result)=>{
      setUsuario(result);
    }
  )
  },[])

  const[precioo,setPPrecio]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3001/getPrecios")
    .then(res=>res.json())
    .then((result)=>{
      setPPrecio(result);
    }
  )
  },[])

  const[cate,setCate]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3001/getCategorias")
    .then(res=>res.json())
    .then((result)=>{
      setCate(result);
    }
  )
  },[])

  const[ssala,setSsala]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3001/getSalas")
    .then(res=>res.json())
    .then((result)=>{
      setSsala(result);
    }
  )
  },[])

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  const addUserData = async(e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("nombre", nombres)
    formdata.append("fecha", fecha)
    formdata.append("photo", file)
    formdata.append("artista", artista)
    formdata.append("categoria", categoria)
    formdata.append("precio", precio)
    formdata.append("sala", sala);

    const config = {
      headers:{
          "Content-Type":"multipart/form-data"
      }
    }

    const res = await axios.post("http://localhost:3001/registrarProducto", formdata, config)
    Swal.fire('Producto guardado!', '', 'success')
    navigate("/ListarProductos")

    if(res.data.status == 201){
      navigate("/ListarProductos")
    }else{
      console.log("error")
    }
  }

  /*const guardarProducto = (val) =>{
    Swal.fire({
      title: 'Guardar Producto',
      text: "¿Desea guardar el producto en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below 
      if (result.isConfirmed) {

        const formdata = new FormData()
        formdata.append('image', pintura)

        Swal.fire('Producto guardado!', '', 'success')
        axios.post("http://localhost:3001/guardarProducto/post", {
          nombre_producto: nombres,
          fecha_producto: fecha,
          imagen_producto: formdata,
          id_usuario: artista,
          id_categoria: categoria,
          id_precio: precio,
          id_sala: sala
      }).then(()=>{
        console.log("Contrato registrado");
        
      });
      navigate("/ListarProductos");
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
  }
  */
    return (
      <div>
        <Header/>
      <NavBar/>
      
        <div class="content-wrapper">
        {/* Page content */}
        <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVO PRODUCTO
    </h3>
    <p className="text-justify">
    Ingresar nuevo producto a sala de exhibición.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoProducto"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRODUCTO</Link>
      </li>
      <li>
        <Link to="/ListarProductos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRODUCTOS</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form className="form-neon" autoComplete="off" enctype="multipart/form-data">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Producto</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombres</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="nombre" id="usuario_nombre" maxLength={35}
                onChange={(e)=>setNombre(e.target.value)} 
              />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Año Creación</label>
                <input type="date" pattern="" className="form-control" name="fecha" id="usuario_apellido" maxLength={35} 
                onChange={(e)=>setFecha(e.target.value)}/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_direccion" className="bmd-label-floating">Pintura</label>
                <input type="file" onChange={setimgfile} pattern="" className="form-control" name="photo" id="usuario_apellido" maxLength={35} 
                />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Artista</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="artista" onChange={(e)=>setArtista(e.target.value)}>
                  <option value selected disabled>Seleccione al Artista</option>
                  {usuario.map(contratos=>(
                  <option>{contratos.id_usuario}</option>
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
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Categoría</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="categoria" onChange={(e)=>setCategoria(e.target.value)}>
                  <option value selected disabled>Seleccione una categoría</option>
                  {cate.map(catee=>(
                  <option>{catee.id_categoria}</option>
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
        <legend><i className="far fa-address-card" /> &nbsp; Información del Precio</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="form-group">
                <select className="form-control" name="precio" onChange={(e)=>setPrecio(e.target.value)}>
                  <option value selected disabled>Seleccione un Precio</option>
                  {precioo.map(ptr=>(
                  <option>{ptr.id_precio}</option>
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
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Sala</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="form-group">
                <select className="form-control" name="sala" onChange={(e)=>setSala(e.target.value)}>
                  <option value selected disabled>Seleccione una Sala de Exhibición</option>
                  {ssala.map(ssalas=>(
                  <option>{ssalas.id_sala}</option>
                  ))
                }
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br></br>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button type='submit' onClick={addUserData} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
}
