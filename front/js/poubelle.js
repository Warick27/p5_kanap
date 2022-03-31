// // function prenomVerif() {
// //   let testPrenom = formPrenom.value.length === 0 || myRegex.test(formPrenom.value);
// //   if (testPrenom == false) {
// //     const prenomErreur = document.getElementById("firstNameErrorMsg");
// //     prenomErreur.innerHTML = "Veuillez entrer un prénom valide";
// //   } else {
// //     document.getElementById("firstNameErrorMsg").innerHTML = "";
// //     contact.prenom = formPrenom.value;
// //     console.log(contact.prenom);
// //   }
// // }

// // let sousTotal = Array.from(document.querySelectorAll("#totalPrice"));
// // let screenQuantity = Array.from(document.querySelectorAll("#totalQuantity"));


// //     event.preventDefault();
// //     let newArticlePrice = qte.value * localStoragePanier[i].prixUnitaire;
// //     console.log(qte.value);

// //     screenQuantity[i].textContent = "Qté: " + qte.value;
// //     localStoragePanier[i].quantity = parseInt(qte.value, 10);

// //     sousTotal[i].textContent =
// //       "Prix total pour cet article: " + newArticlePrice ;
// //       localStoragePanier[i].totalPrice = newArticlePrice;

// //     console.log(`le prix de ${localStoragePanier[i].name} et passé à ${newArticlePrice}`);

// //     // injectSommeQuant();
// //   });
// // });

// // let itemQuantity = Array.from(document.querySelectorAll(".itemQuantity"));
// // let sousTotal = Array.from(document.querySelectorAll("#totalPrice"));
// // let screenQuantity = Array.from(document.querySelectorAll("#totalQuantity"));

// // itemQuantity.forEach(function (qte, i) {
// //   qte.addEventListener("change", (event) => {
// //     event.preventDefault();
// //     let newArticlePrice = qte.value * localStoragePanier[i].prixUnitaire;
// //     console.log(qte.value);

// //     screenQuantity[i].textContent = "Qté: " + qte.value;
// //     localStoragePanier[i].quantity = parseInt(qte.value, 10);

// //     sousTotal[i].textContent =
// //       "Prix total pour cet article: " + newArticlePrice ;
// //       localStoragePanier[i].totalPrice = newArticlePrice;

// //     console.log(`le prix de ${localStoragePanier[i].name} et passé à ${newArticlePrice}`);

// //     // injectSommeQuant();
// //   });
// // });



// // Ecouter la saisie du champ input "itemQuantity", en cas de modification, faire une mise à jour du prix + du localStorage
// // ajouter une gestion des erreurs de saisie dans la quantité pour éviter des valeurs négatives
// // ajouter une fonction pour supprimer l'article / quand on met 0 dans la quantité, cela aura pour même effet que supprimer
// // Ecouter les champs firstName, lastName, address, city, email pour vérifier la saisie de l'utilisateur
// // exclure des caractères et des nombres ? Majuscules/minuscules

// // Initialisation de variables correspondant au tableau des quantités d'articles, des prix totaux de chaque article et du tale de la commande 
// let qteArticles;
// let tabPrice; 
// let totalCommande;
// let deleteButton = document.querySelector("deleteItem");
// let quantityChange = document.querySelector('input[name="itemQuantity"]');


// // Création d'une variable pour y stocker le contenu du panier ("basket") présent dans le localStorage
// let localStoragePanier = JSON.parse(localStorage.getItem("basket"));
// let ref = [];
// let panierFinal = [];
// // Requête à l'api pour récupérer les prix des articles
// fetch("http://localhost:3000/api/products")
// .then(function(res) {
//     if (res.ok) {
//         return res.json();
//         }
//     })
//     .then((products) => {
//       // Récupération des id, color et prix à partir de l'api
//         for (data of products) {
//           prixRef = {
//             id : data._id,
//             color : data.colors,
//             price : data.price,
//           };
//           // console.log(prixRef);
          
