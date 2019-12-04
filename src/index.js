import {createProjectBox, createItems} from './project-dom.js'
import {Project} from './new-project.js'

const LOCAL_STORAGE_KEY = 'task.projects'

const projectContainer = document.querySelector('.projects-container')
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []




const defaultProject = new Project('Default')
createProjectBox('Default')
projects.push(defaultProject)


document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('name').value
    if(inputName == null || inputName == '') return
    const project = new Project(inputName)

    hideFormAndBlanket('project-form')
    projects.push(project)
    saveAndCreateProjectBox(inputName)
    console.log(projects)
})


function save(){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))
}

function saveAndCreateProjectBox(name){
    createProjectBox(name)
    save()
}

document.querySelector('#new-item').addEventListener('click', () => {
    showFormAndBlanket('items-form')
})


document.querySelector('.cancel').addEventListener('click', (e) => {
    e.preventDefault()
    hideFormAndBlanket('project-form')
})

document.getElementById('new-project').addEventListener('click', () => {
    showFormAndBlanket('project-form')
})

document.querySelector('.cancel-items').addEventListener('click', (e) => {
    e.preventDefault()
    hideFormAndBlanket('items-form')
})


function showFormAndBlanket(form){
    document.querySelector(`#${form}`).style.display = 'flex'
    document.querySelector('.blanket').style.display = 'block'
}

function clearInput(){
    document.getElementById('name').value = ''
    document.getElementById('name').textContent = ''
}

function hideFormAndBlanket(form){
    document.querySelector(`#${form}`).style.display = 'none'
    document.querySelector('.blanket').style.display = 'none'
    clearInput()
}