function Validation(values){
    let error = {}
    if(values.nombreUsuario === ""){
        error.nombreUsuario = "Nombre de usuario está vacio"
    }

    if(values.contrasena === ""){
        error.contrasena = "Contraseña está vacia"
    }

    return error;
}

export default Validation;