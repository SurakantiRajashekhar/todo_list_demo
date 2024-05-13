import React from "react";
import styles from "./CompletedToDo.module.css";
import { MdDelete } from "react-icons/md";
import { useCommonProps } from "../../ContextAPI/ToDoTabsContext";
import useDeleleteToDoAndCompletedToDo from "../../CustomHooks/useDeleleteToDoAndCompletedToDo";

function CompletedToDo() {
  const {
    completedTodos,
    inProgress,
    setCompletedToDos,
    setAllToDos,
    setInProgress,
  } = useCommonProps();

  const { DeleteCompletedToDos } = useDeleleteToDoAndCompletedToDo(
    inProgress,
    setInProgress,
    completedTodos,
    setAllToDos,
    setCompletedToDos
  );

  return (
    <>
      <div className={styles.count}>
        {completedTodos.length > 0
          ? `You have Completed total ${completedTodos.length} TODO(s)`
          : `You have not Completed any TODO, Please Complete immediately`}
      </div>
      <div className={styles.todoList}>
        {completedTodos.map((item, id) => (
          <div className={styles.todoListItems} key={item.id}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Completed On: {item.completed_On}</p>
            </div>

            <div>
              <MdDelete
                className={styles.deleteIcon}
                title="Delete?"
                onClick={() => DeleteCompletedToDos(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CompletedToDo;
