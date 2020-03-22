var numero1 , numero2;
var output;

output = document.getElementById(tit);

//Input numeri dall'utente

numero1 = prompt("inserisci il primo numero");
numero2 = prompt("inserisci il secondo numero");

//Valutazione del numero maggiore

if(numero1 > numero2){
  output = numero1;
  document.getElementById("tit").innerHTML = "Il numero maggiore è: " + output;
}
else if(numero1 < numero2){
  output = numero2;
  document.getElementById("tit").innerHTML = "Il numero maggiore è: " + output;
}
else{
  document.getElementById("tit").innerHTML = "I numeri selezionati sono uguali";
}

//Stampa numero
