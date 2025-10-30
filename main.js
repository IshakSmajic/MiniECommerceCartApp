const products = [
  { id: "prod1", name: "Dawn of War 1", category: "Videogame", image: "./images/DawnOfWar1Image.webp", price: 40 },
  { id: "prod2", name: "Dawn of War 2", category: "Videogame", image: "./images/DawnOfWar2Image.jpg", price: 40 },
  { id: "prod3", name: "Dawn of War 3", category: "Videogame", image: "./images/DawnOfWar3Image.png", price: 40 },
  { id: "prod4", name: "Dawn of War 4", category: "Videogame", image: "./images/DawnOfWar4Image.jpg", price: 40 },
  { id: "prod5", name: "Dark Imperium", category: "Book", image: "./images/DarkImperiumImage.jpg", price: 19.99 },
  { id: "prod6", name: "Helsreach", category: "Book", image: "./images/HelsreachImage.jpg", price: 25 },
  { id: "prod7", name: "Black Templar Combat Patrol", category: "Miniature", image: "./images/BlackTemplarCombatPatrolImage.jpg", price: 175 }
];


const productsContainer = document.getElementById("productsContainer");
const searchBar = document.getElementById("searchBar");
const homeBtn = document.getElementById("homeBtn");
const cartBtn = document.getElementById("cartBtn");
const cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
}


function renderProducts(filter = "") {
  productsContainer.innerHTML = "";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(product => {
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
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => addToCart(product));

    card.append(name, image, price, button);
    productsContainer.appendChild(card);
  });

  if (filtered.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No products found.";
    msg.style.textAlign = "center";
    productsContainer.appendChild(msg);
  }
}


homeBtn.addEventListener("click", () => renderProducts());
cartBtn.addEventListener("click", () => (window.location.href = "cart.html"));
searchBar.addEventListener("input", e => renderProducts(e.target.value));


renderProducts();
