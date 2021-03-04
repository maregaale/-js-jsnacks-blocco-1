// con ciclo while
var j = 0;
var conteggio = 0;
numeri = [];

while ( j <= 4) {
  numeri[j] = parseInt(prompt("inserisci un numero"));
  conteggio = conteggio + numeri[j];
  j++;
}

console.log(conteggio);
