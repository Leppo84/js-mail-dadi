// creo un elenco mail e lo rendo un array

const mailingList = ["goofy@yahoo.it", "mickey.mouse@gmail.it", "minnie@tiscali.it", "tap@gmail.com", "tip@gmail.com"];
console.log("Topolinia mail: " +mailingList)

// faccio inserire la mail all'utente (form o prompt?)

const userMail= prompt("inserire mail");
console.log("Usermail:" + userMail)

// genero un ciclo per verificare se la mail è contenuta nell'elenco

for (let index = 0; index < mailingList.length; index++) {
    let element = mailingList[index];
    
    // document.getElementById("check_mail").innerHTML="Ci dispiace, " + (userMail) + " non risulta essere una e-mail di Topolinia.";

    if (element===userMail) {
        document.getElementById("check_mail").innerHTML="Benvenuto/a in Topolinia mail!";
        console.log("mailcheck: " + element);
    }
}