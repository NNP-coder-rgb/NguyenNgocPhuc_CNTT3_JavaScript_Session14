const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const productName = productNameInput.value.trim();
  const productPrice = productPriceInput.value.trim();

  if (productName === "" || productPrice === "") {
    alert("Vui lòng nhập đầy đủ tên và giá sản phẩm!");
    return;
  }

  const product = {
    name: productName,
    price: parseFloat(productPrice),
  };

  const listItem = document.createElement("li");
  listItem.className = "product-item";

  const formattedPrice = product.price.toLocaleString("vi-VN");

  listItem.innerHTML = `
    <span class="product-name">${product.name}</span>
    <span class="product-price">${formattedPrice} VND</span>
  `;

  productList.appendChild(listItem);

  productNameInput.value = "";
  productPriceInput.value = "";

  productNameInput.focus();
});
