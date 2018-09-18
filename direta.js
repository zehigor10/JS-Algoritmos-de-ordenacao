vetor = [10, 20, 12, 5, 8, 15]
this.selecaoDireta(this.vetor, this.vetor.length)
function selecaoDireta(vetor,tamanho){
   var i;
   var j;
   var menor;
   var aux;
 
   for(i = 0; i < tamanho - 1; ++i){
      menor = i;
      for(j = i + 1; j < tamanho; ++j){
         if(vetor[j] < vetor[menor])
            menor = j;
      }
      aux = vetor[i];
      vetor[i] = vetor[menor];
      vetor[menor] = aux;
	  console.log(vetor)
   }
   console.log(vetor)
}
