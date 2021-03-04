// chiedo un numero
var numero = parseInt(prompt("Inserisci un numero"));

// stampo
do {
  if (numero % 2 == 0) {
    console.log(numero);
  } else {
    console.log(numero + 1);
  }
} while (isNaN(numero));
