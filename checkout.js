// checkout.js
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
  
    let totalPrice = 0;
  
    // Display each item in the cart
    cartItems.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("card", "mb-3");
      itemElement.innerHTML =
        `<div class="card-body">
           <h5 class="card-title">${item.title}</h5>
           <p class="card-text">Quantity: ${item.quantity}</p>
           <p class="card-text">Price: Rs.${(item.price * item.quantity).toFixed(2)}</p>
         </div>`;
      cartItemsContainer.appendChild(itemElement);
      totalPrice += item.price * item.quantity;
    });
  
    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
  
    // Add an event listener to the proceed button
    const proceedButton = document.getElementById("proceed-button");
    proceedButton.addEventListener("click", function () {
      // Clear the cart and redirect to a thank you page
      localStorage.removeItem("cart");
      window.location.href = "./thankyou.html";
    });
  
    // Add an event listener to the back button
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", function () {
      // Redirect to the previous page or home page
      window.history.back(); // Go back to the previous page in history
      // Alternatively, you can redirect to a specific page like:
      // window.location.href = "./index.html";
    });
  });
  
  