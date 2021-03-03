// chiedo il numero n
do {
  var numeroUtente = parseInt(prompt("inserisci un numero"));
} while (isNaN(numeroUtente));

// spampa i primi n numeri al cubo
for (var i = 1; i <= numeroUtente; i++) {
  console.log(Math.pow(i, 3));
}
