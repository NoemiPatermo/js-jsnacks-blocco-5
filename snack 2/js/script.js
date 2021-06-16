//Snack 2
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area e stampare il risultato con console.log
var triangolo = {
    base: 5,
    altezza: 10
}
//Math.sqrt serve a calcolare la radice quadrata Math.sqrt(9) darà 3
//Math.pow per le potenze 

//calcola ipotenusa
var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2) + Math.pow(triangolo.altezza,2))
console.log(ipotenusa)

//calcola perimetro 
var perimetro = ipotenusa + triangolo.base +  triangolo.altezza 
console.log(perimetro)

//calcola area
var area = (triangolo.base * triangolo.altezza) / 2
console.log(area)