//           console.log(ref);
//           // console.log(localStoragePanier[0].id);
//           // ref = Object.keys(prisRef).map(function(key) {
//           //   return [element[key], prixRef[key]];
//           // });
//           // console.log(ref); 

//           // console.log(ObjCompare(localStoragePanier, prixRef));
//         //   
//         //   console.log(prixRef); 
//         //   panierFinal = prixRef.filter(function() {
//         //   console.log("lol"); 

//           for (i = 0; i < ref.length; i++){
//             if (ref[i].id == localStoragePanier[i].id) {
//                panierFinal.push(ref[i]);
//                 return console.log(panierFinal);
//               }; 
//           }

//         // };              
//       // } 
//       // function ObjCompare(obj1, obj2){
//       //   for (i=0 ; i < obj2.length; i++) {
//       //     if (obj1[i].id === obj2._id){
//       //       return i;
//       //   };
//       //   }
        
//     }   
    

//         // panierFinal = localStoragePanier.filter(function() {
//         // console.log("lol"); 
//         // for (i = 0; i < localStoragePanier.length; i++)
//         //   if (localStoragePanier[i].id == prixRef.prixId) {
//         //   return ;
//         //   };
//       // });     

//     })  

// // .catch(function(er) {
// //     console.log(er);
// // })

// // Lecture de la variable "localStoragePanier" contenant le tableau des articles ajouter par l'utilisateur puis injection dans le DOM
// for (data of localStoragePanier) {
//     document.getElementById("cart__items").innerHTML += 
//     `<article class="cart__item" data-id="${data.id}" data-color="${data.color}">
//                 <div class="cart__item__img">
//                   <img src="${data.img}" alt="${data.desc}">
//                 </div>
//                 <div class="cart__item__content">
//                   <div class="cart__item__content__description">
//                     <h2>${data.name}</h2>
//                     <p>${data.color}</p>
//                     <p>${data.prixUnitaire} €</p>
//                   </div>
//                   <div class="cart__item__content__settings">
//                     <div class="cart__item__content__settings__quantity">
//                       <p>Qté : </p>
//                       <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data.quantity}">
//                     </div>
//                     <div class="cart__item__content__settings__delete">
//                       <p class="deleteItem">Supprimer</p>
//                     </div>
//                   </div>
//                 </div>
//               </article>`   
//     }


// // modification des quantités des articles dans le panier

// let itemQuantity = Array.from(document.querySelectorAll(".itemQuantity"));

// itemQuantity.forEach(function (qte, i) {
//   qte.addEventListener("change", (event) => {
//     event.preventDefault();
//     localStoragePanier[i].quantity = parseInt(qte.value, 10);
//     console.log(localStoragePanier);
//     localStorage.setItem("basket", JSON.stringify(localStoragePanier));
//   });
// });

// // Création d'un tableau avec les quantité de chaque article, puis somme total de ce tableau et injection dans le DOM

// qteArticles = localStoragePanier.map((data) => parseInt(data.quantity), 10);
// console.log(qteArticles);
// const nombreInitial = 0;
// const nombreTotal = qteArticles.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     nombreInitial
// );
// document.getElementById("totalQuantity").innerHTML = nombreTotal;
// console.log(nombreTotal);

// // Création d'un tableau avec les prix totaux de chaque article, puis somme total de ce tableau et injection dans le DOM
// function totalPanier () {
// tabPrice = localStoragePanier.map((data) => data.prixTotal);
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

// // ******************************************************* Suppression d'un article *****************************************************************************

// // node list des boutons supprimer et ajout dans un tableau
// let articlesSupprimer = Array.from(document.querySelectorAll(".deleteItem"));

// // Nouveau tableau pour récupérer le tableau basket existant et contrôler les suppression
// let matchingBasket = [];

// // Fonction de suppression des articles
// function deleteProduct() {
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

// deleteProduct();

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


// *******************************************************************************************************

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
// // let panierFinal = [];




