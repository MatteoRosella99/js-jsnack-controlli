var parola1 , parola2;

//Input numeri dall'utente

parola1 = prompt("inserisci una parola");
parola2 = prompt("inserisci una seconda parola");

//Valutazione del numero maggiore

if(parola1.length > parola2.length){
  document.getElementById("tit").innerHTML = "La parola più lunga è: " + parola1 + "<br> La parola più corta è: " + parola2;
}
else if(parola1.length < parola2.length){
  document.getElementById("tit").innerHTML = "La parola più lunga è: " + parola2 + "<br> La parola più corta è: " + parola1;
}
else{
  document.getElementById("tit").innerHTML = "Le parole scelte sono lunghe uguali";
}
