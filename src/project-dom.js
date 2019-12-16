import {selectedProjectId, itemsDisplay, projectTitle, itemsContainer, projects} from './index.js'

function createProjectBox(name, idOfProject){
    const container = document.querySelector('#actual-projects')
    const projectBox = document.createElement('div')
    projectBox.classList.add('project-name')
    projectBox.textContent = `${name}`
    projectBox.dataset.projectId = `${idOfProject}`
   
    container.insertAdjacentElement('afterbegin', projectBox)

}

function createItems(title, description, dueDate, priority){

    const itemsContainer= document.querySelector('.items')
    const oneTaskContainer = document.createElement('div')
    itemsContainer.insertAdjacentElement('afterbegin', oneTaskContainer)

    const priorityBox = document.createElement('div')
    priorityBox.textContent = `${priority}`
    priorityBox.classList.add('task')
    oneTaskContainer.insertAdjacentElement('afterbegin', priorityBox)
    
    const dueDateBox = document.createElement('div')
    dueDateBox.textContent = `${dueDate}`
    dueDateBox.classList.add('task')
    oneTaskContainer.insertAdjacentElement('afterbegin', dueDateBox)
    
    const descriptionBox = document.createElement('div')
    descriptionBox.textContent = `${description}`
    descriptionBox.classList.add('task')
    oneTaskContainer.insertAdjacentElement('afterbegin', descriptionBox)
    
    const titleBox = document.createElement('div')
    titleBox.textContent = `${title}`
    titleBox.classList.add('task')
    oneTaskContainer.insertAdjacentElement('afterbegin', titleBox)

}

export {createProjectBox, createItems}