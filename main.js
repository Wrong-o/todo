let todoList = ["Make Todolist", "Make next project"];

let listElement = document.getElementById("todoList");

todoList.forEach(item => {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  listElement.appendChild(listItem);
});
