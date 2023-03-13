console.log("JS OK");

//****Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:per i multipli di 3 stampi “Fizz” al posto del numero per i multipli di 5 stampi “Buzz”per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

/*1 - Prendo gli elementi in pagina.
2 - Creo un ciclo in console con i numeri da 1 a 100.
3 - Creo un'istruzione condizionale.
4 - Stampo le variabili in pagina.*/


//!PRENDO L'ELEMENTO IN PAGINA

let element = document.getElementById('element');

//CREO UN CICLO CON I NUMERI DA 1 A 100

let fizzBuzz = "fizzBuzz";
let fizz = "fizz";
let buzz = "buzz";

//!VARIABILI

let content = "";

for (let i=i; i<= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(fizzBuzz);
        content += `
    }
}
