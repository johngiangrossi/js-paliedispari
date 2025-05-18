console.log('palindromo');

/*
ex1 
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
/*
// faccio ciclo for per ottenere la parola invertita
const word = 'ciao';  //string
let reversedWord = '';
for (let i = 0; i < word.length; i++) {
    let char = word[word.length - 1 - i];  //string
    // console.log(i, char);
    reversedWord += char;
}
console.log(reversedWord);
*/
// chiedo la parola all'utente
const userWord = prompt('inserisci una parola')  //string
console.log(`la parola inserida dall'utente è: ${userWord}`);

// verifico che utente inserisca una parola valida
if (!userWord) {
    alert('inserire una parola valida')
} else {

    // faccio la funzione per ottenere la parola invertita
    function getReversedWord(word) {
        let reversed = '';
        for (let i = 0; i < word.length; i++) {
            let char = word[word.length - 1 - i];  //string
            // console.log(i, char);
            reversed += char;
        }
        return reversed  //string
    }

    const reversedWord = getReversedWord(userWord);
    // console.log(reversedWord);


    if (reversedWord === userWord) {
        console.log(`${userWord} è palindromo`)
    } else {
        console.log(`${userWord} non è palindromo`)
    }
}