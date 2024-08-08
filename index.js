const taskList = [
    { name: 'Watch anime', dueDate: '2024-07-09' },
    { name: 'Self-study', dueDate: '2024-08-09' }
];

renderTaskList();

function renderTaskList() {
    let taskListHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        const taskObject = taskList[i];
        const { name, dueDate } = taskObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        taskList.splice(${i}, 1);
        renderTaskList();
        " class="delete-task-button">Delete</button>
        <button onclick="
        editTask(${i});
        " class="edit-task-button">Edit</button>`;
        
        taskListHTML += html;
    }

    document.querySelector('.js-task-list').innerHTML = taskListHTML;
}

function addTask() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    taskList.push({ name: name, dueDate: dueDate });

    inputElement.value = ''; 
    renderTaskList();
}

function editTask(index) {
    const newTask = prompt('Edit your task:', taskList[index].name);
    if (newTask !== null) {
        taskList[index].name = newTask.trim();
        renderTaskList();
    }
}

