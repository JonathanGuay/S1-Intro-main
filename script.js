function ajouter(){
    var item = document.getElementById("desc").value;         // ajouter le texte
    var valeur = document.getElementById("valeur").value;     // ajouter le prix
    let nouveauP = document.createElement("p");              // créer une balise p
    let nouveauSpan = document.createElement("span");
    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe
    nouveauSpan.innerText = valeur + "$";
    document.getElementById("maListe").append(nouveauP);
    nouveauP.append(nouveauSpan);   // mettre le span a la fin

    // alert("L'item est bien ajouté"); //pop-up

    // mettre le total a jour
    let ancienPrix = document.getElementById("tot").innerText;
    let nouveauPrix = +ancienPrix + +valeur;                              // +variable : convertir en numérique
    document.getElementById("tot").innerText = nouveauPrix;


    //nouveauInput = document.createElement("input");
    //nouveauInput.setAttribute("value", item);
    //nouveauInput.setAttribute("hidden", true);
    //nouveauInput.setAttribute("name", "item "+compteur);
    //compteur++;

}

console.log("Bonjour");


