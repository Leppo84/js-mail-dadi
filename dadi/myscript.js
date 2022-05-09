console.log("debug 02")

// genero due numeri da 1 a 6

const diceUser= Math.floor(Math.random()*6)+1;
console.log("Hai tirato: " + diceUser)

const dicePc= Math.floor(Math.random()*6)+1;
console.log("Il PC ha tirato: " + dicePc)

// verifico se il numero dell'utente è il più alto dei due
    
    if (diceUser>dicePc) {
        document.getElementById("result").innerHTML="Bravo! hai ottenuto un " + (diceUser) + ", con cui hai battuto il mio " + (dicePc) + "!";
    }
    else if (diceUser==dicePc) {
        document.getElementById("result").innerHTML="Quasi! hai fatto " + (diceUser) + ", come me!";
    }
    else {
        document.getElementById("result").innerHTML="Mi spiace looser! Con quel misero " + (diceUser) + ", hai perso dal mio " + (dicePc) + "! Riprova!";
    }
