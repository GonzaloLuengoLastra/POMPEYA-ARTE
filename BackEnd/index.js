const path = require("path");
const multer = require("multer");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcryp = require("bcrypt");
const saltRounds = 10;
require("./db/conn");

const router = require("./Routes/routes")


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


app.use("/uploads",express.static("./uploads"))
app.use(router)
app.use(cors({
    /*origin: ["http://localhost:3000"],*/
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extends: true }));
app.use(express.json());

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1200 * 1200 * 1200,
    },
}));



//Conexion BD MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pompeya"
});



app.get("/login", (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    }
});

app.post("/login", (req, res) => {
    const nombreUsuario = req.body.nombreUsuario;
    const contrasena = req.body.contrasena;

    db.query("SELECT * FROM usuarios WHERE nombreUsuario = ?;",
    nombreUsuario,
    (err, result) => {
        if(err){
            res.send({ err: err});
        }
        if(result.length > 0){
            bcryp.compare(contrasena, result[0].contrasena, (err, response) =>{
                if(response){
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                }else{
                    res.send({message: "Datos erroneos"});
                }
            })
        }else{
            res.send({message: "Usuario no existe"});
        }
    }
    )
});

//---------------------Comienzo Incorporacion--------------------------
app.post("/incor", (req, res) => {
    const descripcion_incor = req.body.descripcion_incor;
    const valor_incor = req.body.valor_incor;
    const id_usuario = req.body.id_usuario;

    db.query('INSERT INTO incorporacion(descripcion_incor, valor_incor, id_usuario) VALUES(?,?,?)', 
    [descripcion_incor, valor_incor, id_usuario]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

app.get("/getIncor", (req, res) => {
    db.query('SELECT * FROM incorporacion',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Obtener incor mediante id
app.get("/editIncor/:id_incor", (req, res) => {
    const id_incor = req.params.id_incor;
    const sql = "SELECT * FROM incorporacion WHERE id_incor=?";
    db.query(sql, [id_incor], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateIncor/:id_incor", (req, res) => { 
    const id_incor = req.params.id_incor;
    const descripcion_incor = req.body.descripcion_incor;
    const valor_incor = req.body.valor_incor;
    const id_usuario = req.body.id_usuario;

    db.query('UPDATE incorporacion SET descripcion_incor = ?, valor_incor = ?, id_usuario = ? WHERE id_incor = ?', 
    [descripcion_incor, valor_incor, id_usuario, id_incor]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Eliminar incor
app.delete("/deleteIncor/:id_incor", (req, res) => {
    const id_incor = req.params.id_incor;

    db.query('DELETE FROM incorporacion WHERE id_incor=?',id_incor,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

//---------------------Fin Incorporacion--------------------------

//---------------------Comienzo Productos--------------------------

app.get("/getProductos", (req, res) => {
    db.query('SELECT * FROM productos',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Obtener usuarios mediante id
app.get("/editProducto/:id_producto", (req, res) => {
    const id_producto = req.params.id_producto;
    const sql = "SELECT * FROM productos WHERE id_producto=?";
    db.query(sql, [id_producto], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateProducto/:id_producto", (req, res) => { 
    const id_producto = req.params.id_producto;
    const nombre_producto = req.body.nombre_producto;
    const fecha_producto = req.body.fecha_producto;
    const imagen_producto = req.body.imagen_producto;
    const id_usuario = req.body.id_usuario;
    const id_categoria = req.body.id_categoria;
    const id_precio = req.body.id_precio;
    const id_sala = req.body.id_sala;

    db.query('UPDATE productos SET nombre_producto = ?, fecha_producto = ?, imagen_producto = ?, id_usuario = ?, id_categoria = ?, id_precio = ?, id_sala = ? WHERE id_producto = ?', 
    [nombre_producto, fecha_producto, imagen_producto, id_usuario, id_categoria, id_precio, id_sala, id_producto]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Eliminar Usuario
app.delete("/deleteProductos/:id_producto", (req, res) => {
    const id_producto = req.params.id_producto;

    db.query('DELETE FROM productos WHERE id_producto=?',id_producto,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

//---------------------Fin Productos--------------------------

//---------------------Comienzo Usuarios---------------------
//Guardar Usuarios
app.post("/create", (req, res) => {
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const nombreUsuario = req.body.nombreUsuario;
    const email = req.body.email;
    const constrasena = req.body.contrasena;
    const privilegio = req.body.privilegio;


    bcryp.hash(constrasena, saltRounds, (err, hash) => {
        if(err){
            console.log(err);
        }

        db.query('INSERT INTO usuarios(rut, nombre, apellido, telefono, direccion, nombreUsuario, email, contrasena, privilegio) VALUES(?,?,?,?,?,?,?,?,?)', 
        [rut, nombre, apellido, telefono, direccion, nombreUsuario, email, hash, privilegio]),
        (err, result) =>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        };
    })

    
});

//Listar Usuarios
app.get("/usuarios", (req, res) => {
    db.query('SELECT * FROM usuarios',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Obtener usuarios mediante id
app.get("/edit/:id_usuario", (req, res) => {
    const id_usuario = req.params.id_usuario;
    const sql = "SELECT * FROM usuarios WHERE id_usuario=?";
    db.query(sql, [id_usuario], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateUsuario/:id_usuario", (req, res) => { 
    const id_usuario = req.params.id_usuario;
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const nombreUsuario = req.body.nombreUsuario;
    const email = req.body.email;
    const contrasena = req.body.contrasena;
    const privilegio = req.body.privilegio;

    db.query('UPDATE usuarios SET rut = ?, nombre = ?, apellido = ?, telefono = ?, direccion = ?, nombreUsuario = ?, email = ?, contrasena = ?, privilegio = ? WHERE id_usuario = ?', 
    [rut, nombre, apellido, telefono, direccion, nombreUsuario, email, contrasena, privilegio, id_usuario]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Eliminar Usuario
app.delete("/delete/:id_usuario", (req, res) => {
    const id_usuario = req.params.id_usuario;

    db.query('DELETE FROM usuarios WHERE id_usuario=?',id_usuario,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});
//---------------------Fin Usuarios-----------------------

//---------------------Comienzo Salas---------------------

// Registrar Salas
app.post("/salas", (req, res) => {
    const nombre = req.body.nombre_sala;
    const descripcion = req.body.descripcion_sala;

    db.query('INSERT INTO salas(nombre_sala, descripcion_sala) VALUES(?,?)', 
    [nombre, descripcion]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Listar Salas
app.get("/getSalas", (req, res) => {
    db.query('SELECT * FROM salas',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Eliminar Salas
app.delete("/deleteSala/:id_sala", (req, res) => {
    const id_sala = req.params.id_sala;

    db.query('DELETE FROM salas WHERE id_sala=?',id_sala,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

//Obtener salas mediante id
app.get("/editSala/:id_sala", (req, res) => {
    const id_sala = req.params.id_sala;
    const sql = "SELECT * FROM salas WHERE id_sala=?";
    db.query(sql, [id_sala], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateSala/:id_sala", (req, res) => { 
    const id_sala = req.params.id_sala;
    const nombre_sala = req.body.nombre_sala;
    const descripcion_sala = req.body.descripcion_sala;

    db.query('UPDATE salas SET nombre_sala = ?, descripcion_sala = ? WHERE id_sala = ?', 
    [nombre_sala, descripcion_sala, id_sala]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//---------------------Fin Salas--------------------------


//---------------------Comienzo Precios---------------------

// Registrar Precios
app.post("/precios", (req, res) => { 
    const cantidad = req.body.cantida_precio;

    db.query('INSERT INTO precios(cantida_precio) VALUES(?)', 
    [cantidad]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Listar Precios
app.get("/getPrecios", (req, res) => {
    db.query('SELECT * FROM precios',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Eliminar Precio
app.delete("/deletePrecio/:id_precio", (req, res) => {
    const id_precio = req.params.id_precio;

    db.query('DELETE FROM precios WHERE id_precio=?',id_precio,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get("/editPrecio/:id_precio", (req, res) => {
    const id_precio = req.params.id_precio;
    const sql = "SELECT * FROM precios WHERE id_precio=?";
    db.query(sql, [id_precio], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updatePrecio/:id_precio", (req, res) => { 
    const id_precio = req.params.id_precio;
    const cantida_precio = req.body.cantida_precio;

    db.query('UPDATE precios SET cantida_precio = ? WHERE id_precio = ?', 
    [cantida_precio, id_precio]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//---------------------Fin Precios--------------------------


//---------------------Comienzo Categorias---------------------
// Registrar categorias
app.post("/categorias", (req, res) => {
    const nombre = req.body.nombre_categoria;
    const descripcion = req.body.descripcion_categoria;

    db.query('INSERT INTO categorias(nombre_categoria, descripcion_categoria) VALUES(?,?)', 
    [nombre, descripcion]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Listar categorias
app.get("/getCategorias", (req, res) => {
    db.query('SELECT * FROM categorias',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Eliminar categorias
app.delete("/deleteCategoria/:id_categoria", (req, res) => {
    const id_categoria = req.params.id_categoria;

    db.query('DELETE FROM categorias WHERE id_categoria=?',id_categoria,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get("/editCategoria/:id_categoria", (req, res) => {
    const id_categoria = req.params.id_categoria;
    const sql = "SELECT * FROM categorias WHERE id_categoria=?";
    db.query(sql, [id_categoria], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateCategoria/:id_categoria", (req, res) => { 
    const id_categoria = req.params.id_categoria;
    const nombre_categoria = req.body.nombre_categoria;
    const descripcion_categoria = req.body.descripcion_categoria;

    db.query('UPDATE categorias SET nombre_categoria = ?, descripcion_categoria = ? WHERE id_categoria = ?', 
    [nombre_categoria, descripcion_categoria, id_categoria]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//---------------------Fin Categorias--------------------------

//---------------------Comienzo tipo contrato---------------------

// Registrar tipo contrato
app.post("/tcontrato", (req, res) => { 
    const nombre = req.body.nombre_tipo_contrato;
    const descripcion = req.body.descripcion_tipo_contrato;

    db.query('INSERT INTO tipo_contrato(nombre_tipo_contrato, descripcion_tipo_contrato) VALUES(?,?)', 
    [nombre, descripcion]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Listar tipo contrato
app.get("/getTContrato", (req, res) => {
    db.query('SELECT * FROM tipo_contrato',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

app.get("/editt/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM tipo_contrato WHERE id_tipo_contrato=?";
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateTipoContrato/:id_tipo_contrato", (req, res) => { 
    const id_tipo_contrato = req.params.id_tipo_contrato;
    const nombre = req.body.nombre_tipo_contrato;
    const descripcion = req.body.descripcion_tipo_contrato;

    db.query('UPDATE tipo_contrato SET nombre_tipo_contrato = ?, descripcion_tipo_contrato = ? WHERE id_tipo_contrato = ?', 
    [nombre, descripcion, id_tipo_contrato]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Eliminar tipo contrato
app.delete("/deleteTContrato/:id_tipo_contrato", (req, res) => {
    const id_tipo_contrato = req.params.id_tipo_contrato;

    db.query('DELETE FROM tipo_contrato WHERE id_tipo_contrato=?',id_tipo_contrato,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

//---------------------Fin tipo contrato--------------------------


//---------------------Comienzo tipo pago---------------------

// Registrar tipo pago
app.post("/tpago", (req, res) => { 
    const nombre = req.body.nombre_tipo_pago;
    const descripcion = req.body.descripcion_tipo_pago;

    db.query('INSERT INTO tipo_pagos(nombre_tipo_pago, descripcion_tipo_pago) VALUES(?,?)', 
    [nombre, descripcion]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Listar tipo pago
app.get("/getTPago", (req, res) => {
    db.query('SELECT * FROM tipo_pagos',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Eliminar tipo pago
app.delete("/deleteTPago/:id_tipo_pago", (req, res) => {
    const id_tipo_pago = req.params.id_tipo_pago;

    db.query('DELETE FROM tipo_pagos WHERE id_tipo_pago=?',id_tipo_pago,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get("/editTipoPago/:id_tipo_pago", (req, res) => {
    const id_tipo_pago = req.params.id_tipo_pago;
    const sql = "SELECT * FROM tipo_pagos WHERE id_tipo_pago=?";
    db.query(sql, [id_tipo_pago], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateTipoPago/:id_tipo_pago", (req, res) => { 
    const id_tipo_pago = req.params.id_tipo_pago;
    const nombre_tipo_pago = req.body.nombre_tipo_pago;
    const descripcion_tipo_pago = req.body.descripcion_tipo_pago;

    db.query('UPDATE tipo_pagos SET nombre_tipo_pago = ?, descripcion_tipo_pago = ? WHERE id_tipo_pago = ?', 
    [nombre_tipo_pago, descripcion_tipo_pago, id_tipo_pago]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//---------------------Fin tipo contrato--------------------------


//---------------------Comienzo tipo venta---------------------

// Registrar tipo venta
app.post("/tventa", (req, res) => { 
    const nombre = req.body.nombre_tipo_venta;
    const descripcion = req.body.descripcion_tipo_venta;

    db.query('INSERT INTO tipo_venta(nombre_tipo_venta, descripcion_tipo_venta) VALUES(?,?)', 
    [nombre, descripcion]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Listar tipo pago
app.get("/getTVenta", (req, res) => {
    db.query('SELECT * FROM tipo_venta',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Eliminar tipo pago
app.delete("/deleteTVenta/:id_tipo_venta", (req, res) => {
    const id_tipo_venta = req.params.id_tipo_venta;

    db.query('DELETE FROM tipo_venta WHERE id_tipo_venta=?',id_tipo_venta,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get("/editTipoVenta/:id_tipo_venta", (req, res) => {
    const id_tipo_venta = req.params.id_tipo_venta;
    const sql = "SELECT * FROM tipo_venta WHERE id_tipo_venta=?";
    db.query(sql, [id_tipo_venta], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateTipoVenta/:id_tipo_venta", (req, res) => { 
    const id_tipo_venta = req.params.id_tipo_venta;
    const nombre_tipo_venta = req.body.nombre_tipo_venta;
    const descripcion_tipo_venta = req.body.descripcion_tipo_venta;

    db.query('UPDATE tipo_venta SET nombre_tipo_venta = ?, descripcion_tipo_venta = ? WHERE id_tipo_venta = ?', 
    [nombre_tipo_venta, descripcion_tipo_venta, id_tipo_venta]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//---------------------Fin tipo contrato--------------------------

//---------------------Comienzo Contrato---------------------

// Registrar Contrato
app.post("/Contrato", (req, res) => { 
    const descripcion = req.body.descripcion_contrato;
    const plazo = req.body.plazo_contrato;
    const precio = req.body.precio_contrato;
    const id_tcontrato = req.body.id_tipo_contrato;
    const id_sala = req.body.id_sala;
    const id_usuario = req.body.id_usuario;

    db.query('INSERT INTO contratos(descripcion_contrato, plazo_contrato, precio_contrato, id_tipo_contrato, id_sala, id_usuario) VALUES(?,?,?,?,?,?)', 
    [descripcion,plazo,precio,id_tcontrato,id_sala,id_usuario]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Listar Contrato
app.get("/getContrato", (req, res) => {
    db.query('SELECT * FROM contratos',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//Eliminar Contrato
app.delete("/deleteContrato/:id_contrato", (req, res) => {
    const id_contrato = req.params.id_contrato;

    db.query('DELETE FROM contratos WHERE id_contrato=?',id_contrato,
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get("/editContrato/:id_contrato", (req, res) => {
    const id_contrato = req.params.id_contrato;
    const sql = "SELECT * FROM contratos WHERE id_contrato=?";
    db.query(sql, [id_contrato], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
});

app.put("/updateContrato/:id_contrato", (req, res) => { 
    const id_contrato = req.params.id_contrato;
    const plazo_contrato = req.body.plazo_contrato;
    const descripcion_contrato = req.body.descripcion_contrato;
    const precio_contrato = req.body.precio_contrato;
    const id_tipo_contrato = req.body.id_tipo_contrato;
    const id_sala = req.body.id_sala;
    const id_usuario = req.body.id_usuario;

    db.query('UPDATE contratos SET descripcion_contrato = ?, plazo_contrato = ?, precio_contrato = ?, id_tipo_contrato = ?, id_sala = ?, id_usuario = ? WHERE id_contrato = ?', 
    [descripcion_contrato, plazo_contrato, precio_contrato, id_tipo_contrato, id_sala, id_usuario, id_contrato]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//---------------------Fin Contrato--------------------------

//---------------------Comienzo del Count--------------------------

app.post("/countUsuarios", (req, res) => {
    db.query('SELECT count(id_usuario) FROM usuarios',
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
)});

//---------------------Fin del Count--------------------------

//Verificar conexion
app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
})