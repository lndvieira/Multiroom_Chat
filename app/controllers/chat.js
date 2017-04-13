module.exports.iniciaChat = function(app, req, res){

	var dadosForm = req.body;
	console.log(dadosForm);

	req.assert('apelido','Apelido é obrigatorio').notEmpty();
	req.assert('apelido','Apelido é 0 100').len(2,10);

	var err = req.validationErrors();

	if(err){
		res.render('index', {validacao : err});
		return;
	}

	app.get('io').emit('msgParaCliente', {apelido : dadosForm.apelido, mensagem: ' acabou de entrar'});

	res.render('chat', {dadosForm : dadosForm});
}