// DOM

// Element
// Atr
// Text

console.log({ document });

// Element: Các thẻ

// Cách truy xuất thẻ trong JS

let itemElement = document.getElementById("item_01");
console.log(itemElement);

let listElement = document.getElementById("list");
console.log(listElement);

// Truy xuất bằng tên class
let listItemElement = document.getElementsByClassName("item");
console.log(listItemElement);
// bản chất trả về một mảng
console.log(listItemElement.length);

Array.from(listItemElement).forEach((element) => {
  console.log(element.innerText);
});

let listDivElement = document.getElementsByTagName("div");
console.log(listDivElement);

// Lấy Text trong element
listElement = document.getElementById("list");
console.log(listElement.innerText);
console.log(listElement.innerHTML);
console.log(listElement.textContent);

let todos = [
  { id: 0, name: "Chơi Game", isDone: true },
  { id: 1, name: "Xem Phim", isDone: false },
  { id: 2, name: "Nghe Nhạc", isDone: true },
];

// CRUD

// Read: đổ hết dữ liệu tên công việc ra giao diện HTML
const renderData = () => {
  // Lấy thẻ cha chứa dữ liệu
  let listElement = document.querySelector(".listMenu");

  // clear dữ liệu cũ
  listElement.innerHTML = ``;

  todos.forEach((todo) => {
    // createElement là thuộc tính để tạo ra thẻ mới
    let itemElement = document.createElement("li");
    itemElement.style.margin = "20px";
    itemElement.style.fontSize = "30px";

    // Thêm nội dung
    itemElement.innerHTML = `<div>
                                ${todo.name} 
                                <button onclick = "handleUpdateTodo(${todo.id})">Chỉnh sửa</button>
                                <button onclick = "handleDeleteTodo(${todo.id})">Xóa</button>
                            </div>
    `;

    // appendChild: Thêm vào DOM
    listElement.appendChild(itemElement);
  });
};

renderData();

// Create: Thêm công việc

let handleAddToDo = () => {
  let inputElement = document.getElementById("input_todo");
  let newName = inputElement.value;
  console.log(newName);

  let newTodo = {
    id: Date.now(),
    name: newName,
    is: false,
  };

  todos.push(newTodo);
  renderData();
  inputElement.value = "";
};

// handleAddToDo();

//event
let buttonAddElement = document.getElementsByTagName("button")[0];
buttonAddElement.addEventListener("click", handleAddToDo);

let inputElement = document.getElementById("input_todo");
inputElement.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    handleAddToDo();
  }
});

// Update
let handleUpdateTodo = (idTodo) => {
  let todo = todos.find((todo) => {
    return todo.id == idTodo;
  });
  inputElement.value = todo.name;

  buttonAddElement.innerText = "Chỉnh sửa công việc";

  // focus
  inputElement.focus();
  //.....
};

// Delete
const handleDeleteTodo = (idTodo) => {
  let indexTodo = idTodo.findIndex((todo) => {
    return todo.id === indexTodo;
  });

  todos.splice(index, 1);
  renderData();
};
