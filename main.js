function addToCart(button) {
  // Find the closest card element
  const card = button.closest(".card");

  // Get the title and price from the card
  const title = card.querySelector(".card-title").textContent;
  const priceText = card.querySelector("#price").textContent.replace(/,/g, "");
  const price = parseFloat(priceText);
  const quantity = parseInt(card.querySelector("#quantity").value);

  // Create a cart item object
  const cartItem = {
    title: title,
    quantity: quantity,
    price: price
  };

  // Retrieve the cart from localStorage or initialize an empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the item already exists in the cart
  const existingItemIndex = cart.findIndex(item => item.title === title);

  if (existingItemIndex !== -1) {
    // If the item exists, update its quantity
    cart[existingItemIndex].quantity += quantity;

    // Move the updated item to the beginning of the array
    const updatedItem = cart.splice(existingItemIndex, 1)[0];
    cart.unshift(updatedItem);
  } else {
    // If the item doesn't exist, add it to the beginning of the cart
    cart.unshift(cartItem);
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Alert the user and redirect to the checkout page
  alert("Thank you for your purchase!");
  window.location.href = "./checkout.html";
}
