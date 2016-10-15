
 var express = require('express');
 var load = require('express-load'); //Usando o load para carregar rotas automaticas


module.exports = function(){
    var app = express();

    app.set('view engine','ejs');
    app.set('views','./app/views');
    
    //Informo par ao load em qual pasta ele deve carregar as rotas
    load('routes',{cwd:'app'})
        .then('infra')//Depois que carregar as rotas carregar o infra
        .into(app);// tudo que carregar no load cologar no app(que é o servidor express)

    return app;
}
