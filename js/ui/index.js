
document.addEventListener('DOMContentLoaded', () => {


const addTaskBtn = document.getElementById('add-task-btn');
const taskFormOverlay = document.getElementById('task-form-overlay');


addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taskFormOverlay.style.display = 'flex';

});

const sidebarEl = document.getElementById('sidebar');
const sidebar = new bootstrap.Offcanvas(sidebarEl);

sidebarEl.addEventListener('click', (e) => {
    if (taskFormOverlay.style.display === "flex") {
        sidebar.hide();
    }
});

const cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taskFormOverlay.style.display = 'none';
});




const title = document.getElementById('taskInput');
const priority = document.getElementById('taskPriority');
const dueDate = document.getElementById('taskDeadline');


const summitTaskBtn = document.getElementById('Summit-task');
const cardContainer = document.getElementById('Card-Container');

summitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let badgeClass;
    if (priority.value === 'High') badgeClass = 'bg-danger';
    else if(priority.value === 'Medium') badgeClass = 'bg-warning text-dark';
    else badgeClass = 'bg-success';

    
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

   cardContainer.append(document.createRange().createContextualFragment(cardHtml));

    
    taskFormOverlay.style.display = 'none';
    title.value = '';
    priority.value = '';
    dueDate.value = '';

});


});

