const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");
const searchInput = document.getElementById("search-input");

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("product-name").value.trim();
  const price = document.getElementById("product-price").value.trim();

  if (name === "" || price === "") return;

  const li = document.createElement("li");
  li.classList.add("product-item");
  li.textContent = `${name} - ${price} VND`;

  productList.appendChild(li);

  productForm.reset();
});

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".product-item");

  products.forEach(function (product) {
    const productName = product.textContent.toLowerCase();

    if (productName.includes(keyword)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
