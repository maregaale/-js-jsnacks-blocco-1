// richiesta per 10 volte di inserire un numero
var somma = 0;

for (var i = 1; i <= 10; i++) {
  // richiesta numero all'utente
  var numero = parseInt(prompt("inserisci un numero"));

  // aggiunto numero a somma
  somma = somma + numero;
}

// stampa somma
console.log(somma);
