


module.exports = function(app){

 app.get('/produtos',function(req, res){
        
        var connection = app.infra.connectionFactory(); 
        var produtosBanco = app.infra.produtosBanco;
        //executa a query no banco e volta uma função de callback(primeiro arg erro, segundo arg resultado)
        produtosBanco.lista(connection,function(err, results){
            //res.send(results);
            //Rederizo a pagina e envio o result para o meu html, crio um objeto Java script chamdo lista recebendo results 
            res.render('produtos/lista',{lista:results});
        });
        connection.end();
    });
}

