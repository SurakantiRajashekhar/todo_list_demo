const useDeleleteToDoAndCompletedToDo = (
  inProgress,
  setInProgress,
  completedTodos,
  setAllToDos,
  setCompletedToDos
) => {
  const DeleteToDos = (id) => {
    let deletedTodo = [...inProgress];
    const deleted_inprogress = deletedTodo.filter((todo) => todo.id !== id);
    setInProgress(deleted_inprogress);
    localStorage.setItem("inprogress", JSON.stringify(deleted_inprogress));

    const allItems = [...deleted_inprogress, ...completedTodos];
    setAllToDos(allItems);
    localStorage.setItem("all", JSON.stringify(allItems));
  };

  const DeleteCompletedToDos = (id) => {
    let deleteCompletedTodo = [...completedTodos];
    const complete_todo = deleteCompletedTodo.filter((todo) => todo.id !== id);
    setCompletedToDos(complete_todo);

    const all_items = [...inProgress, ...complete_todo];
    setAllToDos(all_items);

    localStorage.setItem("all", JSON.stringify(all_items));

    localStorage.setItem("completed", JSON.stringify(complete_todo));
  };

  return { DeleteToDos, DeleteCompletedToDos };
};

export default useDeleleteToDoAndCompletedToDo;
