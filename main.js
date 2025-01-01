let todoList = ["Make Todolist", "Make next project"];  // Initial values

let todoListElement = document.getElementById("todoList");  // Renamed to avoid conflict

// Loop through the array to add items to the list
todoList.forEach(item => {
  let listItem = document.createElement("li");

  // Create a checkbox for the task
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");

  // Create a span for the task text
  let span = document.createElement("span");
  span.textContent = item;

  // Append the checkbox and text to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(span);

  // Append the list item to the todo list
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

    todoListElement.appendChild(listItem);  // Use renamed variable here

    taskInput.value = "";  // Clear input after adding task
  } else {
    alert("Please enter a task!");  // Alert if input is empty
  }
}

addButton.addEventListener("click", addTask);  // Add task when button is clicked

taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {  // Add task when Enter key is pressed
    addTask();
  }
});

