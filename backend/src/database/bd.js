const mysql = require('mysql');

const mysqlConeccion= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Sinley123.',
    database: 'comisionb2023'
});

mysqlConeccion.connect(function(err){
    if(err){
        console.log('Mi error de conexion es: ', err)
        return;
    }else{
        console.log('Mi coneccion se realizo correctamente!! y estoy muy feliz')
    }
})

module.exports=mysqlConeccion;