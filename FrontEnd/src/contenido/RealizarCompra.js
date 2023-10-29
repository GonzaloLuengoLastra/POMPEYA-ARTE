import React, {  useEffect, useState } from 'react';
import NavBarInicio from '../NavBarInicio';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

export default function RealizarCompra() {

    const { id_producto } = useParams();
    const navigate = useNavigate();
    const[precio,setPrecio]=React.useState('')
    const[ganancia,setGanancia]=React.useState('')
    const[tp,settp]=React.useState('')

    const [loginStatus, setLoginStatus] = useState('');
    const [privilegio, setPrivilegio] = useState();
    const [id, setId] = useState();
  
    useEffect(() => {
      axios.get("http://localhost:3001/login").then((response)=>{
        setLoginStatus(response.data.user[0].nombreUsuario);
        setPrivilegio(response.data.user[0].privilegio)
        setId(response.data.user[0].id_usuario)
      })
    }, [])
  
    const [producto,setProducto] = useState([]);
    
    const[tipoPago,setTipoPago]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3001/getTPago")
    .then(res=>res.json())
    .then((result)=>{
      setTipoPago(result);
    }
  )
  },[])

  const comprar = (val) =>{
    Swal.fire({
      title: 'Realizar Compra',
      text: "¿Desea realizar la compra en el sistema?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Compra guardada!', '', 'success')
        axios.post("http://localhost:3001/guardarVenta", {
          precio_venta: precio-((precio*30)/100),
          ganancia_venta: (precio*30)/100,
          id_producto: id_producto,
          id_tipo_pago: tp,
          id_usuario: id,
          IVA: (precio*19)/100
      }).then(()=>{
        console.log("Compra registrada");
        
      });
      navigate("/");
      axios.put("http://localhost:3001/updateEstado/"+id_producto,{
        estado_producto: "No Disponible"
      })
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
  }




    const getProducto = async() => {
      const res = await axios.get("http://localhost:3001/verProducto/"+id_producto,{
        headers:{
            "Content-Type":"application/json"
        }
      });
      setProducto(res.data)
      console.log(res)
    }
  
    useEffect(()=>{
      getProducto()
    }, [])  

  return (
    <div>
        <NavBarInicio/>
  <section className="stylish-product">
  {
        producto.length > 0 ?  producto.map((el, i) => { 
          return (
            <> 
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="single-product-slider">
            <img src={`http://localhost:3001/uploads/${el.imagen_producto}`} alt style={{width: '400px', height: '400px'}}/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="single-product-text" >
          <legend><i className="far fa-address-card" /> &nbsp; Información de la Compra</legend>
          <label htmlFor="usuario_nombre" className="bmd-label-floating">Precio</label>
            <input type="number" defaultValue={el.cantida_precio} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="nombre" id="usuario_nombre" maxLength={35}
                onChange={(e)=>setPrecio(e.target.value)}/>
                <br></br>
        <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre del Producto</label>
            <input type="text" defaultValue={el.nombre_producto} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="nombre" id="usuario_nombre" maxLength={35} disabled
                />
                <br></br>
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Artista</label>
            <input type="text" defaultValue={el.nombre+' '+el.apellido} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="nombre" id="usuario_nombre" maxLength={35} disabled
                />
              <br></br>
              <label  htmlFor="usuario_nombre" className="bmd-label-floating">Tipo Venta</label>
                <select className="form-control" name="producto" onChange={(e)=>settp(e.target.value)}>
                  <option value selected disabled>Seleccione el Producto</option>
                  {tipoPago.map(tpppa=>(
                  <option>{tpppa.id_tipo_pago}</option>
                  ))
                  }
                </select>
              <br></br>

<button type='button' onClick={comprar} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
    </>
          
          )
          }):""
        } 
  </section>
  <br></br>
  <footer>
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>INFORMATION</h2>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
          </div>
          <div className="col-md-4 center">
            <h2>INFORMATION</h2>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
          </div>
          <div className="col-md-4">
            <div className="footer-contact">
              <h2>CONTACT US</h2>
              <a href="#"><p><i className="fa fa-map-marker" aria-hidden="true" />Rangpur , Bangladesh</p></a>
              <a href="#"><p><i className="fa fa-phone" aria-hidden="true" />+88 01761070282</p></a>
              <a href="#"><p><i className="fa fa-envelope" aria-hidden="true" />sshahriar458@gmail.com</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bottom">
      <div className="footer_overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="copy_txt">
              <p>Copyright © 2014  Designed by <span>shawon</span></p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="footer_logo">
              <img src="dist/img/fedex.png" />
              <img src="dist/img/master-card.png" />
              <img src="dist/img/paypal.png" />
              <img src="dist/img/visa.png" />
              <img src="dist/img/american-express.png" />
              <img src="dist/img/dhl.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer></div>
  );
}


