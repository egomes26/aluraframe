class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);// cria uma associação bind com document

		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

		this._negociacoesView = new NegociacoesView($('#negociacoesView'));

		this._negociacoes = new ListaNegociacoes(model=>this._negociacoesView.update(model));
		
		this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView')); 

	}
	
	adiciona(event){

		console.log("iniciando controller");
		event.preventDefault();
				
		this._negociacoes.adiciona(this._criaNegociacao());
		
		console.log(this._negociacoes.negociacoes);
		
		// nova mensagem e atualizado a view
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
		this._limparFormulario();	
	}

	apaga(){

		this._negociacoes.esvazia();

		this._mensagem.texto = "Negociações removidas com sucesso";
		this._mensagemView.update(this._mensagem);

	}

	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limparFormulario(){
		this._inputData.value = '';
		//this._inputData.focus();
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;
	}
}