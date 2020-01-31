import { createProjectBox, createItems } from './project-dom';
import { Project, ToDo } from './new-project';
import { clearInput, hideFormAndBlanket, itemsFormNewCancel } from './misc.js';

const LOCAL_STORAGE_KEY = 'task.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID = 'task.selectedProjectId';
const itemsDisplay = document.querySelector('[data-items-display-container]');
const projectTitle = document.querySelector('[data-project-title]');
const itemsContainer = document.querySelector('.items');
const defaultProject = new Project('My Project');
const sampleTodo = new ToDo('Sample', 'Sample', 'yyyy-mm-dd', 'Low');
const projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID);

if (!projects[0]) {
    defaultProject.todos.push(sampleTodo);
    projects.push(defaultProject);
}

const projectContainer = document.querySelector('#actual-projects');
projectContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'div') {
        selectedProjectId = e.target.dataset.projectId;
        const children = projectContainer.childNodes;
        for (let i = 0; i < children.length; i += 1) {
            children[i].classList.remove('active-project');
        }
        if (e.target.dataset.projectId === selectedProjectId) {
            e.target.classList.add('active-project');
            if (selectedProjectId === null) {
                itemsDisplay.style.display = 'none';
            } else {
                const selectedProject = projects.find(
                    (project) => project.id === selectedProjectId,
                );
                itemsDisplay.style.display = '';
                projectTitle.innerHTML = `To Do's from <span> ${selectedProject.name}</span>`;
                while (itemsContainer.firstChild) {
                    itemsContainer.removeChild(itemsContainer.firstChild);
                }
                renderTodos(selectedProject);
                deleteTask();
                completeTask();
                deleteProjectButton();
            }
        }
    }
});

const newItem = document.querySelector('.submit-items');
newItem.addEventListener('click', (e) => {
    e.preventDefault();
    const itemTitle = document.querySelector('#title');
    const itemDesc = document.querySelector('#desc');
    const itemDue = document.querySelector('#due');
    const itemPriority = document.querySelector('input[name=priority]:checked');
    if (!itemTitle.value || !itemDesc.value || !itemDue.value) {
        return alert('Please fill all fields');
    }
    const taskItem = new ToDo(itemTitle.value, itemDesc.value, itemDue.value, itemPriority.value);

    const selectedProject = projects.find((project) => project.id === selectedProjectId);
    selectedProject.todos.push(taskItem);
    createItems(
        itemTitle.value,
        itemDesc.value,
        itemDue.value,
        itemPriority.value,
        taskItem.id,
        false,
    );
    clearInput();
    deleteTask();
    completeTask();
    save();
    hideFormAndBlanket('items-form');
});

function deleteTask() {
    const deleteTaskButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < deleteTaskButtons.length; i += 1) {
        deleteTaskButtons[i].addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
            const selectedProject = projects.find((project) => project.id === selectedProjectId);
            const selectedTodo = selectedProject.todos.find(
                (todo) => todo.id === e.target.dataset.todoID,
            );
            console.log(selectedProject.todos);
            for (let j = 0; j < selectedProject.todos.length; j += 1) {
                if (selectedProject.todos[j].id === e.target.dataset.todoID) {
                    console.log(selectedProject.todos[j].id, selectedTodo.id);

                    selectedProject.todos.splice(j, 1);
                    save();
                }
            }
        });
    }
}

function completeTask() {
    const completeTaskButtons = document.getElementsByClassName('edit');

    for (let i = 0; i < completeTaskButtons.length; i += 1) {
        completeTaskButtons[i].addEventListener('click', (e) => {
            e.target.style.color === 'gray'
                ? (e.target.style.color = 'green')
                : (e.target.style.color = 'gray');

            const selectedProject = projects.find((project) => project.id === selectedProjectId);
            const selectedTodo = selectedProject.todos.find(
                (todo) => todo.id === e.target.dataset.todoID,
            );
            for (let i = 0; i < selectedProject.todos.length; i++) {
                if (selectedProject.todos[i].id === selectedTodo.id) {
                    selectedTodo.completed === false
                        ? (selectedTodo.completed = true)
                        : (selectedTodo.completed = false);
                    save();
                    renderTodos(selectedProject);
                }
            }
        });
    }
}

function deleteProjectButton() {
    const deleteProjectButtons = document.getElementsByClassName('delete-project');
    for (let i = 0; i < deleteProjectButtons.length; i += 1) {
        deleteProjectButtons[i].addEventListener('click', (e) => {
            e.target.parentNode.remove();
            const selectedProject = projects.find(
                (project) => project.id === e.target.dataset.projectId,
            );
            for (let i = 0; i < projects.length; i += 1) {
                if (projects[i] === selectedProject) {
                    projects.splice(i, 1);
                    save();
                }
            }
            selectedProject
                ? (projectTitle.innerHTML = `To Do List <span> </span>`)
                : (projectTitle.innerHTML = `To Do's from <span> ${selectedProject.name}</span>`);
            while (document.querySelector('.items').hasChildNodes) {
                document
                    .querySelector('.items')
                    .removeChild(document.querySelector('.items').firstChild);
            }
        });
    }
}

for (let i = 0; i < projects.length; i += 1) {
    createProjectBox(projects[i].name, projects[i].id);
}

document.querySelector('#new-project').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('name');
    const inputValue = input.value;
    if (inputValue === null || inputValue === '') {
        return;
    }
    const project = new Project(inputValue);

    projects.push(project);
    saveAndCreateProjectBox(inputValue, project.id);
    clearInput();
    deleteProjectButton();
});

function renderTodos(project) {
    while (itemsContainer.firstChild) {
        itemsContainer.removeChild(itemsContainer.firstChild);
    }

    project.todos.forEach((todo) => {
        createItems(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.priority,
            todo.id,
            todo.completed,
        );
    });
    deleteTask();
    completeTask();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID, selectedProjectId);
}

function saveAndCreateProjectBox(name, idOfProject) {
    save();
    createProjectBox(name, idOfProject);
}

itemsFormNewCancel();

deleteProjectButton();

export { itemsDisplay, projectTitle, itemsContainer };
