compteur=4; // variable globale
function ajouter(){
    var item = document.getElementById("desc").value;         // ajouter le texte
    var valeur = document.getElementById("valeur").value;     // ajouter le prix
    let nouveauP = document.createElement("p");              // créer une balise p
    let nouveauSpan = document.createElement("span");
    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe
    nouveauSpan.innerText = valeur + "$";
    document.getElementById("maListe").append(nouveauP);
    nouveauP.append(nouveauSpan);   // mettre le span a la fin

    // mettre le total a jour
    let ancienPrix = document.getElementById("tot").innerText;
    let nouveauPrix = +ancienPrix + +valeur;                              // +variable : convertir en numérique
    document.getElementById("tot").innerText = nouveauPrix;

    // Créer des nouveaux input hidden dans le formulaire pour envoyer par courriel
    nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("hidden", true);
    nouveauInput.setAttribute("name", "item "+compteur);
    nouveauInput.setAttribute("value", item);
    document.forms[0].append(nouveauInput);
    compteur++;
}
function ajouterEmail(){
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
}
function effacer(){
document.forms[0].action = "";
}

console.log("Bonjour");


