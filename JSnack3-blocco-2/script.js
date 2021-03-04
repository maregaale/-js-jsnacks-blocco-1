// array nomi
var nomi = ["Ale", "Marco", "Luca", "Giovanni", "Mario"];
var cognomi = ["Marega", "Besozzi", "Kravos", "Malu", "Locovaz"];

// genero variabile lista falsa
var listaFalsa = [];

for (var i = 1; i <= 3; i++) {
  var j = Math.floor(Math.random()*nomi.length);
  var d = Math.floor(Math.random()*cognomi.length);
  listaFalsa[i - 1] = nomi[j] + " " + cognomi[d];
}

// stampa lista falsa
console.log(listaFalsa);
