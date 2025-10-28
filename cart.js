window.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cartContainer");
  const backButton = document.getElementById("backButton");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
      cartContainer.textContent = "Whoops, looks like your cart is empty.";
      return;
    }
    cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - $${item.price} × ${item.quantity}`;
      cartContainer.appendChild(div);
    });
    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const totalDiv = document.createElement("p");
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalDiv);
  }

  renderCart();
//create a checker that states there are no items in cart if cart is empty 
  backButton.addEventListener("click", () => {
    window.location.href = "main.html";
  });
});
