//var con assegnato valore stringa
var nome = "Elisabetta";
//varie var nome con assegnati multipli valori
var nome = "Elisabetta",
    cognome = "Pendola",
    altezza = 1.74;
    //var con assegnato valore numero
    var piGreco = 3.14;
//fare operazione matematiche
    var somma = 1 + 3, // 4
        sottrazione = somma - 2, // 2
        moltiplicazione = somma * 2, // 8
        divisione = moltiplicazione / 4; // 2


    console.log(somma);
    console.log(sottrazione);
    console.log(moltiplicazione);
    console.log(divisione);

//ora proviamo a calcolare l'area del cerchio con due variabili e una funzione
var piGreco = 3.141592653589793,
    raggio = 2;

    //inserisco il calcolo dell'area dichiarando una funzione (prima dichiaro il nome funzione)

    function calcolaArea(raggio) {
    	return Math.pow(raggio, 2) * piGreco;
    }

    var area = calcolaArea(raggio);

    console.log(area);


//non ci ho capito niente
