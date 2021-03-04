// creo l'array di numeri interi
var numeri = [1, 7, 8, 10, 121, 54, 56, 25, 27, 20, 34, 32];
var somma = 0;

// sommo tutti i numeri dispari dell'array
for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] % 2 == 1) {
    somma += numeri[i];
  }
}

// stampo la somma
console.log(somma);
