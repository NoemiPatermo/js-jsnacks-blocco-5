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

var datiStudente = '';
var ulElement = document.getElementById('student');

for(var x = 0; x < listaStudenti.length; x++){
    listaStudenti[x].descrizione = prompt("Descrivi in poche battute lo studente");//così prendo descrizione

    datiStudente += "<li> Dati studente:  "  // Accesso agli elementi dell'array ovvero gli oggetti, così da 
    datiStudente += listaStudenti[x]["nome"]+ " "     //compiere singole operazioni su ognuno degli oggetti su cui cicli
    datiStudente += listaStudenti[x]["cognome"]+ " "
    datiStudente += listaStudenti[x]["età"]+ " "        //funzionava anche scrivendo listaStudenti[i].nome
    datiStudente += listaStudenti[x]["descrizione"]+ " "  // listaStudenti[i].cognome 
    datiStudente += "</li>"
}
console.log(listaStudenti)
ulElement.innerHTML= datiStudente;

//Stampiamo con un console.log il risultato di questo array di studenti aggiornato.


//Bonus
//Visualizzare nell’html questi dati in una forma tabellare.      (fatto con li)






