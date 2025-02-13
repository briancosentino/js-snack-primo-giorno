/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */
const oddNum = []
let number;
for (let i = 0; i < 6; i++){
    number = Number(prompt('inserisci un numero'));
    if (number % 2 != 0){
        oddNum.push(number)
    }
}
console.log(oddNum);
