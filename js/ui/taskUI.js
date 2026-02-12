import {
  listenTasksRealtime,
  updateTaskInFirestore,
} from "../services/taskService.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardWaiting = document.getElementById("Card-Waiting");
  const cardProgress = document.getElementById("Card-Progress");
  const cardCompleted = document.getElementById("Card-Completed");

  const cardContainer = document.getElementById("Card-Container");

  function getPriority(priority) {
    if (priority === "High") return "bg-danger";
    else if (priority === "Medium") return "bg-warning text-dark";
    else return "bg-success";
  }

  // Index page only shows waiting tasks //
  listenTasksRealtime((tasks) => {
    const waitingTasks = tasks.filter((task) => task.status === "waiting");

    cardWaiting.innerHTML = "";
    waitingTasks.forEach((task) => {
      const badgeClass = getPriority(task.priority);

      const cardHtml = `
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">
              Priority: <span class="badge ${badgeClass}">${task.priority}</span>
            </p>
            <p class="card-text">Due: <strong>${task.dueDate}</strong></p>
            <button class="btn btn-sm btn-outline-secondary me-2 start-btn" data-task-id="${task.id}">Start</button>
            <button class="btn btn-sm btn-outline-danger delete-btn" data-task-id="${task.id}">Delete</button>
          </div>
        </div> 
      `;

      cardWaiting.append(
        document.createRange().createContextualFragment(cardHtml),
      );
    });
  });

  // Progress page shows in-progress tasks //
  listenTasksRealtime((tasks) => {
    const inProgressTasks = tasks.filter(
      (task) => task.status === "in-progress",
    );
    cardProgress.innerHTML = "";

    inProgressTasks.forEach((task) => {
      const badgeClass = getPriority(task.priority);

      const cardHtml = `
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">
              Priority: <span class="badge ${badgeClass}">${task.priority}</span>
            </p>
            <p class="card-text">Due: <strong>${task.dueDate}</strong></p>
              <button class="btn btn-sm btn-outline-danger complete-btn" data-task-id="${task.id}">Complete</button>
              <button class="btn btn-sm btn-outline-danger delete-btn" data-task-id="${task.id}">Delete</button>
              <button class="btn btn-sm btn-outline-danger continue-btn" data-task-id="${task.id}">Continue</button>
          </div>
        </div>
      `;

      cardProgress.append(
        document.createRange().createContextualFragment(cardHtml),
      );
    });
  });

  // Completed page shows completed tasks //
  listenTasksRealtime((tasks) => {
    const completedTasks = tasks.filter((task) => task.status === "completed");
    cardCompleted.innerHTML = "";

    completedTasks.forEach((task) => {
      const badgeClass = getPriority(task.priority);

      const cardHtml = `
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">
              Priority: <span class="badge ${badgeClass}">${task.priority}</span>
            </p>
            <p class="card-text">Due: <strong>${task.dueDate}</strong></p>
              <button class="btn btn-sm btn-outline-danger delete-btn" data-task-id="${task.id}">Delete</button>  
          </div>
        </div>
      `;

      cardCompleted.append(
        document.createRange().createContextualFragment(cardHtml),
      );
    });
  });
});
