// José Higor 20552 - EG 
// Milena Lameirão Silva 19953 - SI
function hanoi(n, origem, aux, destino) {
	if(n == 0) {
		return;
	}
	count++;
	hanoi(n-1, origem, destino, aux);
	console.log("Mova o disco " + n + " de " + origem + " para " + destino);
	hanoi(n-1, aux, origem, destino);
}