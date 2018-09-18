// José Higor 20552 - EG 
// Milena Lameirão Silva 19953 - SI
function Hash(tamanhoArray) {
	let array = new Array(tamanhoArray);
	this.inserir = function (entrada) {
		// VERIFICA SE O ARRAY ESTÁ CHEIO OU NÃO
		let arrayCheio = true;
		for (let i = 0; i < array.length; i++) {
			if(!array[i]) {
				arrayCheio = false;
				break;
			}
		}
		// INICIA A FUNÇÃO SE O ARRAY NÃO ESTIVER CHEIO
		if(!arrayCheio) {
			let chave = entrada.charCodeAt() % array.length;

			if(!array[chave]) {
				array[chave] = entrada;
			} else {
				let casaVazia = false;
				let contador = 1;

				while(!casaVazia) {
					if((contador + chave) < array.length - 1) {
						if(array[chave + contador]) {
							contador++;							
						}else {
							casaVazia = true;
							array[chave + contador] = entrada;
						}
					} else {
						contador = 0;
						chave = 0;
					}
				}
			}
		} else {
			console.log('Este array está cheio !');
			return;
		}

		console.log(array);
	}
	this.buscar = function (entrada) {
		let chave = entrada.charCodeAt() % array.length;

		if(array[chave] === entrada) {
			console.log("Item encontrado em lista["+chave+"]");
			console.log()
		} else {
			let achou = false;
			let contador = 1;
			let iterador = 0;
			while(!achou) {
				if(iterador < array.length) {
					iterador++
					if((chave + contador) < array.length - 1) {
						if(array[chave + contador] !== entrada) {
							contador++
						} else {
							achou = true;
							console.log("Item encontrado em lista [" +(chave+contador)+ "] ");
						}
					} else {
						chave = contador = 0;
					}
				} else {
					console.log("O item informado não foi encotrado!!!");
					break;
				}	
			}
		}
	}

}