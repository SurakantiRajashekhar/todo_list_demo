import styles from "./EditToDo.module.css";
import useAddToAllToDo from "../CustomHooks/useAddToAllToDo";
import { useCommonProps } from "../ContextAPI/ToDoTabsContext";

function EditToDo() {
  const {
    inProgress,
    setInProgress,
    completedTodos,
    description,
    title,
    isEdit,
    editId,
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
            <label>Update the Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.todoTitle}>
            <label>Update the Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className={styles.todoTitle}>
            <button
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
              Update
            </button>
          </div>
          <div className={styles.todoTitle}>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditToDo;
