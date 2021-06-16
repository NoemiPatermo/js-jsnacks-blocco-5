//Snack 4 -
//Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
//nome   cognome   age   descrizione
//Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
//ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.
/*{
  nome: ‘Pippo’,
  cognome: ‘Baudo’,
  age: 80,
  descrizione: ‘’
} */

var listaStudenti = [
    {
        nome: "Gabriele",
        cognome: "Sanna",
        età: "21", 
        descrizione: ""
    },
    {
        nome: "Dayron",
        cognome:"Aguilera",
        età:"36",
        descrizione:""
    },
    {
        nome: "Noemi",
        cognome:"Patermo",
        età:"35",
        descrizione:""
    }
];
//Successivamente, con dei prompt chiediamo di volta in volta all'utente, la descrizione di ciascun studente
//salviamola quindi all'interno della sua proprietà.  (In un ciclo per ciascun studente)


for(var x = 0; x < listaStudenti.length; x++){
    listaStudenti[x].descrizione = prompt("Descrivi in poche battute lo studente");//così prendo descrizione
}
console.log(listaStudenti)
//Stampiamo con un console.log il risultato di questo array di studenti aggiornato.


//Bonus
//Visualizzare nell’html questi dati in una forma tabellare.
var ulElement = document.getElementById('student');

//ulElement.innerHTML = '<li>model: </li>'

var htmlString = '';

for (var k in listaStudenti) {  // ciclo nell'oggetto

    if (k === 'listaStudenti') { // qui scelgo l'array
        htmlString += '<li>' + k + ': ';

        for (var x = 0; x < listaStudenti[k].length; x++) { // ciclo l'array dei passengers
            htmlString += listaStudenti[k][x]['nome'] + ', ';
            htmlString += listaStudenti[k][x]['cognome'] + ', ';
            htmlString += listaStudenti[k][x]['età'] + ', ';
            htmlString += listaStudenti[k][x]['descrizione'] + ', ';
        }

        htmlString += '</li>';

    } else {
        htmlString += '<li>' + k + ': ' + listaStudenti[k] + '</li>'
    }
}

ulElement.innerHTML += htmlString;