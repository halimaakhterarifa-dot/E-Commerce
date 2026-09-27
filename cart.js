const cartToggle = document.querySelector("#cart-toggle");
const productCheckboxes = document.querySelectorAll(".bag-check");

productCheckboxes.forEach((productCheckbox) => {
  productCheckbox.addEventListener("change", () => {
    if (productCheckbox.checked) {
      cartToggle.checked = true;
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartToggle.checked) {
    cartToggle.checked = false;
  }
});
