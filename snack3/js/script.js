/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

// FUNZIONI
function posizione(array, a, b) {
    
    arrayDue = [];

    for(var i = a; i < (b - 1); i++) {
        arrayDue.push(array[i]);
    }

    return arrayDue;
}
// FINE FUNZIONI

arrayPrimo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(arrayPrimo);
arraySecondo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arraySecondo);

console.log(posizione(arrayPrimo, 4, 7));
console.log(posizione(arraySecondo, 4, 7));