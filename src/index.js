import { createProjectBox, createItems } from './project-dom.js'
import { Project, ToDo } from './new-project.js'


const LOCAL_STORAGE_KEY = 'task.projects'
const LOCAL_STORAGE_SELECTED_PROJECT_ID = 'task.selectedProjectId'
const itemsDisplay = document.querySelector('[data-items-display-container]')
const projectTitle = document.querySelector('[data-project-title]')
const itemsContainer = document.querySelector('.items')
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID)

const projectContainer = document.querySelector('#actual-projects')
projectContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'div') {
        selectedProjectId = e.target.dataset.projectId
        console.log(selectedProjectId)
        console.log(projectTitle)
        const children = projectContainer.childNodes
        for (let i = 0; i < children.length - 1; i++) {
            children[i].classList.remove('active-project')
        }
        if (e.target.dataset.projectId === selectedProjectId) {

            e.target.classList.add('active-project')
            if (selectedProjectId === null) {
                itemsDisplay.style.display = 'none'
            }
            else {
                const selectedProjectIdHere = projects.find(project => project.id === selectedProjectId)
                itemsDisplay.style.display = ''
                projectTitle.innerHTML = `To Do's from <span>${selectedProjectIdHere.name}</span>`
            }
        }
    }
})



const newItem = document.querySelector('.submit-items')
newItem.addEventListener('click', (e) => {
    e.preventDefault()
    const itemTitle = document.querySelector('#title')
    const itemDesc = document.querySelector('#desc')
    const itemDue = document.querySelector('#due')
    const itemPriority = document.querySelector('input[name=priority]:checked')
    const taskItem = new ToDo(itemTitle.value, itemDesc.value, itemDue.value, itemPriority.value)
    projects.find(projectId)
    createItems(itemTitle.value, itemDesc.value, itemDue.value, itemPriority.value)
    clearInput()
    hideFormAndBlanket('items-form')
})





for (let i = 0; i < projects.length; i++) {
    createProjectBox(projects[i].name, projects[i].id)
}


document.querySelector('#new-project').addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('name').value
    if (inputName == null || inputName == '') return
    const project = new Project(inputName)

    projects.push(project)
    saveAndCreateProjectBox(inputName, project.id)
    console.log(projects)
    clearInput()
})


function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID, selectedProjectId)
}

function saveAndCreateProjectBox(name, idOfProject) {
    save()
    createProjectBox(name, idOfProject)
}

document.querySelector('#new-item').addEventListener('click', () => {
    showFormAndBlanket('items-form')
})


document.querySelector('.cancel-items').addEventListener('click', (e) => {
    e.preventDefault()
    hideFormAndBlanket('items-form')
})


function showFormAndBlanket(form) {
    document.querySelector(`#${form}`).style.display = 'flex'
    document.querySelector('.blanket').style.display = 'block'
}

function clearInput() {
    document.getElementById('name').value = ''
    document.getElementById('name').textContent = ''
    document.getElementById('title').value = ''
    document.getElementById('title').textContent = ''
    document.getElementById('desc').value = ''
    document.getElementById('desc').textContent = ''
    document.getElementById('due').value = ''
    document.getElementById('due').textContent = ''
}

function hideFormAndBlanket(form) {
    document.querySelector(`#${form}`).style.display = 'none'
    document.querySelector('.blanket').style.display = 'none'
    clearInput()
}

console.log(projects)

document.querySelector('#clear-all').addEventListener('click', () => {
    localStorage.clear()
    while (document.querySelector('#actual-projects').hasChildNodes) {
        document.querySelector('#actual-projects').removeChild(document.querySelector('#actual-projects').firstChild)
    }
})


export { projects, selectedProjectId, itemsDisplay, projectTitle, itemsContainer }