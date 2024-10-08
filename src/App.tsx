import { useEffect, useState } from "react";
import NewTask from "./components/NewTask";
import { TaskObject } from "./components/TaskObject.ts";
import List from "./components/List.tsx";

function App() {
  const [taskArray, setTaskArray] = useState<TaskObject[]>(() => {
    const localStorageTaskArray = localStorage.getItem("tasks");
    return localStorageTaskArray ? JSON.parse(localStorageTaskArray) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }, [taskArray]);

  function addTask(task: TaskObject) {
    if (task) {
      setTaskArray([...taskArray, task]);
    }
  }

  return (
    <>
      <NewTask onAddTask={addTask} />
      <List arrayOfTask={taskArray} />
    </>
  );
}

export default App;
