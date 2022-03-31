// // Initialisation de variables correspondant au tableau des quantités d'articles, des prix totaux de chaque article et du tale de la commande 
// let qteArticles;
// let tabPrice; 
// let totalCommande;
// let deleteButton = document.querySelector("deleteItem");
// let quantityChange = document.querySelector('input[name="itemQuantity"]');
// let localStoragePanier = JSON.parse(localStorage.getItem("basket"));

// // Création d'une variable pour y stocker le contenu du panier ("basket") présent dans le localStorage
// // let localStoragePanier = JSON.parse(localStorage.getItem("basket"));
// let ref = [];
// let panierFinal = [];

// // Requête à l'api pour récupérer les prix des articles
// fetch("http://localhost:3000/api/products")
//   .then(function(res) {
//       if (res.ok) {
//           return res.json();
//           }
//       })
//       .then((products) => {
//         // Récupération des id, color et prix à partir de l'api
//           for (data of products) {
//             prixRef = {
//               id : data._id,
//               price : data.price,
//               name: data.name,
//               img: data.imageUrl,
//               desc: data.altTxt,
//             };

//             ref.push(prixRef);     

//             // ajouter le prix de l'objet directement dans l'html et faire le calcul à partir de là
//       }
// // on boucle sur le tableau ref contenant l'ensemble des produits obtenues lors du fetch
//       for (const el of ref){
//         // On teste l'existence des id contenu dans le localStorage dans le tableau ref
//         for (let i = 0; i < localStoragePanier.length; i++) {
//           // Si l'id du panier existe, on injecte dans le DOM ses caractéristiques
//           if (el.id == localStoragePanier[i].id){
//             console.log(el.price + " " + el.id);
//             panierFinal.push({
//               prix: el.price, 
//               quantité: localStoragePanier[i].quantity,
//               sousTotal: (el.price) * parseInt(localStoragePanier[i].quantity, 10)
//             });
//             document.getElementById("cart__items").innerHTML += 
//             `<article class="cart__item" data-id="${el.id}" data-color="${el.color}">
//                         <div class="cart__item__img">
//                           <img src="${el.img}" alt="${el.desc}">
//                         </div>
//                         <div class="cart__item__content">
//                           <div class="cart__item__content__description">
//                             <h2>${el.name}</h2>
//                             <p>${localStoragePanier[i].color}</p>
//                             <p> ${el.price} €</p>
//                           </div>
//                           <div class="cart__item__content__settings">
//                             <div class="cart__item__content__settings__quantity">
//                             <p>Qté : </p>
//                               <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${localStoragePanier[i].quantity}">
//                             </div>
//                             <div class="cart__item__content__settings__delete">
//                               <p class="deleteItem">Supprimer</p>
//                             </div>
//                           </div>
//                         </div>
//                       </article>`  
//           }  
//         } 
//       } totalPanier ()
//       totalArticles ()
//       qteUpdate ()
      
//       // function qui gère les boutons supprimer des articles
//       deleteProduct ()
//       })  
//   .catch(function(er) {
//       console.log(er);
//   })

// console.log(panierFinal)

// // function majQuantity (){
// //   let newQuantity = Array.from(document.querySelectorAll(".itemQuantity"));
// //   for (let i = 0; i < newQuantity.length; i++) {
// //     newQuantity.addEventListener('change', (e) => {
// //       localStoragePanier[i] = e.target.value;
// //     } )
// //   }
// // }

// // Création d'un tableau avec les quantité de chaque article, puis somme total de ce tableau et injection dans le DOM
// // doit renvoyer la valeur changer dans le localSTorage
// function totalArticles () {
//   qteArticles = localStoragePanier.map((data) => parseInt(data.quantity), 10);
//   console.log(qteArticles);
//   const nombreInitial = 0;
//   const nombreTotal = qteArticles.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       nombreInitial
//   );
//   document.getElementById("totalQuantity").innerHTML = nombreTotal;
//   // console.log(nombreTotal);
// }

          

// // A MODIFIER POUR CORRESPONDRE A LA NOUVELLE SITUATION Création d'un tableau avec les prix totaux de chaque article, puis somme total de ce tableau et injection dans le DOM
// function totalPanier () {
// tabPrice = panierFinal.map((data) => data.sousTotal);
// console.log(tabPrice);
// const panierInitial = 0;
// const sommeTotal = tabPrice.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   panierInitial
// );
// document.getElementById("totalPrice").innerHTML = sommeTotal;
// console.log(sommeTotal);
// }

// totalPanier ();

// // function majQuantity (){

// //   let newQuantity = Array.from(document.querySelectorAll(".itemQuantity"));
// //   let changeQuantity = [];

// //   for (let i = 0; i < newQuantity.length; i++) {
// //     newQuantity.addEventListener('change', myFunction); 
// //     function myFunction () {
// //       changeQuantity = localStoragePanier;
// //       changeQuantity[i].quantity = e.target.value;
// //       console.log("lol" + e.target.value);
// //       localStoragePanier = localStorage.setItem("basket", JSON.stringify(changeQuantity));
// //       window.location.href = "cart.html";
// //     }  
// //   }
// // }

// function qteUpdate () {
//   let newQuantity = Array.from(document.querySelectorAll(".itemQuantity"));
//   console.log(newQuantity);

//   newQuantity.forEach(function (qte, i) {
//     qte.addEventListener("change", (event) => {
//         event.preventDefault();
//         let changeQuantity = [];
//         changeQuantity = localStoragePanier;
//         changeQuantity[i].quantity = parseInt(qte.value, 10);
//         totalPanier ()
//         totalArticles ()
//         localStoragePanier = localStorage.setItem("basket", JSON.stringify(changeQuantity));
//     });
//   });
// }



