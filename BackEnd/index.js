import jwt from 'jsonwebtoken';

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

//Conexion BD MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pompeya"
});

//Login
app.post("/login", (req, res) => {
    const nombreUsuario = req.body.nombreUsuario;
    const Contrasena = req.body.contrasena;
    const Privilegio = req.body.privilegio;

    db.query('SELECT * FROM usuarios WHERE nombreUsuario = ? AND contrasena = ? AND privilegio = ?', 
    [nombreUsuario, Contrasena, Privilegio],
    (err, data) =>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            const id_usuario = data[0].id_usuario;
            const token = jwt.sign({id_usuario}, "jwtSecretKey", {expiresIn: 300});
            return res.json({Login: true, token, data});
        } else {
            return res.json("Faile");
        }
    })
})


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

    db.query('INSERT INTO usuarios(rut, nombre, apellido, telefono, direccion, nombreUsuario, email, contrasena, privilegio) VALUES(?,?,?,?,?,?,?,?,?)', 
    [rut, nombre, apellido, telefono, direccion, nombreUsuario, email, constrasena, privilegio]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
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

//Actualizar Usuario
app.put("/update/:id_usuario", (req, res) => {
    const id_usuario = req.params.id_usuario;
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const nombreUsuario = req.body.nombreUsuario;
    const email = req.body.email;
    const constrasena = req.body.contrasena;
    const privilegio = req.body.privilegio;

    db.query('UPDATE usuarios SET rut=?, nombre=?, apellido=?, telefono=?, direccion=?, nombreUsuario=?, email=?, contrasena=?, privilegio=? WHERE id_usuario=?', 
    rut, nombre, apellido, telefono, direccion, nombreUsuario, email, constrasena, privilegio, id_usuario),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    };
});

//Obtener usuarios mediante id
app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM usuarios WHERE id_usuario=?";
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
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

//Listar Salas
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

//Eliminar Salas
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

//Listar Salas
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

//Eliminar Salas
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

//---------------------Fin Categorias--------------------------

//Verificar conexion
app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
})