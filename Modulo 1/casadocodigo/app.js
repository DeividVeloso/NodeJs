var express = require('./config/express')();

//Não é preciso, pois agora quem ira fazer sera o load-express
//var rotasProdutos = require('./app/routes/produtos')(app);

express.listen(3000, function(){
    console.log("servidor rodando");
});