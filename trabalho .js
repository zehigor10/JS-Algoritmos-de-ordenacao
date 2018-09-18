// TODOS ESTÃO FUNCIONANDO 
//INSERÇÃO DIRETA
function insercaoDiretaAleatorio(){
	console.time();
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100})
	console.log(uniques)
		var atual;
		for (var i = 1; i < uniques.length; i++) {
			var anterior = i - 1
			atual = uniques[i];
			while (uniques[anterior] > atual) {
				uniques[anterior + 1] = uniques[anterior];
				anterior = anterior - 1;
				console.log(uniques)
			}
			uniques[anterior + 1] = atual;
			console.log(uniques)
		}
		console.log(uniques)
		console.timeEnd();
	document.write(JSON.stringify(uniques));
}

function insercaoDiretaCrescente(){
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100}).sort()
	console.log(uniques)
		var atual;
		for (var i = 1; i < uniques.length; i++) {
			var anterior = i - 1
			atual = uniques[i];
			while (uniques[anterior] > atual) {
				uniques[anterior + 1] = uniques[anterior];
				anterior = anterior - 1;
				console.log(uniques)
			}
			uniques[anterior + 1] = atual;
			console.log(uniques)
		}
		console.log(uniques)
	document.write(JSON.stringify(uniques));
}

function insercaoDiretaDecrescente(){
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100}).sort().reverse()
	console.log(uniques)
		var atual;
		for (var i = 1; i < uniques.length; i++) {
			var anterior = i - 1
			atual = uniques[i];
			while (uniques[anterior] > atual) {
				uniques[anterior + 1] = uniques[anterior];
				anterior = anterior - 1;
				console.log(uniques)
			}
			uniques[anterior + 1] = atual;
			console.log(uniques)
		}
		console.log(uniques)
	document.write(JSON.stringify(uniques));
}




//BUBLESORT
function bubleSortAleatorio(){
	console.time();//DEIXAR
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100})//DEIXAR
	console.log(uniques) //DEIXAR
		var atual;
		for (var i = 1; i < uniques.length; i++) {
			var anterior = i - 1
			atual = uniques[i];
			while (uniques[anterior] > atual) {
				uniques[anterior + 1] = uniques[anterior];
				anterior = anterior - 1;
				console.log(uniques)
			}
			uniques[anterior + 1] = atual;
			console.log(uniques)
		}
		console.log(uniques) //DEIXAR
		console.timeEnd();   //DEIXAR
	document.write(JSON.stringify(uniques));//DEIXAR
}

function bubleSortCrescente(){
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100}).sort()
	console.log(uniques)
		var atual;
		for (var i = 1; i < uniques.length; i++) {
			var anterior = i - 1
			atual = uniques[i];
			while (uniques[anterior] > atual) {
				uniques[anterior + 1] = uniques[anterior];
				anterior = anterior - 1;
				console.log(uniques)
			}
			uniques[anterior + 1] = atual;
			console.log(uniques)
		}
		console.log(uniques)
	document.write(JSON.stringify(uniques));
}

function bubleSortDecrescente(){
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100}).sort().reverse()
	console.log(uniques)
		var atual;
		for (var i = 1; i < uniques.length; i++) {
			var anterior = i - 1
			atual = uniques[i];
			while (uniques[anterior] > atual) {
				uniques[anterior + 1] = uniques[anterior];
				anterior = anterior - 1;
				console.log(uniques)
			}
			uniques[anterior + 1] = atual;
			console.log(uniques)
		}
		console.log(uniques)
	document.write(JSON.stringify(uniques));
}




// Seleção Direta 
function selecaoDiretaAleatorio(){
   var i, j, menor, aux;
   console.time();
   var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100})
   console.log(uniques)   
   for(i = 0; i <  uniques.length - 1; ++i){
      menor = i;
      for(j = i + 1; j <  uniques.length; ++j){
         if(uniques[j] < uniques[menor])
            menor = j;
      }
      aux = uniques[i];
      uniques[i] = uniques[menor];
      uniques[menor] = aux;
	  console.log(uniques)
   }
   console.log(uniques) 
   console.timeEnd();   
