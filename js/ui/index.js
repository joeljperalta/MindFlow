import { addTaskToFirestore } from "../services/taskService.js";

document.addEventListener("DOMContentLoaded", () => {
  ///* UI Elements *///
  const cancelBtn = document.getElementById("cancel-btn");
  const addTaskBtn = document.getElementById("add-task-btn");
  const summitTaskBtn = document.getElementById("Summit-task");
  const taskFormOverlay = document.getElementById("task-form-overlay");

  //* Form Inputs *///
  const title = document.getElementById("taskInput");
  const priority = document.getElementById("taskPriority");
  const dueDate = document.getElementById("taskDeadline");

  //* Card Container *///
  const cardContainer = document.getElementById("Card-Container");

  // Initialize Bootstrap Offcanvas
  const sidebarEl = document.getElementById("sidebar");
  const sidebar = new bootstrap.Offcanvas(sidebarEl);

  // Event Listeners

  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showForm();
  });

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hideForm();
  });

  sidebarEl.addEventListener("click", (e) => {
    if (taskFormOverlay.style.display === "flex") {
      sidebar.hide();
    }
  });

  function showForm() {
    taskFormOverlay.style.display = "flex";
  }

  function hideForm() {
    taskFormOverlay.style.display = "none";
  }

  title.addEventListener("blur", () => {
    if (title.value.trim() !== "") {
      title.classList.add("is-valid");
    } else {
      title.classList.remove("is-valid");
    }
  });

  // Handle form submission

  summitTaskBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const task = {
      title: title.value,
      priority: priority.value,
      dueDate: dueDate.value,
      completed: false,
    };

    await addTaskToFirestore(task);
    hideForm();
  });
});
