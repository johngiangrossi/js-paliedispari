console.log('pari e dispari');

/*
ex 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// faccio scegliere all'utente se pari o dispari e inserire un numero
const userInputChoice = prompt('inserisci pari o dispari')  //string
const userInputNumber = Math.abs(parseInt(prompt('inserisci un numero intero tra 1 e 5'))) //number

console.log(`utente ha scelto ${userInputChoice}, ${userInputNumber}`)

const isUserInputChoice = !userInputChoice.includes('pari') && !userInputChoice.includes('dispari')  //boolean
const isValidNumberInput = !userInputNumber || userInputNumber < 1 || userInputNumber >= 6 //boolean

// genero un numero random tra 1 e 5
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);  //number
    const maxFloored = Math.floor(max);  //number
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const computerInput = getRandomIntInclusive(1, 5)  //number
console.log(`il numero inserito dal computer è ${computerInput}`)

// faccio la funzione per la somma dei numeri
/*
function getSum(num1, num2) {
    // sum = num1 + num2
    return num1 + num2  //number
}
*/
const getSum = (num1, num2) => num1 + num2
const sumInput = getSum(userInputNumber, computerInput)  //number
console.log(`la somma è ${sumInput}`);

// faccio la funzione per pari
/*
function isEven(number) {
    // evenRest = number % 2
    return number % 2 === 0 //boolean
}
*/
const isEven = (number) => number % 2 === 0
    

// verifico che l'input utente siano validi
if (isValidNumberInput || isUserInputChoice) {
    alert('inserire un valore valido')
} 

/*
let resultEvenOdd = ''

if (isEven(sumInput)) {
    resultEvenOdd = 'pari'  //string
} else {
    resultEvenOdd = 'dispari'  //string
}
*/
const resultEvenOdd = isEven ? 'pari' : 'dispari';


// verifico se utente ha indovinato
/*
if (userInputChoice === resultEvenOdd) {
    alert('hai vinto')
    console.log('hai vinto');
} else {
    alert('hai perso')
    console.log('hai perso');
}
*/
const resultPhrase = userInputChoice === resultEvenOdd ? 'hai vinto' : 'hai perso';
alert(resultPhrase)
console.log(resultPhrase);
