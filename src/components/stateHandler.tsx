import { useState } from "react";
import List from "./list";
import New from "./new";

function StateHandler() {
  const [tasks, setTasks] = useState<string[]>([]);
  //tasks as an empty array of strings (string[])

  function addTask(task: string) {
    if (task) {
      setTasks([...tasks, task]);
      //"...tasks" is the spread operator, it spreads the elements of the tasks-array into a new array
      //setTasks  updates the state with the new array, effectively adding the new task to the list
    }
  }

  return (
    <div>
      <New onAddTask={addTask} />
      <List tasks={tasks} />
    </div>
  );
}

export default StateHandler;
