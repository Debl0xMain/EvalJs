const CheckText = new RegExp('^[a-zA-Z]{2,}$', 'i');
const CheckPostalCode = new RegExp('^[0-9]{5}$', 'i');
const CheckEmail = new RegExp('^[a-zA-Z0-9.-]+[@]+[a-zA-Z0-9.-]+[.]+[a-z]{2,10}$', 'i');
const CheckTextArea = new RegExp('^[a-zA-Z0-9.-_ ]{2,}$', 'i');

export const checkform = (e) => {
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var cpostal = document.getElementById('cp').value;
    var email = document.getElementById('email').value;
    let optiondisable = document.querySelector('option');
    let select = document.querySelector('select');
    var textarea = document.getElementById('votrequestion').value;
    optiondisable.setAttribute('hidden','');

    if (CheckText.test(nom.trim()) == false) {
        $("#msgnom").html("*Le nom rentré n'est pas valide");
        e.preventDefault();
    };

    if (CheckText.test(nom.trim()) == true) {
        $("#msgnom").html("<br>");
    };

    if (CheckText.test(prenom.trim()) == false) {
        $('#msgprenom').html("*Le prenom rentré n'est pas valide");
        e.preventDefault();
    };

    if (CheckText.test(prenom.trim()) == true) {
        $('#msgprenom').html("<br>");
    };

    if (document.getElementById('sexem').checked + document.getElementById('sexef').checked == false){
        $("#msgsexe").html("*Selectionné Homme ou Femme");
        e.preventDefault();
    };

    if (document.getElementById('sexem').checked || document.getElementById('sexef').checked == true){
        $("#msgsexe").html("<br>");
    };

    if (document.getElementById('daten').value == "") {
        $("#msgdaten").html("*Renseigne une date de naissance");
        e.preventDefault();
    };

    if (document.getElementById('daten').value != "") {
        $("#msgdaten").html("<br>");
    };

    if (CheckPostalCode.test(cpostal.trim()) == false) {
        $("#msgcpostal").html("*Renseigne un code postal a 5 chiffre");
        e.preventDefault();
    };
    
    if (CheckPostalCode.test(cpostal.trim()) == true) {
        $('#msgcpostal').html("<br>");
    };

    if (CheckEmail.test(email.trim()) == false) {
        $("#msgemail").html("*Renseigne une email valide (@ et . sont obligatoire)");
        e.preventDefault();
    };

    if (CheckEmail.test(email.trim()) == true) {
        $("#msgemail").html("<br>");
    };

    if (select.value == "Veuillez séléctionner un sujet") {
        $("#msgsujet").html("*Selectionné un sujet");
        e.preventDefault();
    };

    if (select.value != "Veuillez séléctionner un sujet") {
        $("#msgsujet").html("<br>");
    };

    if (CheckTextArea.test(textarea) == false) {
        $("#msgtext").html("*Renseigne votre question");
        e.preventDefault();
    };

    if (CheckTextArea.test(textarea) == true) {
        $("#msgtext").html("<br>");
    };

    if (document.getElementById('check').checked == false) {
        $("#msgbuton").html("*Vous n'avez pas accepte les conditions general");
        e.preventDefault();
    };

    if (document.getElementById('check').checked == true) {
        $("#msgbuton").html("<br>");
    };

    $('[id^="msg"]').css("color", "red");
    $('[id^="msg"]').css("margin-left", "30px");
    $('[id^="msg"]').css("font-size", ".815rem");
}

export const checkreset = () => {
    $('[id^="msg"]').html("<br>");
}