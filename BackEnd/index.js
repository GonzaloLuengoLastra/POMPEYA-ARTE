const express = require('express');
const app = express();
const mysql = require('mysql');
const hola = 1;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pompeya"
});

app.post("/create", (req, res) => {
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const nombreUsuario = req.body.nombreUsuario;
    const email = req.body.email;
    const constrasena = req.body.contrasena;

    db.query('INSERT INTO usuarios(rut, nombre, apellido, telefono, direccion, nombreUsuario, email, contrasena) VALUES(?,?,?,?,?,?,?,?)', 
    [rut, nombre, apellido, telefono, direccion, nombreUsuario, email, constrasena]),
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("Usuario registrado con éxito")
        }
    };
});

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
})