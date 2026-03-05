// Mảng sản phẩm ban đầu
let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Canh Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Li Xi", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

// Biến để theo dõi ID tiếp theo
let nextId = 7;

// Lấy các elements cần thiết
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");

// Hàm tạo một product item
function createProductItem(product) {
  const listItem = document.createElement("li");
  listItem.className = "product-item";
  listItem.dataset.id = product.id;

  const formattedPrice = product.price.toLocaleString("vi-VN");

  listItem.innerHTML = `
    <div class="product-info">
      <span class="product-name">${product.name}</span>
      <span class="product-price">${formattedPrice} VND</span>
    </div>
    <div class="product-actions">
      <button class="edit-price-btn">✏️ Sửa giá</button>
      <button class="delete-btn">🗑️ Xóa</button>
    </div>
  `;

  // Thêm event listener cho nút Sửa giá
  const editPriceBtn = listItem.querySelector(".edit-price-btn");
  editPriceBtn.addEventListener("click", () => handleEditPrice(product.id));

  // Thêm event listener cho nút Xóa
  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => handleDeleteProduct(product.id));

  return listItem;
}

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const productItem = createProductItem(product);
    productList.appendChild(productItem);
  });
}

function handleEditPrice(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const newPriceStr = prompt(
    `Nhập giá mới cho "${product.name}":\n(Giá hiện tại: ${product.price.toLocaleString("vi-VN")} VND)`,
    product.price,
  );

  if (newPriceStr === null || newPriceStr.trim() === "") {
    return;
  }

  const newPrice = parseFloat(newPriceStr);

  if (isNaN(newPrice) || newPrice < 0) {
    alert("Giá không hợp lệ! Vui lòng nhập số dương.");
    return;
  }

  product.price = newPrice;

  const productItem = document.querySelector(`[data-id="${productId}"]`);
  const priceElement = productItem.querySelector(".product-price");

  const formattedPrice = newPrice.toLocaleString("vi-VN");

  priceElement.style.animation = "priceUpdate 0.5s ease-out";
  priceElement.textContent = `${formattedPrice} VND`;

  setTimeout(() => {
    priceElement.style.animation = "";
  }, 500);
}

function handleDeleteProduct(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const isConfirmed = confirm(
    `Bạn có chắc muốn xóa sản phẩm "${product.name}" không?`,
  );

  if (isConfirmed) {
    products = products.filter((p) => p.id !== productId);

    const productItem = document.querySelector(`[data-id="${productId}"]`);
    productItem.style.animation = "slideOut 0.3s ease-out";

    setTimeout(() => {
      productItem.remove();
    }, 300);
  }
}

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const productName = productNameInput.value.trim();
  const productPrice = productPriceInput.value.trim();

  if (productName === "" || productPrice === "") {
    alert("Vui lòng nhập đầy đủ tên và giá sản phẩm!");
    return;
  }

  const newProduct = {
    id: nextId++,
    name: productName,
    price: parseFloat(productPrice),
  };

  products.push(newProduct);

  const productItem = createProductItem(newProduct);
  productList.appendChild(productItem);

  productNameInput.value = "";
  productPriceInput.value = "";
  productNameInput.focus();
});

renderProducts();
