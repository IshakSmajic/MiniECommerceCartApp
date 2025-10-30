window.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cartContainer");
  const backButton = document.getElementById("backButton");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.textContent = "Whooops! Your cart is empty.";
      return;
    }

    cart.forEach(item => {
      const row = document.createElement("div");
      row.classList.add("cart-item");

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.classList.add("cart-image");

      const info = document.createElement("div");
      info.classList.add("cart-info");
      info.innerHTML = `<strong>${item.name}</strong><br>$${item.price} × ${item.quantity}`;

      const remove = document.createElement("button");
      remove.textContent = "Remove";
      remove.classList.add("remove-btn");
      remove.addEventListener("click", () => {
        cart = cart.filter(p => p.id !== item.id);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });

      row.append(img, info, remove);
      cartContainer.appendChild(row);
    });

    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const totalEl = document.createElement("p");
    totalEl.classList.add("cart-total");
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalEl);
  }

  renderCart();

  backButton.addEventListener("click", () => {
    window.location.href = "main.html";
  });
});
