import { useEffect } from "react";

const useEditAndCompleted = (
  inProgress,
  setInProgress,
  completedTodos,
  setCompletedToDos,
  setAllToDos,
  setToggleToDo,
  setEditId,
  setTitle,
  setDescription,
  setIsEdit
) => {
  const CompletedToDoList = (id, index) => {
    let completion_date = new Date();
    let date = completion_date.getDate();
    let month = completion_date.getMonth() + 1;
    let year = completion_date.getFullYear();
    let hour = completion_date.getHours();
    let minute = completion_date.getMinutes();
    let seconds = completion_date.getSeconds();

    let completed_On = `${date} -${month} - ${year} at ${hour} : ${minute} : ${seconds}`;

    const completed_item = {
      ...inProgress.find((todo) => todo.id === id),
      completed_On,
    };

    const newCompletedToDo = [...completedTodos, completed_item];
    setCompletedToDos(newCompletedToDo);
    localStorage.setItem("completed", JSON.stringify(newCompletedToDo));

    const newInProgress = inProgress.filter((todo) => todo.id !== id);
    setInProgress(newInProgress);
    localStorage.setItem("inprogress", JSON.stringify(newInProgress));

    const allNewToDo = [...newInProgress, ...newCompletedToDo];
    setAllToDos(allNewToDo);
    localStorage.setItem("all", JSON.stringify(allNewToDo));
  };

  const EditToDoList = (id, title, description) => {
    setToggleToDo(false);
    setEditId(id);
    setTitle(title);
    setDescription(description);
    setIsEdit(true);
  };

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("inprogress")) || [];
    setInProgress(savedItems);

    const completed = JSON.parse(localStorage.getItem("completed")) || [];
    setCompletedToDos(completed);

    const all = JSON.parse(localStorage.getItem("all")) || [];
    setAllToDos(all);
  }, [setInProgress, setCompletedToDos, setAllToDos]);

  return { CompletedToDoList, EditToDoList };
};

export default useEditAndCompleted;
