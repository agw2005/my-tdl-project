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
      //"...tasks" is the spread operator, it spreads the elements of the tasks-array into a new array
      //setTasks  updates the state with the new array, effectively adding the new task to the list
      //const numbers = [1, 2, 3];
      //const moreNumbers = [...numbers, 4]; // moreNumbers becomes [1, 2, 3, 4]
      //If numbers=[], then moreNumbers=[4]
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
