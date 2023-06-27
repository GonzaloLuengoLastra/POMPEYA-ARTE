import React, {Component, useState } from "react";
import { Link } from 'react-router-dom';

export default class NavBarInicio extends Component {
  render() {
    return (
      <div>

        <section className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ul>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="icon">
          </div>
        </div>
        <div className="col-md-4">
          <div className="a-right">
            <Link to="/Login" ><p><span><i className="fa fa-user" /></span>Login</p></Link>
            <a href="#"><p><span><i className="fa fa-pencil" /></span>Registrar</p></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="header-catagory">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="row">
            <div className="col-md-12">
              <form method="post" action="#">
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="clear" />
  <section className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <br></br>
          <div className="logo">
            <a href="/"><img src="dist/img/logo-one.jpg" alt/></a>
          </div>
        </div>
        <div className="col-md-7">
          <ul className="nav navbar-nav lado">
            <li className="active"><a href="/">INICIO</a></li>
            <li><a href="#section1">PRODUCTOS</a></li>
            <li><a href="#section2">ARTISTAS</a></li>
            <li><a href="#section3">CONTACTANOS</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <div className="cart">
            <p><i className="fa fa-cart-arrow-down" /><sup>0</sup> $&nbsp;&nbsp;0.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>
    );
  }
}
