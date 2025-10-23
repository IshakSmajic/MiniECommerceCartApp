// Images not working at this time.
const products = [
    {
        id: "prod1",
        name: "Dawn of War 1",
        category: "Videogame",
        price: 40
    },
    {
        id: "prod2",
        name: "Dawn of War 3",
        category: "Videogame",
        price: 40
    },
    {
        id: "prod3",
        name: "Dawn of War 3",
        category: "Videogame",
        price: 40
    },
    {
        id: "prod4",
        name: "Dawn of War 4",
        category: "Videogame",
        price: 40
    },
    {
        id: "prod5",
        name: "Dark Imperium",
        category: "Book",
        price: 19.99
    },
    {
        id: "prod6",
        name: "Helsreach",
        category: "Book",
        price: 25
    },
    {
        id: "prod7",
        name: "Black Templar Combat Patrol",
        category: "Miniature",
        price: 175
    }
]

const productsContainer = document.getElementById("productsContainer");
function renderProducts(){

    productsContainer.innerHTML="";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product");

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;

        const button = document.createElement("button");
        button.textContent = "Add to cart";

        card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);
    productsContainer.appendChild(card);
    });
}
renderProducts();