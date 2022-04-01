// Création d'une variable pour y stocker l'id du produit
const pageId = new URL(location.href).searchParams.get("id");
console.log(pageId);
// Création d'une variable correspondant à la sélection de l'id "addToCart"
const cart = document.querySelector("#addToCart");

// Création d'une variable correspondant à la sélection de l'id "color-select" pour gérer les options de couleur
const selectColor = document.querySelector('select[name="color-select"]');
// Création d'une variable correspondant à la sélection de l'id "itemQuantity" pour gérer le choix de la quantité d'articles désirée
const selectQuantity = document.querySelector('input[name="itemQuantity"]');


// Requête de type GET vers l'api pour récupérer les données correspondant à l'id de la page/du produit
fetch(`http://localhost:3000/api/products/${pageId}`)
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})

// Récupération de 2 promesses, une pour l'affichage du produit, l'autre pour gérer l'envoi vers le panier
 .then(function(data) {
     displayProduct(data);
     sendProduct(data);
 })

// Prévention des erreurs si les promesses ne sont pas réolues
.catch(function(err) {
    console.log(err);
})

// Lecture des données de la promesse et injection de code html dans le DOM pour afficher les informations du produit
let displayProduct = (data) => {
    document.querySelector(".item__img").innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
     price.innerHTML = data.price
     description.innerHTML = data.description
     for (couleur of data.colors){
         colors.innerHTML += `<option value = "${couleur}">${couleur}</option>`;
     }
}

// Lecture des données de la promesse pour gérer l'envoi au panier des choix de l'utilisateur
let sendProduct = (data) => {
// 
    cart.addEventListener('click', (event) => {
        event.preventDefault();
// Vérification qu'une couleur et une quantité ont été choisies avant de poursuivre la création du panier
        if (selectColor.value == false) {
        confirm("Veuillez choisir une couleur"); 
        } else if (selectQuantity.value == 0) {
        confirm("Veuillez choisir la quantité désirée \n(un nombre compris entre 1 et 100)" );
        } else {
        alert("Le produit a bien été enregistré dans votre panier");

// Création de la variable qui servira pour le panier
        let panier = {
            id: pageId,
            name: data.name,
            img: data.imageUrl,
            desc: data.altTxt,
            color: selectColor.value,
            quantity: parseInt(selectQuantity.value, 10),

        }
        
        // console.log(panier);

// Création d'une variable correspondant au panier stocké dans le localStorage
        let localStoragePanier = JSON.parse(localStorage.getItem("basket"));
// Vérification de l'existence du LocalStorage, puis d'un produit spécifique (un id ET une couleur), 
        if (localStoragePanier) {
            let produit = localStoragePanier.find(
                (produit) => 
                produit.id == panier.id && produit.color == panier.color);
                console.log("le panier existe, je vérifie cette combinaison");
// S'il existe dans la variable une même combinaison id/couleur, on fait la somme des produits (nouveau et déjà ajouté) et la somme total de ce produit
            if (produit) {
                produit.quantity = produit.quantity + panier.quantity;
                produit.prixTotal += panier.prixTotal;
                // console.log(produit);
                // console.log(produit.prixTotal);
                localStorage.setItem("basket", JSON.stringify(localStoragePanier));
                return;
             } 
// si la combinaison n'est pas présente, on ajoute au localStorage le produit 
             localStoragePanier.push(panier);
             localStorage.setItem("basket", JSON.stringify(localStoragePanier));
                } else {
// Si le localStorage n'existe pas, création d'un nouveau tableau reprenant le produit à ajouter au panier, puis stockage dans le localStorage
                console.log("le panier n'existe pas, je crée une ligne produit");
                let contenu = [];
                contenu.push(panier);
                localStorage.setItem("basket", JSON.stringify(contenu));
            } 
        }
     });
};

// écoute du champs itemQuantity pour empêcher des erreurs de saisie : chiffre négatif