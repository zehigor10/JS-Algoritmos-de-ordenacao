vet = [2, 5, 30, 80, 9]
this.bubluesort(vet)
console.time();
function bubluesort(vet){
	  var vet = vet; 
	  var i;
	  this.verify(vet)  
	}
	var arrayAux = [];
	function verify(vet){
	var condicao = true;
		while (condicao == true){
		 condicao = false;
		//alert("O vetor digitado é " + vet);
		for(i=0;i<vet.length-1;i++){
			if(vet[i] > vet[i+1]){
				aux = vet[i];
				vet[i] = vet[i+1];
				vet[i+1] = aux;
				condicao = true;
			}
	  }
	}
	}
	console.timeEnd();


