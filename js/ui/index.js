
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






});

