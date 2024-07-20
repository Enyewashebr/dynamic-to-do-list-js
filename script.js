// Wait for the DOM content to load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select necessary DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Get the value from the task input field and trim any leading/trailing spaces
    const taskText = taskInput.value.trim();

    // Check if the task text is not empty
    if (taskText !== "") {
      // Create a new list item (li) element
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Create a new remove button element
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");

      // Add a click event listener to the remove button to delete the task
      removeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
      });

      // Append the remove button to the list item
      taskItem.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(taskItem);

      // Clear the task input field
      taskInput.value = "";
    } else {
      // Alert the user to enter a task
      alert("Please enter a task.");
    }
  }

  // Add a click event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add a keypress event listener to the task input field to allow adding tasks by pressing "Enter"
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Invoke the addTask function when the page loads
  addTask();
});
//new

// new
//  document.addEventListener("DOMContentLoaded", () => {
//    loadTasks();

//    const addTaskButton = document.getElementById("add-task");
//    const taskInput = document.getElementById("task-input");
//    const taskList = document.getElementById("task-list");

//    addTaskButton.addEventListener("click", addTask => {
//      const taskText = taskInput.value.trim();
//      if (taskText) {
//        addTask(taskText);
//        taskInput.value = "Task";
//      }
//    });

//    function loadTasks() {
//      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//      storedTasks.forEach((taskText) => addTask(taskText, false));
//    }

//    function addTask(taskText, save = true) {
//      const taskElement = document.createElement("div");
//      taskElement.classList.add("task");

//      const taskTextElement = document.createElement("span");
//      taskTextElement.textContent = taskText;

//      const removeButton = document.createElement("button");
//      removeButton.textContent = "Remove";
//      removeButton.addEventListener("click", () => {
//        removeTask(taskElement);
//      });

//      taskElement.appendChild(taskTextElement);
//      taskElement.appendChild(removeButton);
//      taskList.appendChild(taskElement);

//      if (save) {
//        saveTasksToLocalStorage(taskText);
//      }
//    }

//    function removeTask(taskElement) {
//      taskList.removeChild(taskElement);
//      updateTasksInLocalStorage(taskElement.querySelector("span").textContent);
//    }

//    function saveTasksToLocalStorage(taskText) {
//      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//      storedTasks.push(taskText);
//      localStorage.setItem("tasks", JSON.stringify(storedTasks));
//    }

//    function updateTasksInLocalStorage(taskText) {
//      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//      const updatedTasks = storedTasks.filter((task) => task !== taskText);
//      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//    }
//  });
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  // Other initialization code

  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", handleAddTask);

  const taskList = document.getElementById("taskList");
  taskList.addEventListener("click", handleRemoveTask);
});

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false));
}

function addTask(taskText, save = true) {
  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}

function handleAddTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
}

function handleRemoveTask(event) {
  if (event.target.classList.contains("remove-button")) {
    const taskItem = event.target.parentNode;
    const taskText = taskItem.textContent;
    removeTask(taskItem);
    removeFromLocalStorage(taskText);
  }
}

function removeTask(taskItem) {
  taskItem.remove();
}

function removeFromLocalStorage(taskText) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const index = storedTasks.indexOf(taskText);
  if (index > -1) {
    storedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}
