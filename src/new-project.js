function Project(name){
  return {id: Date.now().toString(), name: name, todos: []}
}

function ToDo(title, description, dueDate, priority){
    return {title: title, description: description, dueDate:dueDate, priority:priority}
}


export {Project, ToDo}