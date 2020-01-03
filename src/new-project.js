function Project(name) {
  return { id: Date.now().toString(), name: name, todos: [] };
}

function ToDo(title, description, dueDate, priority) {
  return {
    id: Date.now().toString(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: false,
  };
}

export { Project, ToDo };
