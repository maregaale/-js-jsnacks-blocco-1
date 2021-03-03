// chiedo un numero di 4 cifre
var numeroUtente = (prompt("inserisci un numero di 4 cifre"));

// aggiungo var totale
var totale = 0;

// attraverso la stringa e sommo
for (var i = 0; i < numeroUtente.length; i++) {
  totale += parseInt(numeroUtente[i]);
}

// stampo
console.log(totale);
