var vet = [10, 20, 12, 5, 8, 15];
function ordenacao(vet) {
    var atual;
    for (var i = 1; i < vet.length; i++) {
        var anterior = i - 1
        atual = vet[i];
        while (vet[anterior] > atual) {
            vet[anterior + 1] = vet[anterior];
            anterior = anterior - 1;
            console.log(vet)
        }
        vet[anterior + 1] = atual;
        console.log(vet)
    }
    console.log(vet)
}
