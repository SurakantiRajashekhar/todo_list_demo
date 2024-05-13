import { useState } from "react";
import AddToDo from "./Components/AddToDo/AddToDo.jsx";
import EditToDo from "./Components/EditToDo/EditToDo.jsx";
import ToDoStatusTabs from "./Components/ToDoStatusTabs/ToDoStatusTabs.jsx";
import { CommonPropsProvider } from "./Components/ContextAPI/ToDoTabsContext.js";

function App() {
  const [toggleToDo, setToggleToDo] = useState(true);
  const [allToDos, setAllToDos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completedTodos, setCompletedToDos] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [editDate, setEditDate] = useState(null);

  const [isClicked, setIsClicked] = useState("all");

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
      <div className="todoWrapper">
        {toggleToDo ? <AddToDo /> : <EditToDo />}

        <ToDoStatusTabs />
      </div>
    </CommonPropsProvider>
  );
}

export default App;
