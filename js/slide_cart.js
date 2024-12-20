document.addEventListener("DOMContentLoaded", () => {
  const openCartBtn = document.getElementById("open_cart_btn");
  const closeCartBtn = document.getElementById("close_btn");
  const sideCart = document.getElementById("sidecart");
  

  // Event listener to open the cart
  openCartBtn.addEventListener("click", () => {
    sideCart.classList.add("sidecart-open");
  

  });

  // Event listener to close the cart
  closeCartBtn.addEventListener("click", () => {
    sideCart.classList.remove("sidecart-open");
  

  });
});
