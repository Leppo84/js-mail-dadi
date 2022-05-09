// creo un elenco mail e lo rendo un array

const mailingList = ["goofy@yahoo.it", "mickey.mouse@gmail.it", "minnie@tiscali.it", "tap@gmail.com", "tip@gmail.com"];
console.log(mailingList)

// faccio inserire la mail all'utente (form o prompt?)

const userMail= prompt("inserire mail");
console.log(userMail)

// genero un ciclo per verificare se la mail è contenuta nell'elenco

for (let index = 0; index < mailingList.length; index++) {
    let element = mailingList[index];
    if (element===userMail) {
        document.getElementById("check_mail").innerHTML="Benvenuto/a in Topolinia mail!";
        console.log(element);
    }
    else {
        document.getElementById("check_mail").innerHTML="Ci dispiace, " + (userMail) + " non risulta essere una e-mail di Topolinia.";
    }
    console.log(element)
}