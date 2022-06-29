const mySql = require("mysql2");
require("dotenv").config()

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

//Abrir la connection con el servidor
const connection = mySql.createConnection(config);

//corremos la creación de la base de datos para borrarla en caso de que exista
connection.query(
    `DROP DATABASE IF EXISTS ${process.env.DB_NAME};`,
    function (err, result) {
        console.log(err);
        console.log(result);
    }
);

//corremos la creación de la base de datos para crearla en caso de que exista
connection.query(`CREATE DATABASE ${process.env.DB_NAME};`, function (err, result) {
    console.log(err);
    console.log(result);
})
connection.end();
    //cerrar connection
