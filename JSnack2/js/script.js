// inserisci la prima parola
var parola1 = prompt("inserisci la prima parola");

// inserisci la seconda parola
var parola2 = prompt("inserisci la seconda parola");

// stampa la parola più corta
if (parola1.length < parola2.length) {
  console.log(parola1);
  console.log(parola2);
} else if (parola2.length < parola1.length) {
  console.log(parola2);
  console.log(parola1);
} else if (parola1.length == parola2.length) {
  console.log("le due parole inserite sono lunghe uguali")
}
