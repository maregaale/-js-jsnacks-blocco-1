// creo i due array
var array1 = [1, 5, 6, 3, 8, 9, 15, 2, 45];
var array2 = [22, 34, 45, 18, 14];
console.log("la lunghezza iniziale del primo array è " + array1.length);
console.log("la lunghezza iniziale del secondo array è " + array2.length);


if (array1.length > array2.length) {
  // creo una variabile numerica come la differenza di lunghezza tra i due array
  var differenza = (array1.length - array2.length);
  // immetto numeri casuali fino a che i due array risultino uguali in lunghezza
  for (var i = 1; i <= differenza; i++) {
    var j = Math.floor(Math.random()*50);
    array2.push(j);
  }

  // stampo l'array modificato
  console.log(array2);
} else if (array1.length < array2.length) {

  // creo una variabile numerica come la differenza di lunghezza tra i due array
  var differenza = (array2.length - array1.length);

  // immetto numeri casuali fino a che i due array risultino uguali in lunghezza
  for (var i = 1; i <= differenza; i++) {
    var j = Math.floor(Math.random()*50);
    array1.push(j);
  }

  // stampo l'array modificato
  console.log(array1);
} 



// stampo il nuovo array e la lunghezza del primo e di quest'ultimo
console.log("la lunghezza finale del primo array è " + array1.length);
console.log("la lunghezza finale del secondo array è " + array2.length);
