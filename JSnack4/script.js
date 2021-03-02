// creo array
var invitati = ["Marco", "Mario", "Alessandro", "Andrea", "Luca", "Giovanni"];

// chiedo all'utente il suo nome
var nomeUtente = prompt("inserisci il tuo nome");

// creo variabile di validazione
var nomeValido = false;

// verifico se nome appartiene alla iusta invitati
for (var i = 0; i < invitati.length; i++) {
  if (nomeUtente == invitati[i]) {
    nomeValido =  true;
  }
}

if (nomeValido) {
  console.log("puoi partecipare alla festa");
} else {
  console.log("non puoi partecipare, non sei tra gli invitati");
}
