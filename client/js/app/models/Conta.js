class Conta{
	
	contructor(titular,conta){
		this._titular = titular;
		this._conta = conta;
		this._saldo = 0.0;
	}

	deposita(valor){
		console.log('Valor Depositado: '+valor)
		this._saldo += valor;
	}

	atualiza(taxa){
		throw new Error('Você precisa Sobrescrever o metodo');
	}

	get saldo(){
		return this._saldo;
	}
	
	get titular(){
		return this._titular;
	}	

	get conta(){
		return this._conta;
	}



}