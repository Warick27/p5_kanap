// page d'accueil
// pour l'ensemble des produits présents dans l'api, il faut :
let lien = document.createElement("a");
document.getElementById("items").appendChild(lien);
lien.classList.add("product");
// le lien renvoi vers la page produit
let fiche = document.createElement("article");
document.getElementsByClassName("product").appendchild(fiche);
fiche.classList.add("carte");
// contient l'image, le nom et la description du produit
let img = document.createElement("img");
document.getElementsByClassName("carte").appendchild(img);
// récupérer par l'id imageUrl
let titre = document.createElement("h3");
document.getElementsByClassName("carte").appendchild(titre);
// récupérer par l'id name
let intitule = document.createElement("p");
document.getElementsByClassName("carte").appendchild(intitule);
// récupérer par l'id description

// page produit
// il faut insérer une image dans l'id item__img avec un src correpondant à l'id de l'api "imageUrl", un alt correspondant à "allTxt" de l'api
document.getElementById("item__img").innerHTML;
// les choix de couleur de l'input est gérer par l'id "colors" de l'api