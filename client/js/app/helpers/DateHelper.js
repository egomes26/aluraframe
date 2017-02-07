class DateHelper {

	constructor(){
		throw new Error('Esta classe não pode ser instanciada');
	}
	
	static dataParaTexto(data){

		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	static textoParaData(anoMesDia){
		console.log(anoMesDia);
		if(!/\d{4}.\d{2}.\d{2}/.test(anoMesDia)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
		return new Date(...anoMesDia
			.split('-')
			//.reverse()
			.map((item,indice) => item - indice % 2)
			
		);
	}
}