//     // Requête à l'api pour récupérer les prix des articles
// fetch("http://localhost:3000/api/products")
// .then(function(res) {
//     if (res.ok) {
//         return res.json();
//         }
//     })
//     .then((products) => {
//       // Récupération des id, color et prix à partir de l'api
//         for (data of products) {
//           prixRef = {
//             id : data._id,
//             // color : data.colors,
//             price : data.price,
//             name: data.name,
//             img: data.imageUrl,
//             desc: data.altTxt,
//           };

//           // console.log(prixRef); 
//           ref.push(prixRef);     

//           // ajouter le prix de l'objet directement dans l'html et faire le calcul à partir de là
//     }

// for (const el of ref){
//   for (let i = 0; i < localStoragePanier.length; i++) {
//     if (el.id == localStoragePanier[i].id){
//       console.log(el.price + " " + el.id);
//       // let il = localStoragePanier[i].quantity;
//       // let newEntry = el.push(il);
      
//       document.getElementById("cart__items").innerHTML += 
//       `<article class="cart__item" data-id="${el.id}" data-color="${el.color}">
//                   <div class="cart__item__img">
//                     <img src="${el.img}" alt="${el.desc}">
//                   </div>
//                   <div class="cart__item__content">
//                     <div class="cart__item__content__description">
//                       <h2>${el.name}</h2>
//                       <p></p>
//                       <p> ${el.price} €</p>
//                     </div>
//                     <div class="cart__item__content__settings">
//                       <div class="cart__item__content__settings__quantity">
                        
                        
//                       </div>
//                       <div class="cart__item__content__settings__delete">
//                         <p class="deleteItem">Supprimer</p>
//                       </div>
//                     </div>
//                   </div>
//                 </article>`   
      
//       // let quantite = localStoragePanier[i].quantity;
//       // console.log(quantite);
//       // let total = el.price * quantite;
//       // let plusplus = total;
//       // plusplus += plusplus;
//       // console.log(plusplus);
//       // el.push(localStoragePanier[i].quantity);
//       // for(element in el){
        
//       //   // document.querySelectorAll("#unit_price").innerHTML += `"${el.price}"`;
//       //   console.log(el.price)
//       //   el.price = localStoragePanier
        
//       // }
//     //   let total = [];
//     //  total = total.push(el.price * parseInt((localStoragePanier[i].quantity), 10));
//     // //  total += total;
//     //  console.log(total)

    
//     }
//     // for(car in lol){
//     //   document.getElementById("cart__items").innerHTML += (`<div>${el.price}</div>`)
      
//     // }  
//   }

// }

// // Lecture de la variable "localStoragePanier" contenant le tableau des articles ajouter par l'utilisateur puis injection dans le DOM
// for (data of localStoragePanier) {
//   document.querySelector('.cart__item__content__description').innerHTML += `<p>${data.color}</p>`;
//   document.querySelector('.cart__item__content__settings__quantity').innerHTML += `<p>Qté : </p>
//                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data.quantity}">`
//     // document.getElementById("cart__items").innerHTML += 
//     // `<article class="cart__item" data-id="${data.id}" data-color="${data.color}">
//     //             <div class="cart__item__img">
//     //               <img src="${data.img}" alt="${data.desc}">
//     //             </div>
//     //             <div class="cart__item__content">
//     //               <div class="cart__item__content__description">
//     //                 <h2>${data.name}</h2>
//     //                 <p>${data.color}</p>
//     //                 <p class = item_price></p>
//     //               </div>
//     //               <div class="cart__item__content__settings">
//     //                 <div class="cart__item__content__settings__quantity">
//     //                   <p>Qté : </p>
//     //                   <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data.quantity}">
//     //                 </div>
//     //                 <div class="cart__item__content__settings__delete">
//     //                   <p class="deleteItem">Supprimer</p>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </article>`   
//     }
//   //   console.log(ref);
//   //   for (i=0; i < localStoragePanier.length; i++) {
//   //     ref.find((ref) => ref.id == localStoragePanier[i].id);
//   //       console.log("le panier existe, je vérifie cette combinaison");
//   // // S'il existe dans la variable une même combinaison id/couleur, on fait la somme des produits (nouveau et déjà ajouté) et la somme total de ce produit
//   //   if (ref) {
//   //       console.log(typeof ref);
//   //       console.log(ref.price);
        