// // function majQuantity (){

// //   let newQuantity = Array.from(document.querySelectorAll(".itemQuantity"));
// //   let changeQuantity = [];

// //   for (let i = 0; i < newQuantity.length; i++) {
// //     newQuantity.addEventListener('click', (e) => {
// //       changeQuantity = localStoragePanier;
// //       changeQuantity[i].quantity = e.target.value;
// //       localStoragePanier = localStorage.setItem("basket", JSON.stringify(changeQuantity));
// //       window.location.href = "cart.html";
// //     } )
// //   }
// // }


// // ******************************************************* Suppression d'un article *****************************************************************************



// // Fonction de suppression des articles
// function deleteProduct() {
//   // node list des boutons supprimer et ajout dans un tableau
// let articlesSupprimer = Array.from(document.querySelectorAll(".deleteItem"));

// // Nouveau tableau pour récupérer le tableau basket existant et contrôler les suppression
// let matchingBasket = [];
//   for (let i = 0; i < articlesSupprimer.length; i++) {
//     // Écoute d'évènements "click" sur le tableau des boutons supprimer
//     articlesSupprimer[i].addEventListener("click", () => {

//       // Copie du tableau représentant le panier "localStoragePanier" dans le tableau tabControlDelete
//       matchingBasket = localStoragePanier;

//       // Array.prototype.splice() supprime un élément à chaque index [i] du tableau écouté
//       matchingBasket.splice([i], 1);

//       // Mise à jour du local storage
//       localStoragePanier = localStorage.setItem("basket", JSON.stringify(matchingBasket));

//       // Rafraîchissement de la page
//       window.location.href = "cart.html";
//     });
//   }
// }




// // ******************************************************* Contrôle de la soumission du formulaire *****************************************************************************

// let submitOrder = document.querySelector('.cart__order__form');

// // Ecoute de la soumission du formulaire
// submitOrder.addEventListener('submit', function (event) {
  
//   event.preventDefault();
// // Récupération des champs de saisie du formulaire
//   let formPrenom = document.getElementById('firstName');
//   let formNom = document.getElementById('lastName');
//   let formAdresse = document.getElementById('address');
//   let formVille = document.getElementById('city');
//   let formEmail = document.getElementById('email');
// // Création d'une variable "contact" regroupant les informations saisies
//   let contact = {
//     prenom: formPrenom,
//     nom: formNom,
//     adresse: formAdresse, 
//     ville: formVille, 
//     email: formEmail,
//   }

//   // ReGex pour contrôler les saisies de l'utilisateur
//   let myRegex = /^[a-zA-Z\é\è\ê-\s]{2,20}$/;
//   let myRegexAdresse = /^[\w\é\è\ê-\s]{2,50}$/;
//   let myRegexEmail = /^[\w!#$%&‘*+–/=?^_`.{|}~]+@[\w-]+[.]([\w-]){2,4}$/

//   // Fonction de vérification du prénom et affichage d'un message en cas d'erreur de saisie par rapport aux règles fixées
//   function prenomVerif() {
//     let testPrenom = formPrenom.value.length === 0 || myRegex.test(formPrenom.value);
//     if (testPrenom == false) {
//       document.getElementById("firstNameErrorMsg").innerHTML = "Veuillez entrer un prénom valide";
//     } else {
//       document.getElementById("firstNameErrorMsg").innerHTML = "";
//       contact.prenom = formPrenom.value;
//     }
//   }
// // Fonction de vérification du nom et affichage d'un message en cas d'erreur de saisie par rapport aux règles fixées
//   function nomVerif() {
//     let testNom = formNom.value.length === 0 || myRegex.test(formNom.value);
//     if (testNom == false) {
//       document.getElementById("lastNameErrorMsg").innerHTML = "Veuillez entrer un nom valide";
//     } else {
//       document.getElementById("lastNameErrorMsg").innerHTML = "";
//       contact.nom = formNom.value;
//     }
//   }
// // Fonction de vérification de l'adresse et affichage d'un message en cas d'erreur de saisie par rapport aux règles fixées
//   function adresseVerif() {
//     let testAdresse = formAdresse.value.length === 0 || myRegexAdresse.test(formAdresse.value);
//     if (testAdresse == false) {
//       document.getElementById("addressErrorMsg").innerHTML = "Veuillez entrer une adresse valide";
//     } else {
//       document.getElementById("addressErrorMsg").innerHTML = "";
//       contact.adresse = formAdresse.value;
//     }
//   }
// // Fonction de vérification de la ville et affichage d'un message en cas d'erreur de saisie par rapport aux règles fixées
//   function villeVerif() {
//     let testVille = formVille.value.length === 0 || myRegex.test(formVille.value);
//     if (testVille == false) {
//       document.getElementById("cityErrorMsg").innerHTML = "Veuillez entrer un nom de ville valide";
//     } else {
//       document.getElementById("cityErrorMsg").innerHTML = "";
//       contact.ville = formVille.value;
//     }
//   }
//  // Fonction de vérification de l'email et affichage d'un message en cas d'erreur de saisie par rapport aux règles fixées
//   function emailVerif() {
//     let emailVille = formEmail.value.length === 0 || myRegexEmail.test(formEmail.value);
//     if (emailVille == false) {
//       document.getElementById("emailErrorMsg").innerHTML = "Veuillez entrer une adress email valide";
//     } else {
//       document.getElementById("emailErrorMsg").innerHTML = "";
//       contact.email = formEmail.value;
//     }
//   }
//   prenomVerif ();
//   nomVerif ()
//   adresseVerif ()
//   villeVerif ()
//   emailVerif ();
//   console.log(contact);
// })


