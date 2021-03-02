// richiesta primo numero all'utente
var numero1 = parseInt(prompt("Inserisci il primo numero"));

// richiesta primo numero all'utente
var numero2 = parseInt(prompt("Inserisci il secondo numero"));

// stampa risultato
if (isNaN(numero1 && numero2)) {

  alert("ricarica la pagina, inserisci dati numerici");

} else if (numero1 > numero2) {

  console.log("il numero più grande è il primo inserito, cioè " + numero1);

} else if (numero1 < numero2) {

  console.log("il numero più grande è il secondo inserito, cioè " + numero2);

} else {

  console.log("i due numer inseriti sono uguali, cioè " + numero1);
  
}
