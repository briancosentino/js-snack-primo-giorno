/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */
let numbPrompt;
const allNumb = []
let sum = 0;
for (let i = 0; i < 10; i++){
    numbPrompt = Number(prompt('scrivi un numero '))
    allNumb.push(numbPrompt)
    sum += allNumb[i]
    
    
}
console.log(sum);


