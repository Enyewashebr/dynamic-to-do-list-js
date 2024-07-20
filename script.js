const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    const taskString = taskText.toString().trim(); // Convert taskText to a string and trim whitespace

    if (taskString === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskString; // Display the task text

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", () => {
      li.remove();
      removeTask(taskString);
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskString);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  function removeTask(taskText) {
    const taskString = taskText.toString().trim(); // Convert taskText to a string and trim whitespace

    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const taskIndex = storedTasks.indexOf(taskString);
    if (taskIndex !== -1) {
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  addButton.addEventListener("click", () => {
    addTask(taskInput.value);
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });
});
