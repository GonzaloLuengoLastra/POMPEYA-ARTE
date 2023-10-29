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
import Login from "./contenido/Login";
import NuevaVenta from "./contenido/NuevaVenta";
import ListarVentas from "./contenido/ListarVentas";
import ActualizarVenta from "./contenido/ActualizarVenta";
import RealizarCompra from "./contenido/RealizarCompra";
import RegistrarUsuarioNormal from "./contenido/RegistrarUsuarioNormal";
import Axios from "axios";
import React, { useEffect, useState } from "react";


// Initialize Google Analytics



function App() {
  const [loginStatus, setLoginStatus] = useState('');
  const [privilegio, setPrivilegio] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
      setLoginStatus(response.data.user[0].nombreUsuario);
      setPrivilegio(response.data.user[0].privilegio)
      console.log(privilegio)
    })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/RealizarCompra/:id_producto" element={<RealizarCompra/>}/>
        <Route path="/RecuperarContraseña" element={<RecuperarContraseña/>}/>
        <Route path="/ConfirmarContraseña" element={<ConfirmarContraseña/>}/>
        <Route path="/NuevaContraseña/:id_usuario" element={<NuevaContraseña/>} />
        <Route path="/ProductoUnico/:id_producto" element={<ProductoUnico/>}/>
        <Route>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/NuevoUsuario" element={<NuevoUsuario/>}/>
          <Route path="/ListarUsuarios" element={<ListarUsuarios/>}/>
          <Route path="/ActualizarUsuario/:id_usuario" element={<ActualizarUsuario/>}/>
          <Route path="/BuscarUsuario" element={<BuscarUsuario/>}/>
          <Route path="/NuevoProducto" element={<NuevoProducto/>}/>
          <Route path="/ListarProductos" element={<ListarProductos/>}/>
          <Route path="/ActualizarProducto/:id_producto" element={<ActualizarProducto/>}/>
          <Route path="/BuscarProducto" element={<BuscarProducto/>}/>
          <Route path="/NuevaCategoria" element={<NuevaCategoria/>}/>
          <Route path="/ListarCategorias" element={<ListarCategorias/>}/>
          <Route path="/ActualizarCategoria/:id_categoria" element={<ActualizarCategoria/>}/>
          <Route path="/BuscarCategoria" element={<BuscarCategoria/>}/>
          <Route path="/NuevaSala" element={<NuevaSala/>}/>
          <Route path="/ListarSalas" element={<ListarSalas/>}/>
          <Route path="/ActualizarSala/:id_sala" element={<ActualizarSala/>}/>
          <Route path="/BuscarSala" element={<BuscarSala/>}/>
          <Route path="/NuevoPrecio" element={<NuevoPrecio/>}/>
          <Route path="/ListarPrecios" element={<ListarPrecios/>}/>
          <Route path="/ActualizarPrecio/:id_precio" element={<ActualizarPrecio/>}/>
          <Route path="/BuscarPrecio" element={<BuscarPrecio/>}/>
          <Route path="/NuevoTipoVenta" element={<NuevoTipoVenta/>}/>
          <Route path="/ListarTipoVentas" element={<ListarTipoVentas/>}/>
          <Route path="/ActualizarTipoVenta/:id_tipo_venta" element={<ActualizarTipoVenta/>}/>
          <Route path="/BuscarTipoVenta" element={<BuscarTipoVenta/>}/>
          <Route path="/NuevoTipoPago" element={<NuevoTipoPago/>}/>
          <Route path="/ListarTipoPagos" element={<ListarTipoPagos/>}/>
          <Route path="/ActualizarTipoPago/:id_tipo_pago" element={<ActualizarTipoPago/>}/>
          <Route path="/BuscarTipoPago" element={<BuscarTipoPago/>}/>
          <Route path="/NuevaIncorporacion" element={<NuevaIncorporacion/>}/>
          <Route path="/ListarIncorporaciones" element={<ListarIncorporaciones/>}/>
          <Route path="/ActualizarIncorporacion/:id_incor" element={<ActualizarIncorporacion/>}/>
          <Route path="/BuscarIncorporacion" element={<BuscarIncorporacion/>}/>
          <Route path="/NuevoTipoContrato" element={<NuevoTipoContrato/>}/>
          <Route path="/ListarTipoContratos" element={<ListarTipoContratos/>}/>
          <Route path="/ActualizarTipoContrato/:id_tipo_contrato/" element={<ActualizarTipoContrato/>}/>
          <Route path="/BuscarTipoContrato" element={<BuscarTipoContrato/>}/>
          <Route path="/NuevoContrato" element={<NuevoContrato/>}/>
          <Route path="/ListarContrato" element={<ListarContrato/>}/>
          <Route path="/ActualizarContrato/:id_contrato" element={<ActualizarContrato/>}/>
          <Route path="/BuscarContrato" element={<BuscarContrato/>}/>
          <Route path="/Imagenes" element={<Imagenes/>}/>
          <Route path="/NuevaVenta" element={<NuevaVenta/>}/>
          <Route path="/ListarVentas" element={<ListarVentas/>} />
          <Route path="/ActualizarVenta/:id_venta" element={<ActualizarVenta/>} />
          <Route path="/RegistrarUsuarioNormal" element={<RegistrarUsuarioNormal/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
