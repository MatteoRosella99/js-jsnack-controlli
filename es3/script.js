var numero1 , numero2, numero3 , numero4 , numero5;
var somma;

//Input numeri dall'utente

numero1 = parseInt(prompt("inserisci il primo numero"));
numero2 = parseInt(prompt("inserisci il secondo numero"));
numero3 = parseInt(prompt("inserisci il terzo numero"));
numero4 = parseInt(prompt("inserisci il quarto numero"));
numero5 = parseInt(prompt("inserisci il quinto numero"));

//Valutazione del numero maggiore

somma = numero1 + numero2 + numero3 + numero4 + numero5;

//Stampa numero

document.getElementById("tit").innerHTML = "la somma dei 5 numeri è pari a " + somma;
