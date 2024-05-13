import React from "react";
import styles from "./ToDoStatusTabs.module.css";
import InProgressToDo from "../ToDoListItems/InProgress/InProgressToDo";
import AllToDo from "../ToDoListItems/AllToDo/AllToDo";
import CompletedToDo from "../ToDoListItems/CompletedToDo/CompletedToDo";
import { CommonPropsProvider } from "../ContextAPI/ToDoTabsContext";
import { useCommonProps } from "../ContextAPI/ToDoTabsContext";
function ToDoStatusTabs() {
  const {
    allToDos,
    inProgress,
    setInProgress,
    completedTodos,
    setCompletedToDos,
    setAllToDos,
    setToggleToDo,
    setEditId,
    setTitle,
    setDescription,
    setIsEdit,
    setIsClicked,
    isClicked,
    description,
    editId,
    title,
    isEdit,
    editDate,
    setEditDate,
    toggleToDo,
  } = useCommonProps();

  const clearAll = () => {
    setAllToDos([]);
    setInProgress([]);
    setCompletedToDos([]);
    localStorage.removeItem("inprogress");
    localStorage.removeItem("completed");
    localStorage.removeItem("all");
  };

  return (
    <CommonPropsProvider
      commonProps={{
        allToDos,
        setAllToDos,
        inProgress,
        setInProgress,
        completedTodos,
        setCompletedToDos,
        toggleToDo,
        setToggleToDo,
        title,
        setTitle,
        description,
        setDescription,
        editId,
        setEditId,
        isEdit,
        setIsEdit,
        editDate,
        setEditDate,
        isClicked,
        setIsClicked,
      }}
    >
      <div>
        <div className={styles.todoStatus}>
          <button
            className={` ${styles.navigationButtons}   ${styles.isClicked} ${
              isClicked === "all" && styles.active
            }`}
            onClick={() => setIsClicked("all")}
          >
            All Items
          </button>

          <button
            className={` ${styles.navigationButtons}   ${styles.isClicked} ${
              isClicked === "in-progress" && styles.active
            }`}
            onClick={() => setIsClicked("in-progress")}
          >
            In Progress
          </button>

          <button
            className={` ${styles.navigationButtons}   ${styles.isClicked} ${
              isClicked === "completed" && styles.active
            }`}
            onClick={() => setIsClicked("completed")}
          >
            Completed
          </button>

          <button
            className={` ${styles.navigationButtons}   ${styles.isClicked}  ${
              styles.clear
            } ${isClicked === "clear" && styles.active}`}
            onClick={clearAll}
          >
            ClearAll
          </button>
        </div>
        {isClicked === "all" && <AllToDo />}

        {isClicked === "in-progress" && <InProgressToDo />}

        {isClicked === "completed" && <CompletedToDo />}
      </div>
    </CommonPropsProvider>
  );
}

export default ToDoStatusTabs;
