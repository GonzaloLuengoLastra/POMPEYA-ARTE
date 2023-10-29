import React, {  useEffect, useState } from 'react';
import NavBarInicio from '../NavBarInicio';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

export default function ProductoUnico() {

    const { id_producto } = useParams();
  
    const [producto,setProducto] = useState([]);




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
            <>z 
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="single-product-slider">
            <img src={`http://localhost:3001/uploads/${el.imagen_producto}`} alt />
          </div>
          <div className="small-slider">
            <img src={`http://localhost:3001/uploads/${el.imagen_producto}`} alt style={{width: '100px', height: '100px', marginRight: '10px'}} />
            <img src={`http://localhost:3001/uploads/${el.imagen_producto}`} alt style={{width: '100px', height: '100px', marginRight: '10px'}}/>
            <img src={`http://localhost:3001/uploads/${el.imagen_producto}`} alt style={{width: '100px', height: '100px'}}/>
          </div>
        </div>
        <div className="col-md-7">
          <div className="single-product-text" >
            <h1>{el.nombre_producto}</h1>
            <h2>$ {el.cantida_precio}</h2>
            <Link to={`/RealizarCompra/${el.id_producto}`} className="btn btn-success">
              COMPRAR
              </Link>
          </div>
        </div>
      </div>
    </div>
    </>
          
          )
          }):""
        } 
    <div className="product_description">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2><span className="description">Description</span><span className="review">Reviews(0)</span></h2>
            <h3>Product Description</h3>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem  is simply dummy text of the printing and typesetting industry. </p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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

