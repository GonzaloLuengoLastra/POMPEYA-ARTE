const express = require("express");
const router = new express.Router();
const multer = require("multer")
const conn = require("../db/conn")
const moment = require("moment")

// config storage img
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});

// filtrar imagen
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("Esto no es una imagen"))
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

// registrar producto
router.post("/registrarProducto",upload.single("photo"),(req, res) => {
    const {nombre} = req.body;
    const {fecha} = req.body;
    const {filename} = req.file;
    const {artista} = req.body;
    const {categoria} = req.body;
    const {precio} = req.body;
    const {sala} = req.body;

    if(!nombre || !fecha || !filename || !artista || !categoria || !precio || !sala){
        res.status(422).json({status:422, message:"Llenar todos los campos"})
    }

    try {
        conn.query("INSERT INTO productos SET ?",{
            nombre_producto:nombre,
            fecha_producto:fecha,
            imagen_producto:filename,
            id_usuario:artista,
            id_categoria:categoria,
            id_precio:precio,
            id_sala:sala
        },(err, result)=>{
            if(err){
                console.log("error")
            }else{
                console.log("Producto registrado")
                res.status(201).json({status:201,data:req.body})
            }
        })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});

// obtener producto
router.get("/getProducto",(req,res)=>{
    try {
        conn.query("SELECT * FROM productos",(err,result)=>{
            if(err){
                console.log("error")
            }else{
                console.log("Producto obtenido")
                res.status(201).json({status:201,data:result})
            } 
        })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
})

module.exports = router;