// José Higor 20552 - EG 
// Milena Lameirão Silva 19953 - SI
function expres(){
	let referencias = [
	{abre : '{' , fecha: '}'},
	{abre : '[' , fecha: ']'},
	{abre : '(' , fecha: ')'},
	]
	
		
	let entrada = prompt('Digite uma expressão: ');
	
	let arrayEntrada = entrada.split('');
	console.log(arrayEntrada);
	let arrayAux = []; 
	for(let i = 0; i < arrayEntrada.length; i++){
		for(let j = 0; j < referencias.length; j++){
			if(arrayEntrada[i] === referencias[j].abre){
				arrayAux.push(arrayEntrada[i]);
			} 
			else if (arrayEntrada[i] === referencias[j].fecha){
				if(referencias[j].abre === arrayAux[arrayAux.length - 1]){
					arrayAux.pop();
				}
				else {
					alert('Expressão aritmetica incorreta');
					return;
				}
			}
		}
	}
	alert('Expressão aritmetica correta!!!!');
}

