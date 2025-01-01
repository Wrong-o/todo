let todoList = ["Make Todolist", "Make next project"];

let listElement = document.getElementById("todoList");

todoList.forEach(item => {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  listElement.appendChild(listItem);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");

  let span = document.createElement("span");
  span.textContent = item;

  listItem.appendChild(checkbox);

  listElement.appendChild(listItem);
});
