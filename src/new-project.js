function Project(name) {
  return { id: Date.now().toString(), name, todos: [] };
}

function ToDo(title, description, dueDate, priority) {
  return {
    id: Date.now().toString(),
    title,
    description,
    dueDate,
    priority,
    completed: false,
  };
}

export { Project, ToDo };