//   //       // console.log(produit.prixTotal);
        
//   //    } else {
//   //      console.log("il y a une erreur");
//   //      console.log(typeof produit);
//   //    }
//   //   }
// // forEach (el of ref.id) {
// //   console.log(el)
// // }
// // for (i=0; i < ref.length; i++) {
// //   console.log(ref[i].id);
// //   console.log(localStoragePanier[i].id)
// //   if (ref[i].id === localStoragePanier[i].id){
// // return ref[i].price
// //   } else {
// //     console.log("erreur");
// //   }
// // }

// // for (i=0; i < localStoragePanier.length; i++) {
// //   console.log(localStoragePanier[i].id);
// // }

    


//     // console.log(localStoragePanier);
//     // for (i=0; i < ref.length; i++) {
//     //   if (ref[i].id == localStoragePanier[i].id) {
//     //     return console.log(ref[i].id + " " + localStoragePanier[i].id + "lol")
//     //   }
//     // }
//     // const resultat = ref.find(produit => produit.id === localStoragePanier.id);
//     // console.log(resultat);
//     // for (i = 0; i < ref.length; i++){
//     //   if (ref[i].id == localStoragePanier[i].id) {
//     //     localStoragePanier[i].push(ref[i].price);
          
//     //     }; return console.log(localStoragePanier);
//     // }
//     })  

// .catch(function(er) {
//     console.log(er);
// })

// console.log(localStoragePanier)
//     // for (data of localStoragePanier) {
//     //   document.getElementById("cart__items").innerHTML += 
//     //   `<article class="cart__item" data-id="${data.id}" data-color="${data.color}">
//     //               <div class="cart__item__img">
//     //                 <img src="${data.img}" alt="${data.desc}">
//     //               </div>
//     //               <div class="cart__item__content">
//     //                 <div class="cart__item__content__description">
//     //                   <h2>${data.name}</h2>
//     //                   <p>${data.color}</p>
//     //                   <p id>${data.prixUnitaire} €</p>
//     //                 </div>
//     //                 <div class="cart__item__content__settings">
//     //                   <div class="cart__item__content__settings__quantity">
//     //                     <p>Qté : </p>
//     //                     <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data.quantity}">
//     //                   </div>
//     //                   <div class="cart__item__content__settings__delete">
//     //                     <p class="deleteItem">Supprimer</p>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             </article>`   
//     //   }


// // modification des quantités des articles dans le panier

// let itemQuantity = Array.from(document.querySelectorAll(".itemQuantity"));

// itemQuantity.forEach(function (qte, i) {
//   qte.addEventListener("change", (event) => {
//     event.preventDefault();
//     localStoragePanier[i].quantity = parseInt(qte.value, 10);
//     console.log(localStoragePanier);
//     localStorage.setItem("basket", JSON.stringify(localStoragePanier));
//   });
// });

// // Création d'un tableau avec les quantité de chaque article, puis somme total de ce tableau et injection dans le DOM

// qteArticles = localStoragePanier.map((data) => parseInt(data.quantity), 10);
// console.log(qteArticles);
// const nombreInitial = 0;
// const nombreTotal = qteArticles.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     nombreInitial
// );
// document.getElementById("totalQuantity").innerHTML = nombreTotal;
// console.log(nombreTotal);

// // Création d'un tableau avec les prix totaux de chaque article, puis somme total de ce tableau et injection dans le DOM
// function totalPanier () {
// tabPrice = localStoragePanier.map((data) => data.prixTotal);
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

// // ******************************************************* Suppression d'un article *****************************************************************************

// // node list des boutons supprimer et ajout dans un tableau
// let articlesSupprimer = Array.from(document.querySelectorAll(".deleteItem"));

// // Nouveau tableau pour récupérer le tableau basket existant et contrôler les suppression
// let matchingBasket = [];

// // Fonction de suppression des articles
// function deleteProduct() {
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

// deleteProduct();

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


