import { MdDelete } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";
import styles from "./InProgressToDo.module.css";
import { useCommonProps } from "../../ContextAPI/ToDoTabsContext";
import useEditAndCompleted from "../../CustomHooks/useEditAndCompleted";
import useDeleleteToDoAndCompletedToDo from "../../CustomHooks/useDeleleteToDoAndCompletedToDo";

function InProgressToDo() {
  const {
    inProgress,
    completedTodos,
    setCompletedToDos,
    setAllToDos,
    setInProgress,
    setToggleToDo,
    setTitle,
    setDescription,
    setEditId,
    setIsEdit,
  } = useCommonProps();

  const { DeleteToDos } = useDeleleteToDoAndCompletedToDo(
    inProgress,
    setInProgress,
    completedTodos,
    setAllToDos
  );

  const { CompletedToDoList, EditToDoList } = useEditAndCompleted(
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
  );

  return (
    <>
      <div className={styles.count}>
        {inProgress.length > 0
          ? `You have total ${inProgress.length} ToDo(s) in InProgress`
          : `You have no task to Complete, Please add ToDos to complete`}
      </div>
      <div className={styles.todoList}>
        {inProgress.map((item, index) => (
          <div className={styles.todoListItems} key={item.id}>
            <div>
              {item.date !== undefined ? (
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>Edited On : {item.date}</p>
                </div>
              ) : (
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              )}
            </div>

            <div className={styles.iconContainer}>
              <FaEdit
                className={styles.editIcon}
                title="Edit?"
                onClick={() =>
                  EditToDoList(item.id, item.title, item.description)
                }
              />

              <MdDelete
                className={styles.deleteIcon}
                title="Delete?"
                onClick={() => DeleteToDos(item.id)}
              />
              <FaCheck
                className={styles.checkIcon}
                title="Completed?"
                onClick={() => CompletedToDoList(item.id, index)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default InProgressToDo;
