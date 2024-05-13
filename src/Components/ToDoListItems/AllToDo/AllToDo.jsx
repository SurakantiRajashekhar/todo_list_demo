import React from "react";
import styles from "./AllToDo.module.css";
import { MdDelete } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";
import useEditAndCompleted from "../../CustomHooks/useEditAndCompleted";
import useDeleleteToDoAndCompletedToDo from "../../CustomHooks/useDeleleteToDoAndCompletedToDo";
import { useCommonProps } from "../../ContextAPI/ToDoTabsContext";

function AllToDo() {
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
  } = useCommonProps();

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

  const { DeleteToDos, DeleteCompletedToDos } = useDeleleteToDoAndCompletedToDo(
    inProgress,
    setInProgress,
    completedTodos,
    setAllToDos,
    setCompletedToDos
  );

  return (
    <>
      <div className={styles.count}>
        {allToDos.length > 0
          ? `You have total ${allToDos.length} TODO(s) in the List`
          : `You have not added any task to List, Please Add tasks to track the Progress`}
      </div>
      <div className={styles.todoList}>
        {allToDos.map((item, index) => (
          <div key={item.id} className={styles.todoListItems}>
            {item.date !== undefined && !item.completed_On ? (
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p> Edited On : {item.date}</p>
              </div>
            ) : (
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.completed_On && <p>Completed On: {item.completed_On}</p>}
              </div>
            )}

            {!item.completed_On ? (
              <div>
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
            ) : (
              <MdDelete
                className={styles.deleteIcon}
                title="Delete?"
                onClick={() => DeleteCompletedToDos(item.id)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default AllToDo;
