import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./contenido/Inicio";
import Dashboard from "./contenido/Dashboard";
import NuevoUsuario from "./contenido/NuevoUsuario";
import ListarUsuarios from "./contenido/ListarUsuarios";
import ActualizarUsuario from "./contenido/ActualizarUsuario";
import BuscarUsuario from "./contenido/BuscarUsuario";
import NuevoProducto from "./contenido/NuevoProducto";
import ListarProductos from "./contenido/ListarProductos";
import ActualizarProducto from "./contenido/ActualizarProducto";
import BuscarProducto from "./contenido/BuscarProducto";
import NuevaCategoria from "./contenido/NuevaCategoria";
import ListarCategorias from "./contenido/ListarCategorias";
import ActualizarCategoria from "./contenido/ActualizarCategoria";
import BuscarCategoria from "./contenido/BuscarCategoría";
import NuevaSala from "./contenido/NuevaSala";
import ListarSalas from "./contenido/ListarSalas";
import ActualizarSala from "./contenido/ActualizarSala";
import BuscarSala from "./contenido/BuscarSala";
import NuevoPrecio from "./contenido/NuevoPrecio";
import ListarPrecios from "./contenido/ListarPrecios";
import ActualizarPrecio from "./contenido/ActualizarPrecio";
import BuscarPrecio from "./contenido/BuscarPrecio";
import NuevoTipoVenta from "./contenido/NuevoTipoVenta";
import ListarTipoVentas from "./contenido/ListarTipoVentas";
import ActualizarTipoVenta from "./contenido/ActualizarTipoVenta";
import BuscarTipoVenta from "./contenido/BuscarTipoVenta";
import NuevoTipoPago from "./contenido/NuevoTipoPago";
import ListarTipoPagos from "./contenido/ListarTipoPagos";
import ActualizarTipoPago from "./contenido/ActualizarTipoPago";
import BuscarTipoPago from "./contenido/BuscarTipoPago";
import NuevaIncorporacion from "./contenido/NuevaIncorporacion";
import ListarIncorporaciones from "./contenido/ListarIncorporaciones";
import ActualizarIncorporacion from "./contenido/ActualizarIncorporacion";
import BuscarIncorporacion from "./contenido/BuscarIncorporacion";
import NuevoTipoContrato from "./contenido/NuevoTipoContrato";
import ListarTipoContratos from "./contenido/ListarTipoContratos";
import ActualizarTipoContrato from "./contenido/ActualizarTipoContrato";
import BuscarTipoContrato from "./contenido/BuscarTipoContrato";
import NuevoContrato from "./contenido/NuevoContrato";
import ListarContrato from "./contenido/ListarContrato";
import ActualizarContrato from "./contenido/ActualizarContrato";
import BuscarContrato from "./contenido/BuscarContrato";
import ProductoUnico from "./contenido/ProductoUnico";
import RecuperarContraseña from "./contenido/RecuperarContraseña";
import ConfirmarContraseña from "./contenido/ConfirmarContraseña";
import NuevaContraseña from "./contenido/NuevaContraseña";
import Imagenes from "./contenido/Imagenes";

// Initialize Google Analytics


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/NuevoUsuario" element={<NuevoUsuario/>}/>
        <Route path="/ListarUsuarios" element={<ListarUsuarios/>}/>
        <Route path="/ActualizarUsuario" element={<ActualizarUsuario/>}/>
        <Route path="/BuscarUsuario" element={<BuscarUsuario/>}/>
        <Route path="/NuevoProducto" element={<NuevoProducto/>}/>
        <Route path="/ListarProductos" element={<ListarProductos/>}/>
        <Route path="/ActualizarProducto" element={<ActualizarProducto/>}/>
        <Route path="/BuscarProducto" element={<BuscarProducto/>}/>
        <Route path="/NuevaCategoria" element={<NuevaCategoria/>}/>
        <Route path="/ListarCategorias" element={<ListarCategorias/>}/>
        <Route path="/ActualizarCategoria" element={<ActualizarCategoria/>}/>
        <Route path="/BuscarCategoria" element={<BuscarCategoria/>}/>
        <Route path="/NuevaSala" element={<NuevaSala/>}/>
        <Route path="/ListarSalas" element={<ListarSalas/>}/>
        <Route path="/ActualizarSala" element={<ActualizarSala/>}/>
        <Route path="/BuscarSala" element={<BuscarSala/>}/>
        <Route path="/NuevoPrecio" element={<NuevoPrecio/>}/>
        <Route path="/ListarPrecios" element={<ListarPrecios/>}/>
        <Route path="/ActualizarPrecio" element={<ActualizarPrecio/>}/>
        <Route path="/BuscarPrecio" element={<BuscarPrecio/>}/>
        <Route path="/NuevoTipoVenta" element={<NuevoTipoVenta/>}/>
        <Route path="/ListarTipoVentas" element={<ListarTipoVentas/>}/>
        <Route path="/ActualizarTipoVenta" element={<ActualizarTipoVenta/>}/>
        <Route path="/BuscarTipoVenta" element={<BuscarTipoVenta/>}/>
        <Route path="/NuevoTipoPago" element={<NuevoTipoPago/>}/>
        <Route path="/ListarTipoPagos" element={<ListarTipoPagos/>}/>
        <Route path="/ActualizarTipoPago" element={<ActualizarTipoPago/>}/>
        <Route path="/BuscarTipoPago" element={<BuscarTipoPago/>}/>
        <Route path="/NuevaIncorporacion" element={<NuevaIncorporacion/>}/>
        <Route path="/ListarIncorporaciones" element={<ListarIncorporaciones/>}/>
        <Route path="/ActualizarIncorporacion/" element={<ActualizarIncorporacion/>}/>
        <Route path="/BuscarIncorporacion" element={<BuscarIncorporacion/>}/>
        <Route path="/NuevoTipoContrato" element={<NuevoTipoContrato/>}/>
        <Route path="/ListarTipoContratos" element={<ListarTipoContratos/>}/>
        <Route path="/ActualizarTipoContrato" element={<ActualizarTipoContrato/>}/>
        <Route path="/BuscarTipoContrato" element={<BuscarTipoContrato/>}/>
        <Route path="/NuevoContrato" element={<NuevoContrato/>}/>
        <Route path="/ListarContrato" element={<ListarContrato/>}/>
        <Route path="/ActualizarContrato" element={<ActualizarContrato/>}/>
        <Route path="/BuscarContrato" element={<BuscarContrato/>}/>
        <Route path="/ProductoUnico" element={<ProductoUnico/>}/>
        <Route path="/RecuperarContraseña" element={<RecuperarContraseña/>}/>
        <Route path="/ConfirmarContraseña" element={<ConfirmarContraseña/>}/>
        <Route path="/NuevaContraseña" element={<NuevaContraseña/>} />
        <Route path="/Imagenes" element={<Imagenes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
