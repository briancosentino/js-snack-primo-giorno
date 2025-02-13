/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */
const firstPrompt = prompt('inserisci la prima parola');
const secondPrompt = prompt('inserisci la seconda parola');
const greaterWord = []
if(firstPrompt.length > secondPrompt.length){
    greaterWord.push(secondPrompt +  ' ' + firstPrompt);
    
} else if( secondPrompt.length > firstPrompt.length){
    greaterWord.push(firstPrompt + ' ' + secondPrompt);
    
}else {
    greaterWord.push(firstPrompt + ' ' + secondPrompt)
}
console.log(greaterWord);