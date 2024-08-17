import { useState, useEffect } from "react";
import New from "./components/new";
import List from "./components/list";

function App() {
  //Initialize state from local storage or an empty array if none exist
  const [tasks, setTasks] = useState<string[]>(() => {
    const localStorageTasks = localStorage.getItem("tasks");
    return localStorageTasks ? JSON.parse(localStorageTasks) : [];
  });

  //Save existing task to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //When tasks state is updated, the update tasks array is uploaded into local storage

  function addTask(task: string) {
    if (task) {
      setTasks([...tasks, task]);
    }
  }

  return (
    <>
      <New onAddTask={addTask} />
      <List tasks={tasks} />
    </>
  );
}

export default App;
