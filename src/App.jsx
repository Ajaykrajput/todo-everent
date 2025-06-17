import { useDispatch, useSelector } from "react-redux";
import { moveTodo } from "./slice/TodoSlice";
import TaskCard from "../src/componets/TaskCard";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    dispatch(moveTodo({ id: Number(taskId), targetColumn }));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const getTasksByColumn = (column) => {
    return todos.filter((task) => task.coulmn === column);
  };

  return (
    <div className="flex w-screen h-screen bg-red-100 justify-around">
      {["todo", "progress", "completed"].map((column) => (
        <div
          key={column}
          onDrop={(e) => handleDrop(e, column)}
          onDragOver={allowDrop}
          className="w-72 h-full flex flex-col border-2 p-2"
        >
          <h1 className="text-center capitalize font-bold">{column}</h1>
          {getTasksByColumn(column).map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
