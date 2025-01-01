let todoList = ["Make Todolist", "Make next project"];  // Initial values

let todoListElement = document.getElementById("todoList");  // Renamed to avoid conflict

todoList.forEach(item => {
  let listItem = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");

  let span = document.createElement("span");
  span.textContent = item;

  listItem.appendChild(checkbox);
  listItem.appendChild(span);

  todoListElement.appendChild(listItem);
});

let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");

function addTask() {
  let taskText = taskInput.value.trim(); 

  if (taskText !== "") {
    let listItem = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");

    let span = document.createElement("span");
    span.textContent = taskText;

    listItem.appendChild(checkbox);
    listItem.appendChild(span);

    todoListElement.appendChild(listItem); 

    taskInput.value = "";  
  } else {
    alert("Please enter a task!"); 
  }
}

addButton.addEventListener("click", addTask);  

taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {  
    addTask();
  }
});

