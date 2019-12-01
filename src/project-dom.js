function createProjectBox(name){
    const header = document.querySelector('#projects')
    const projectBox = document.createElement('div')
    projectBox.textContent = `${name}`
    header.insertAdjacentElement('afterend', projectBox)
    
}

function createItems(title, description, dueDate, priority){
    const todoHead = document.querySelector('.todo-head')
    const itemsContainer = document.createElement('div')
    todoHead.insertAdjacentElement('afterend', itemsContainer)
    
    itemsContainer.classList.add('project-items')
    const titleBox = document.createElement('div')
    titleBox.textContent = `${title}`
    itemsContainer.insertAdjacentElement('afterbegin', titleBox)
    itemsContainer.insertAdjacentElement('afterbegin', titleBox)

    const descriptionBox = document.createElement('div')
    descriptionBox.textContent = `${description}`
    itemsContainer.insertAdjacentElement('afterbegin', descriptionBox)

    const dueDateBox = document.createElement('div')
    dueDateBox.textContent = `${dueDate}`
    itemsContainer.insertAdjacentElement('afterbegin', dueDateBox)

    const priorityBox = document.createElement('div')
    priorityBox.textContent = `${priority}`
    itemsContainer.insertAdjacentElement('afterbegin', priorityBox)

}

export {createProjectBox, createItems}