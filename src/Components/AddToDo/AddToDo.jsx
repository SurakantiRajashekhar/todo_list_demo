import React from "react";
import styles from "./AddToDo.module.css";
import useAddToAllToDo from "../CustomHooks/useAddToAllToDo";
import { useCommonProps } from "../ContextAPI/ToDoTabsContext";

function AddToDo() {
  const {
    description,
    title,
    isEdit,
    editId,
    inProgress,
    setInProgress,
    completedTodos,
    setAllToDos,
    setToggleToDo,
    setTitle,
    setDescription,
    setIsEdit,
  } = useCommonProps();

  const { AddToAllToDo } = useAddToAllToDo(setInProgress, setAllToDos);

  return (
    <div>
      <h1> My ToDos</h1>
      <div className={styles.todoWrapper}>
        <div className={styles.todoContent}>
          <div className={styles.todoTitle}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Your ToDo Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.todoTitle}>
            <label>Description</label>
            <input
              type="text"
              placeholder="Enter Your ToDo Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.todoTitle}>
            <button
              className={styles.addButton}
              onClick={() =>
                AddToAllToDo({
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
                })
              }
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
