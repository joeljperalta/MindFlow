import {
  listenTasksRealtime,
  updateTaskInFirestore,
} from "../services/taskService.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardWaiting = document.getElementById("Card-Waiting");
  const cardProgress = document.getElementById("Card-Progress");
  const cardCompleted = document.getElementById("Card-Completed");

  // Index page only shows waiting tasks //

  listenTasksRealtime((tasks) => {
    const waitingTasks = tasks.filter((task) => task.status === "waiting");

    cardWaiting.innerHTML = "";
    waitingTasks.forEach((task) => {
      let badgeClass;
      if (task.priority === "High") badgeClass = "bg-danger";
      else if (task.priority === "Medium") badgeClass = "bg-warning text-dark";
      else badgeClass = "bg-success";

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
      let badgeClass;
      if (task.priority === "High") badgeClass = "bg-danger";
      else if (task.priority === "Medium") badgeClass = "bg-warning text-dark";
      else badgeClass = "bg-success";

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

  listenTasksRealtime((tasks) => {
    const completedTasks = tasks.filter((task) => task.status === "completed");
    cardCompleted.innerHTML = "";

    completedTasks.forEach((task) => {
      let badgeClass;
      if (task.priority === "High") badgeClass = "bg-danger";
      else if (task.priority === "Medium") badgeClass = "bg-warning text-dark";
      else badgeClass = "bg-success";

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
