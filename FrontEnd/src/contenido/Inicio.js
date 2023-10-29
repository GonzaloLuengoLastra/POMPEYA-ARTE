import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import NavBarInicio from '../NavBarInicio';
import axios from "axios";

export default function Inicio() {

  const [producto,setProducto] = useState([]);
  
    const getProducto = async() => {
      const res = await axios.get("http://localhost:3001/productoVenta",{
        headers:{
            "Content-Type":"application/json"
        }
      });
      setProducto(res.data)
      console.log(res.data)
    }
  
    useEffect(()=>{
      getProducto()
    }, [])
    return (
      <div>
  <NavBarInicio/>
  <section className="latest-product">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2>GALERÍA DE ARTES POMPEYA</h2>
            <br></br>
            <p><span style={{color: 'orange'}}>GALERÍA DE ARTES POMPEYA</span>, es un sitio virtual que implementa la tecnología de la realidad virtual beneficiando de manera extraordinaria a artistas que desean difundir sus obras, asimismo permite al visitante sentirse inmerso en el espacio donde se exhiben pinturas, esculturas y fotografías entre otros.
Desarrollada en el año 2023 y abierta a la diversidad de lenguajes artísticos, tiene el propósito de continuar impulsando el arte contemporáneo.
</p>
            <img src="dist/img/bar.jpg" alt />
          </div>
        </div>
      </div>
      </div>
    </section>
  <section className="header-feahion">
    <img src="dist/img/escultura18.jpg" alt />
  </section>
  <section className="product-s-display">
    <div className="container">
      <div className="row">
        
        <div className="col-md-4">
          <div className="s_display">
            <img className='imagen_intermedia' src="dist/img/escultura2.jpg" alt />
            <h2>ESCULTURA</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="s_display">
            <img className='imagen_intermedia' src="dist/img/escultura4.jpg" alt />
            <h2>FOTOGRAFÍA</h2>

          </div>
        </div>
        <div className="col-md-4">
          <div className="s_display">
            <img className='imagen_intermedia' src="dist/img/escultura11.jpg" alt />
            <h2>PINTURA</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="related-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2 id="section1">OBRAS DE ARTE PARA TI</h2>
            <img alt src="dist/img/bar.jpg" />
          </div>
        </div>
      </div>

      <h3>SALA VIP</h3>
      <div className="product">
        <div className="row">
        {
        producto.length > 0 ?  producto.map((el, i) => {
          if(el.nombre_sala == "VIP" && el.estado_producto == "Disponible"){   
          return (
            <> 
          <div className="col-md-3">
            <div className="s_product">
              <img className='imagen_intermedia' alt src={`http://localhost:3001/uploads/${el.imagen_producto}`} />
              <div className="s_overlay" />
              <h3>{el.nombre_categoria}</h3>
              <h4><Link className="color" to={`/ProductoUnico/${el.id_producto}`} aria-hidden="true"><i className="fa fa-cart-arrow-down" />VER PRODUCTO</Link></h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rate">
                  <h3>{el.nombre_producto}</h3>
                  <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                  <h5><span>$</span>{el.cantida_precio}</h5>
                </div>
              </div>
            </div>
          </div>
          </>
          
          )
          }
          }):""
        } 
        </div> 
      </div>

      <h3>SALA PREMIUM</h3>
      <div className="product">
        <div className="row">
        {
        producto.length > 0 ?  producto.map((el, i) => {
          if(el.nombre_sala == "PREMIUM" && el.estado_producto == "Disponible"){   
          return (
            <> 
          <div className="col-md-3">
            <div className="s_product">
              <img className='imagen_intermedia' alt src={`http://localhost:3001/uploads/${el.imagen_producto}`} />
              <div className="s_overlay" />
              <h3>{el.nombre_categoria}</h3>
              <h4><Link className="color" to={`/ProductoUnico/${el.id_producto}`} aria-hidden="true"><i className="fa fa-cart-arrow-down" />VER PRODUCTO</Link></h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rate">
                  <h3>{el.nombre_producto}</h3>
                  <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                  <h5><span>$</span>{el.cantida_precio}</h5>
                </div>
              </div>
            </div>
          </div> 
          </>
          
          )
          }
          }):""
        }
        </div> 
      </div>
      
        <h3>SALA GLAM</h3>
      <div className="product">
        <div className="row">
        {
        producto.length > 0 ?  producto.map((el, i) => {
          if(el.nombre_sala == "NORMAL" && el.estado_producto == "Disponible"){   
          return (
            <> 
          <div className="col-md-3">
            <div className="s_product">
              <img className='imagen_intermedia' alt src={`http://localhost:3001/uploads/${el.imagen_producto}`} />
              <div className="s_overlay" />
              <h3>{el.nombre_categoria}</h3>
              <h4><Link className="color" to={`/ProductoUnico/${el.id_producto}`} aria-hidden="true"><i className="fa fa-cart-arrow-down" />VER PRODUCTO</Link></h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rate">
                  <h3>{el.nombre_producto}</h3>
                  <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                  <h5><span>$</span>{el.cantida_precio}</h5>
                </div>
              </div>
            </div>
          </div>
          </>
      )
      }
      }):""
      } 
        </div> 
      </div>
      
    </div>
  </div>
  <section className="season">
    <img src="dist/img/escultura10.jpg" alt />
    <div className="ovearlay" />
    <div className="text">
      <h2>PRÓXIMAMENTE EXPOSICIÓN </h2>
      <h3>Galería de Artes Premium - 21/12/2023 </h3>
    </div>
  </section>
  <section className="latest-product">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2 id="section2">Artistas Activos</h2>
            <img src="dist/img/bar.jpg" alt />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/tema1.jpg" alt />
            <Link to="dist/img/tema1.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></Link>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Javiera Paz Bertucci</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                <h5>Concepción</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/tema2.jpg" alt />
            <Link to="dist/img/tema2.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></Link>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Joseph Altamirano Henriquez</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                <h5>Viña del Mar</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/tema3.jpg" alt />
            <Link to="dist/img/tema3.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></Link>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Sarah Michelle Gelard</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></p>
                <h5>Valparaiso</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/tema4.jpg" alt />
            <Link to="dist/img/tema4.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></Link>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Victorino Picasso Vicencio</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></p>
                <h5>Temuco</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="t-shart-brand">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="t_shart">
            <div className="row">
              <div className="col-md-5">
                <div className="t_shart_img">
                  <img src="dist/img/escultura7.jpg" alt style={{widows: '200px', height: '200px'}}/>
                </div>
              </div>
              <div className="col-md-7">
                <div className="t_shart_text">
                  <h2>Nuevos lanzamientos esculturas</h2>
                  <a href="#section1"><p>Ver más</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="t_shart">
            <div className="row">
              <div className="col-md-5">
                <div className="t_shart_img">
                  <img src="dist/img/escultura6.jpg" alt style={{widows: '200px', height: '200px'}}/>
                </div>
              </div>
              <div className="col-md-7">
                <div className="t_shart_text">
                  <h2>Nuevos lanzamientos Pinturas</h2>
                  <a href="#section1"><p>Ver más</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="t_shart">
            <div className="row">
              <div className="col-md-5">
                <div className="t_shart_img">
                  <img src="dist/img/obradearte5.jpg"  alt style={{widows: '200px', height: '200px'}}/>
                </div>
              </div>
              <div className="col-md-7">
                <div className="t_shart_text">
                  <h2>Nuevos lanzamientos Fotografías</h2>
                  <a href="#section1"><p>Ver más</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="best-seller">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2>CONVOCATORIA 2024</h2>
            <img alt src="dist/img/bar.jpg" />
          </div>
        </div>
      </div>
      <h4 style={{textAlign: 'center'}}>Bandeja de entrada 2024</h4>
      <br></br>
      <p>Invitamos a nuestros potenciales artistas de la fotografía, a presentar
        toda su creatividad al concurso <span style={{color: 'orange'}}>"SIN FILTRO" </span> a realizarse el dia 18 de Noviembre
      del 2024. Los ganadores serán acreedores de portar una mensualidad de incorporación a nuestras
      plataformas. 
      </p>
      <br></br>
      <p style={{textAlign: 'center'}}>Enviamos tus trabajos a nuestra bandeja de entrada. ¡TE ESPERAMOS!</p>
    </div>
  </section>
  <section className="fashion">
    <div className="f-overlay" />
    <img src="dist/img/escultura16.jpg" alt />
    <h2 style={{marginTop: '100px'}}>VIVE LA CULTURA</h2>
  </section>
  <footer>
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 id="section3">INFORMACIÓN</h2>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Políticas de privacidad</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Políticas de envío</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Políticas de devolución</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Términos y Servicios</p></a>
          </div>
          <div className="col-md-4">
            <h2>NUESTRO SITIO</h2>
            <a href="/Login"><p><i className="fa fa-circle" aria-hidden="true" />Iniciar Sesión</p></a>
            <a href="/"><p><i className="fa fa-circle" aria-hidden="true" />Regístrate</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Síguenos en RRSS</p></a>
            <a href="#section1"><p><i className="fa fa-circle" aria-hidden="true" />Productos</p></a>
          </div>
          <div className="col-md-4">
            <div className="footer-contact">
              <h2>CONTÁCTANOS</h2>
              <a href="#"><p><i className="fa fa-map-marker" aria-hidden="true" />Chile , Linares</p></a>
              <a href="#"><p><i className="fa fa-phone" aria-hidden="true" />+569 30307020</p></a>
              <a href="#"><p><i className="fa fa-envelope" aria-hidden="true" />Galería_pompeya@gmail.com</p></a>
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
              <p>Copyright © 2023 Diseñado por <span>GONZALE.CL</span></p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="footer_logo">
              <img src="dist/img/facebook.png" />
              <img src="dist/img/instagram.png" />
              <img src="dist/img/pinterest.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>


    );
  }
