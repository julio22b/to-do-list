function createProjectBox(name){
    const header = document.querySelector('#projects')
    const projectBox = document.createElement('div')
    projectBox.textContent = `${name}`
    header.insertAdjacentElement('afterend', projectBox)
    projectBox.addEventListener
}


function createItems(title, description, dueDate, priority){
    const todoBody = document.querySelector('.todo-body')
    const itemsContainer = document.createElement('div')
    itemsContainer.classList.add('project-items')
    todoBody.insertAdjacentElement('afterend', itemsContainer)
    
    const priorityBox = document.createElement('div')
    priorityBox.textContent = `${priority}`
    itemsContainer.insertAdjacentElement('afterbegin', priorityBox)
    
    const dueDateBox = document.createElement('div')
    dueDateBox.textContent = `${dueDate}`
    itemsContainer.insertAdjacentElement('afterbegin', dueDateBox)
    
    const descriptionBox = document.createElement('div')
    descriptionBox.textContent = `${description}`
    itemsContainer.insertAdjacentElement('afterbegin', descriptionBox)
    
    const titleBox = document.createElement('div')
    titleBox.textContent = `${title}`
    itemsContainer.insertAdjacentElement('afterbegin', titleBox)

}

export {createProjectBox, createItems}