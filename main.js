/* L'utente inserisce due numeri in successione, con due prompt.
il software stampa il maggiore */
const firstPrompt = Number(prompt('inserisci il primo numero'));
const secondPrompt = Number(prompt('inserisci il secondo numero'));
const greaterNumber = []
if(firstPrompt>secondPrompt){
    greaterNumber.push(firstPrompt);
    
} else if( secondPrompt>firstPrompt){
    greaterNumber.push(secondPrompt);
    
}else {
    greaterNumber.push('i numeri sono uguali')
}
console.log(greaterNumber);


