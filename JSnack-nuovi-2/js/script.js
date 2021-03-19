//1. creo l'array di squadre di calcio
var squadre = [
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Monfalcone",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Romana",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Empoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

// 2. genero numeri random
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3.inserisco i numeri random al posto di punti fatti e falli subiti delle squadre
for (var i = 0; i < squadre.length; i++) {
  squadre[i]["puntiFatti"] = numRandom(1, 80);
  squadre[i]["falliSubiti"] = numRandom(1, 12);
}

console.log(squadre);

// 3.rimuovo i punti fatti dagli oggetti del precedente array
var falliSquadre = [];

for (var i = 0; i < squadre.length; i++) {

  // creo oggetto squadra
  var squadra = {};

  // pusho l'oggetto nel nuovo array
  falliSquadre.push(squadra);

  // aggiungo le proprietà agli oggetti del nuovo array
  falliSquadre[i].nome = squadre[i].nome;
  falliSquadre[i].falliSubiti = squadre[i].falliSubiti;
}

console.log(falliSquadre);
