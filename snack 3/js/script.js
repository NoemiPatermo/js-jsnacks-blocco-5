//Snack 3 - 1^ parte.
//Creare un array con tre numeri, calcolare la media di questi tre numeri.
var arrayNum = [1,2,3]
var totale = 0;
for (var x = 0; x < arrayNum.length; x++){
    totale += arrayNum[x];
}
var average = totale / arrayNum.length;
console.log(average);

/*Snack 3 - 2^ parte.
Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
nome
cognome
anno
punteggio
Calcolare il punteggio medio dei tre giocatori.*/
 var lakers =  [
     {nome: "Kobe", cognome: "Bryant", anno: "85", score:"96"},
     {nome: "Michael", cognome: "Jordan", anno: "84", score:"98"},
     {nome: "Lebron", cognome: "James", anno: "82", score:"95"},
    ];

    var punteggio = 0; 
    for (var x = 0; x < lakers.length; x++){
        punteggio += lakers[x].score;
    }
    var media = punteggio / lakers.length;
    console.log(media)