document.write(JSON.stringify(uniques));
}

function selecaoDiretaCrescente(){
	var i, j, menor, aux;
	console.time();
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100}).sort()
	console.log(uniques)   
	for(i = 0; i <  uniques.length - 1; ++i){
	   menor = i;
	   for(j = i + 1; j <  uniques.length; ++j){
		  if(uniques[j] < uniques[menor])
			 menor = j;
	   }
	   aux = uniques[i];
	   uniques[i] = uniques[menor];
	   uniques[menor] = aux;
	   console.log(uniques)
	}
	console.log(uniques) 
	console.timeEnd();   
 document.write(JSON.stringify(uniques));
 }
 function selecaoDiretaDecrescente(){
	var i, j, menor, aux;
	console.time();
	var uniques = chance.unique(chance.natural, 100, {min: 0, max: 100}).sort().reverse()
	console.log(uniques)   
	for(i = 0; i <  uniques.length - 1; ++i){
	   menor = i;
	   for(j = i + 1; j <  uniques.length; ++j){
		  if(uniques[j] < uniques[menor])
			 menor = j;
	   }
	   aux = uniques[i];
	   uniques[i] = uniques[menor];
	   uniques[menor] = aux;
	   console.log(uniques)
	}
	console.log(uniques) 
	console.timeEnd();   
 document.write(JSON.stringify(uniques));
}
 
// vetor =  [8,9,5,6,3,1] e tam = vetor.lenght, funciona também 
function heapsort(vetor, tam){
	var i = tam/2, pai, filho, t;
	for (;;){
		if (i > 0){
			i--;
			t = vetor[i];
		}
		else{
			tam--;
			if (tam == 0)
				return;
			t = vetor[tam];
			vetor[tam] = vetor[0];
		}
		pai = i;
		filho = i*2 + 1;
		while (filho < tam){
			  if ((filho + 1 < tam)  &&  (vetor[filho + 1] > vetor[filho]))
				  filho++;
			  if (vetor[filho] > t){
				  vetor[pai] = vetor[filho];
				  pai = filho;
				  filho = pai*2 + 1;
			  }
			  else
				  break;
		}
		vetor[pai] = t;
		console.log(vetor);
	}
}	
// vetor =  [8,9,5,6,3,1] e tam = vetor.lenght, funciona também 
function shellsort(vetor, tam){
	var i, j, value;
	var gap = 1;
	while(gap < tam){
		gap = 3*gap+1;
	}
	while(gap > 1){
		gap = parseInt(gap/3);
		for(i = gap; i < tam; i++) {
			value = vetor[i];
			j = i - gap;
			while ((j >= 0) && (value < vetor[j])) {
				vetor[j + gap] = vetor[j];
				j = j-gap;
			}
			vetor[j + gap] = value;
		}
		console.log(vetor);	
	}
	console.log(vetor);
}
// todos estao pegando 
function  quicksort(array, left, right){ // declara o array, array = os numero, por exemplo: [0,1,2,3, etc] e o left sempre coloca zero, e o right é array.lenght - 1
    var i = left;
    var j = right;
    var tmp;
    pivotidx = (left + right) / 2;
    var pivot = parseInt(array[pivotidx.toFixed()]); 
    // PARTI��O
    while (i <= j){
        while (parseInt(array[i]) < pivot)
            i++;
        while (parseInt(array[j]) > pivot)
            j--;
        if (i <= j){
            tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
            i++;
            j--;
		}
		console.log(array);
    }
    // RECURS�O
    if (left < j)
        quicksort(array, left, j);
    if (i < right)
        quicksort(array, i, right);
	return array;
	console.log(array);
}

