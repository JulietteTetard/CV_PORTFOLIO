/*window.open('mailto:test@example.com');*/

//déclaration des expressions régulières permettant de contrôler chaque champ.
var fnom = new RegExp(/^[A-Za-zéèëï]+$/);
var fprenom = new RegExp(/^[A-Za-zéèëï]+$/);
var femail = new RegExp(/^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/);
var fsujet = new RegExp(/^[A-Za-zéèëï]+$/);
var fdemande = new RegExp(/^[A-Za-zéèëï]+$/);

//fonction de vérification de saisie des champs
function checkForm(form1) {
    //Test nom
    if (!fnom.test(form1.nom.value)) {
        document.getElementById("erreurnom").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.nom.focus();
        return false;
    }

    //Test prénom
    if (!fprenom.test(form1.prenom.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.prenom.focus();
        return false;
    }

    //Test email
    if (!femail.test(form1.email.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreuremail").innerHTML = "Votre adresse email doit être valide (exemple@mail.com).";
        form1.email.focus();
        return false;
    }
    // Test sujet
    if (!fsujet.test(form1.sujet.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreuremail").innerHTML = "";
        document.getElementById("erreursujet").innerHTML = "Veuillez renseigner un sujet pour votre demande.";
        form1.sujet.focus();
        return false;
    }

    // Test demande
    if (!fdemande.test(form1.demande.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreuremail").innerHTML = "";
        document.getElementById("erreursujet").innerHTML = "";
        document.getElementById("erreurdemande").innerHTML = "Veuillez préciser votre demande.";
        form1.demande.focus();
        return false;
    }

    //Confirme que le formulaire a bien été envoyé.
    else {
        alert("Le formulaire a bien été envoyé.");
    }
}