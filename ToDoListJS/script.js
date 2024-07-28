document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('add-task-button').addEventListener('click', addTask);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task.text, task.completed));
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTaskElement(taskText, false);
        saveTask(taskText, false);
        taskInput.value = '';
    }
}

function createTaskElement(text, completed) {
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    if (completed) {
        listItem.classList.add('completed');
    }
    taskSpan.addEventListener('click', () => toggleTaskCompleted(taskSpan));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.addEventListener('click', () => deleteTask(deleteButton));

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}

function toggleTaskCompleted(taskSpan) {
    const listItem = taskSpan.parentElement;
    listItem.classList.toggle('completed');
    updateTaskStorage();
}

function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();
    updateTaskStorage();
}

function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text, completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskStorage() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(item => {
        const text = item.querySelector('span').textContent;
        const completed = item.classList.contains('completed');
        tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
