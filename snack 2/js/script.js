//Snack 2
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area e stampare il risultato con console.log
var triangolo = {
    base: 20,
    altezza: 30
}
//calcola ipotenusa
var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2) + Math.pow(triangolo.height,2))
//calcola perimetro e area
var perimetro = ipotenusa + triangolo.base +  triangolo.altezza 
console.log(perimetro)