const products = [
  {
    id: 1,
    name: "Bánh Chưng Tranh Khúc",
    price: 150000,
    img: "./img/banhchung.webp",
  },
  { id: 2, name: "Giò Lụa Ước Lễ", price: 180000, img: "./img/giolua.jpg" },
  {
    id: 3,
    name: "Cành Đào Nhật Tân",
    price: 500000,
    img: "./img/canhdao.webp",
  },
  { id: 4, name: "Mứt Tết Thập Cẩm", price: 120000, img: "./img/muttet.webp" },
  { id: 5, name: "Lì Xì May Mắn", price: 20000, img: "./img/lixi.webp" },
  { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000, img: "./img/duahau.jpg" },
];

let totalMoney = 0;

const productListDOM = document.getElementById("product-list");
const cartListDOM = document.getElementById("cart-list");
const totalPriceDOM = document.getElementById("total-price");

function formatMoney(amount) {
  return amount.toLocaleString("vi-VN") + " đ";
}

let renderProducts = () => {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatMoney(product.price)}</p>
            <button class="btn-add" id="btn-add-${product.id}">Thêm vào giỏ</button>
        `;

    productListDOM.appendChild(card);

    const btn = card.querySelector(`#btn-add-${product.id}`);

    btn.addEventListener("click", function () {
      addToCart(product);
    });
  });
};

renderProducts();
