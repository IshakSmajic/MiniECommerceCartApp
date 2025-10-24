// Images not working at this time.
const products = [
    {
        id: "prod1",
        name: "Dawn of War 1",
        category: "Videogame",
        image: "./DawnOfWar1Image.webp",
        price: 40
    },
    {
        id: "prod2",
        name: "Dawn of War 2",
        category: "Videogame",
        image: "./DawnOfWar2Image.jpg",
        price: 40
    },
    {
        id: "prod3",
        name: "Dawn of War 3",
        category: "Videogame",
        image: "./DawnOfWar3Image.png",
        price: 40
    },
    {
        id: "prod4",
        name: "Dawn of War 4",
        category: "Videogame",
        image: "./DawnOfWar4Image.jpg",
        price: 40
    },
    {
        id: "prod5",
        name: "Dark Imperium",
        category: "Book",
        image: "./DarkImperiumImage.jpg",
        price: 19.99
    },
    {
        id: "prod6",
        name: "Helsreach",
        category: "Book",
        image: "./HelsreachImage.jpg",
        price: 25
    },
    {
        id: "prod7",
        name: "Black Templar Combat Patrol",
        category: "Miniature",
        image: "./BlackTemplarCombatPatrolImage.jpg",
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

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.classList.add("product-image");

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;

        const button = document.createElement("button");
        button.textContent = "Add to cart";
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(price);
    card.appendChild(button);
    productsContainer.appendChild(card);
    });
}
renderProducts();