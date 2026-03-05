const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Canh Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Li Xi", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const renderData = () => {
  let listElement = document.getElementById("product-list");

  listElement.innerHTML = "";

  products.forEach((product) => {
    let listItem = document.createElement("div");
    listItem.className = "product-item";

    const formattedPrice = product.price.toLocaleString("vi-VN");

    listItem.innerHTML = `
      <span class="product">
        ${product.name}: ${formattedPrice} VND
      </span>
      <button class="delete-btn" data-id="${product.id}">Xóa</button>
    `;

    const deleteBtn = listItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      handleDeleteProduct(product.id);
    });

    listElement.appendChild(listItem);
  });
};

const handleDeleteProduct = (idProduct) => {
  const product = products.find((p) => p.id === idProduct);
  const isConfirmed = confirm(`Bạn có chắc muốn xóa ${product.name}?`);

  if (!isConfirmed) return;

  let indexProduct = products.findIndex((product) => {
    return product.id === idProduct;
  });

  if (indexProduct !== -1) {
    products.splice(indexProduct, 1);
    renderData();
  }
};

renderData();
