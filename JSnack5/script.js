// creo l'array vuoto
var numeri = [];

// creo una variabile numero
var numero;

// chiedo sei volte all'utente un numero
for (var i = 1; i <= 6; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
  // se questo è pari lo inserisco nell'array
  if (isNaN(numero)) {
    alert("non hai inserito un numero");
  } else if (numero % 2 == 1) {
    numeri.push(numero);
  }
}

// stampo l'array
console.log(numeri);
