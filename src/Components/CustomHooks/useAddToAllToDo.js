import { useEffect } from "react";

const useAddToAllToDo = (setInProgress, setAllToDos) => {
  const AddToAllToDo = ({
    title,
    description,
    isEdit,
    inProgress,
    editId,
    completedTodos,
    setToggleToDo,
    setTitle,
    setDescription,
    setIsEdit,
  }) => {
    if (!title || !description) {
      alert("plese enter the correct details");
      return;
    } else if (isEdit) {
      let completion_date = new Date();
      let date = completion_date.getDate();
      let month = completion_date.getMonth() + 1;
      let year = completion_date.getFullYear();
      let hour = completion_date.getHours();
      let minute = completion_date.getMinutes();
      let seconds = completion_date.getSeconds();

      let edited_on = `${date} -${month} - ${year} at ${hour} : ${minute} : ${seconds}`;

      const editItems = inProgress.map((item) =>
        item.id === editId
          ? {
              ...item,
              title: title,
              description: description,
              date: edited_on,
            }
          : item
      );

      setInProgress(editItems);
      localStorage.setItem("inprogress", JSON.stringify(editItems));

      const complete =
        completedTodos && completedTodos.length > 0
          ? [...editItems, ...completedTodos]
          : [...editItems];

      setAllToDos(complete);
      localStorage.setItem("all", JSON.stringify(complete));
      setToggleToDo(false);
      setTitle("");
      setDescription("");
      setIsEdit(false);
      setToggleToDo(true);
    } else {
      const addingToDoItem = {
        title,
        description,
        id: new Date().getTime().toString(),
      };
      const inprogress = [...inProgress, addingToDoItem];

      setInProgress(inprogress);

      const complete =
        completedTodos && completedTodos.length > 0
          ? [...inprogress, ...completedTodos]
          : [...inprogress];

      setAllToDos(complete);
      localStorage.setItem("inprogress", JSON.stringify(inprogress));

      localStorage.setItem("all", JSON.stringify(complete));
      setTitle("");
      setDescription("");
    }
  };

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("inprogress")) || [];
    setInProgress(savedItems);

    const all = JSON.parse(localStorage.getItem("all")) || [];
    setAllToDos(all);
  }, [setInProgress, setAllToDos]);

  return { AddToAllToDo };
};

export default useAddToAllToDo;
