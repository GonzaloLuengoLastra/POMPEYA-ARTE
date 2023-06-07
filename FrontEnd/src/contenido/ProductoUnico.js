import React, { Component } from 'react';
import NavBarInicio from '../NavBarInicio';

export default class productoUnico extends Component {
  render() {
    return (
     <div>
        <NavBarInicio/>
  <section className="stylish-product">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="single-product-slider">
            <img src="dist/img/single-product-slider.jpg" alt />
          </div>
          <div className="small-slider">
            <img src="dist/img/small-slider.jpg" alt />
            <img src="dist/img/small-slider.jpg" alt />
            <img src="dist/img/small-slider.jpg" alt />
          </div>
        </div>
        <div className="col-md-7 margen">
          <div className="single-product-text" >
            <h1>Stylish T-shart</h1>
            <h2>$40.00</h2>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />COMPRAR</p></a>
          </div>
        </div>
      </div>
    </div>
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
    <div className="related-products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bar">
              <h2>Related Products</h2>
              <img src="dist/img/bar.jpg" alt />
            </div>
          </div>
        </div>
        <div className="product">
          <div className="row">
            <div className="col-md-3">
              <div className="s_product">
                <img src="dist/img/t-shart.jpg" alt />
                <div className="s_overlay" />
                <h2>SALE!</h2>
                <h3>T-SHIRT</h3>
                <h4><i className="fa fa-cart-arrow-down" aria-hidden="true" />ADD TO CART</h4>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="rate">
                    <h3>Pocket Tee</h3>
                    <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                    <h5>$250</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="s_product">
                <img src="dist/img/t-shart1.jpg" alt />
                <div className="s_overlay" />
                <h3>T-SHIRT</h3>
                <h4><i className="fa fa-cart-arrow-down" aria-hidden="true" />ADD TO CART</h4>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="rate">
                    <h3>Pocket Tee</h3>
                    <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                    <h5>$250</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="s_product">
                <img src="dist/img/t-shart2.jpg" alt />
                <div className="s_overlay" />
                <h3>T-SHIRT</h3>
                <h4><i className="fa fa-cart-arrow-down" aria-hidden="true" />ADD TO CART</h4>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="rate">
                    <h3>Pocket Tee</h3>
                    <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></p>
                    <h5>$250</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="s_product">
                <img src="dist/img/t-shart3.jpg" alt />
                <div className="s_overlay" />
                <h2>NEW!</h2>
                <h3>JACKET</h3>
                <h4><i className="fa fa-cart-arrow-down" aria-hidden="true" />ADD TO CART</h4>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="rate">
                    <h3>Pocket Tee</h3>
                    <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></p>
                    <h5>$250</h5>
                  </div>
                </div>
              </div>
            </div>
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
}
