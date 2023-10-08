const mysql = require("mysql");

const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"pompeya"
});

conn.connect((error)=>{
    if(error) throw error;
    console.log("Connectado")
})

module.exports = conn;