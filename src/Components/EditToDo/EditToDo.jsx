import styles from "./EditToDo.module.css";
import useAddToAllToDo from "../CustomHooks/useAddToAllToDo";
import { useCommonProps } from "../ContextAPI/ToDoTabsContext";
import AllToDo from "../ToDoListItems/AllToDo/AllToDo";
import InProgressToDo from "../ToDoListItems/InProgress/InProgressToDo";

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
    isClicked,
  } = useCommonProps();

  const { AddToAllToDo } = useAddToAllToDo(setInProgress, setAllToDos);

  const handleCancel = () => {
    setTitle("");
    setDescription("");

    setIsEdit(false);
    setToggleToDo(true);
    isClicked === "all" && <AllToDo />;

    isClicked === "in-progress" && <InProgressToDo />;
  };

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

          <div className={styles.update}>
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
              <button
                onClick={() => {
                  handleCancel();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditToDo;
