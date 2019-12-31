import {selectedProjectId, itemsDisplay, projectTitle, itemsContainer, projects} from './index.js'

function createProjectBox(name, idOfProject){
    const container = document.querySelector('#actual-projects')
    const projectBox = document.createElement('div')
    projectBox.classList.add('project-name')
    projectBox.textContent = name
    projectBox.dataset.projectId = idOfProject
   
    container.insertAdjacentElement('afterbegin', projectBox)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    deleteButton.classList.add('delete-project')
    deleteButton.dataset.projectId = idOfProject
    projectBox.insertAdjacentElement('beforeend', deleteButton)

}

function createItems(title, description, dueDate, priority, idOfTodo, completed){

    const itemsContainer= document.querySelector('.items')
    const oneTaskContainer = document.createElement('div')
    itemsContainer.insertAdjacentElement('afterbegin', oneTaskContainer)

    const priorityBox = document.createElement('div')
    priorityBox.textContent = `${priority}`
    if(priority === 'High'){
        priorityBox.style.color = `rgb(214,79,79)`
        priorityBox.style.fontWeight = 'bold'
    } else if(priority === 'Normal'){
        priorityBox.style.color = 'black'
    } else {
        priorityBox.style.color = 'green'
    }
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

    const buttons = document.createElement('div')
    const image1 = document.createElement('image')
    const image2 = document.createElement('image')
    buttons.style.display = 'flex'
    const edit = document.createElement('button')
    edit.textContent = '✓'
    completed === false ? edit.style.color = 'gray' : edit.style.color = 'green'
    edit.classList.add('edit')
    edit.dataset.todoID = idOfTodo
    edit.appendChild(image1)
    const remove = document.createElement('button')
    remove.textContent = '🗑'
    remove.classList.add('remove')
    remove.dataset.todoID = idOfTodo
    remove.appendChild(image2)
    buttons.classList.add('edit-remove-container')
    buttons.appendChild(edit)
    buttons.appendChild(remove)
    oneTaskContainer.insertAdjacentElement('beforeend', buttons)

    if(completed === true){
        oneTaskContainer.classList.add('completed')
    }else if(completed === false){
        oneTaskContainer.classList.remove('completed')
    }
}

export {createProjectBox, createItems}