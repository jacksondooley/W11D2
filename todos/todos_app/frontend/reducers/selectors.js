export const allTodos = (state) => {
  return Object.values(state.todos)
}

export const stepsByTodoId = (state, todo_id) => {
  const allSteps = Object.values(state.steps);
  return allSteps.filter((step) => {
    return step.todo_id === todo_id;
  })
}