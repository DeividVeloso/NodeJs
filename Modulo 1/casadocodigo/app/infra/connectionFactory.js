var mysql = require('mysql');

var connectMYSQL = function () {
    return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'dhv1902',
            database: 'casadocodigo_nodejs'
        });
};

module.exports = function(){
    return connectMYSQL;
};