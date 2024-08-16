import { useState } from "react";
import New from "./components/new";
import List from "./components/list";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

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
