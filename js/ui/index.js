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

  // Handle form submission
  summitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let badgeClass;
    if (priority.value === "High") badgeClass = "bg-danger";
    else if (priority.value === "Medium") badgeClass = "bg-warning text-dark";
    else badgeClass = "bg-success";

    const cardHtml = `
    <div class="card mb-3 shadow-sm">
        <div class="card-body">
            <h5 class="card-title">${title.value}</h5>
            <p class="card-text">
            Priority: <span class="badge ${badgeClass}">${priority.value}</span></p>

            <p class="card-text">Due: <strong>${dueDate.value}</strong></p>
            <button class="btn btn-sm btn-outline-secondary me-2 complete-btn">Complete</button>
            <button class="btn btn-sm btn-outline-danger delete-btn">Delete</button>
        </div>
    </div>
    `;

    cardContainer.append(
      document.createRange().createContextualFragment(cardHtml),
    );

    hideForm();
    title.value = "";
    priority.value = "";
    dueDate.value = "";
  });
});
