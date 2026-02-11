import { listenTasksRealtime } from "../services/taskService.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("Card-Container");

  listenTasksRealtime((tasks) => {
    cardContainer.innerHTML = "";

    tasks.forEach((task) => {
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
                 <button class="btn btn-sm btn-outline-secondary me-2 complete-btn">Complete</button>
            <button class="btn btn-sm btn-outline-danger delete-btn">Delete</button>
          </div>
        </div>
      `;

      cardContainer.append(
        document.createRange().createContextualFragment(cardHtml),
      );
    });
  });
});
