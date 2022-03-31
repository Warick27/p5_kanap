// Requête de type GET vers l'api pour récupérer les données des produits
fetch("http://localhost:3000/api/products")
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
    .then((products) => {
        console.log(products);
// On boucle sur la promesse pour injecter chaque produit dans le DOM
        for (data of products) {
            console.log(data);
            document.getElementById("items").innerHTML += `<a href="./product.html?id=${data._id}">
            <article>
                <img 
                    src="${data.imageUrl}" 
                    alt="${data.altTxt}">
                <h3 class="productName">${data.name}</h3><p class="productDescription">${data.description}</p>
            </article>
                </a>`;
            }
    })

.catch(function(err) {
    console.log(err);
    // affichage d'un message à l'écran ?
})
