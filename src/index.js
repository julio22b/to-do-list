import {createProjectBox, createItems} from './project-dom.js'
import {Project} from './new-project.js'

const projects = []

const newProject = document.getElementById('new-project')
newProject.addEventListener('click', () => {
    const name = prompt(`What's the name?`, 'My project')
    createProjectBox(name)
    const project = new Project(name, prompt('Title of your first To Do'), prompt('Its description'), prompt('Due date'), prompt('Priority'))
    projects.push(project)
    createItems(project.title, project.description, project.dueDate, project.priority)
    console.log(projects)
})
