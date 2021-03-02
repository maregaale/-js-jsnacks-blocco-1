// richiesta per 10 volte di inserire un numero
var numeri = [parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero"))];

// stampa della somma
var somma;
for (var i = 0; i < numeri.length; i++) {
  console.log(numeri[i] + numeri[i - 1]);
}
