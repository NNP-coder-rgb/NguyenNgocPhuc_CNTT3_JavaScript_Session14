const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Canh Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Li Xi", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let listElement = document.getElementById("product-list");

products.forEach((product) => {
  let listClass = document.createElement("li");
  listClass.innerHTML = `<div class = "product">
                            ${product.name}: ${product.price} 
                        </div>`;

  listElement.appendChild(listClass);
});
