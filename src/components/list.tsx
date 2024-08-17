import Task from "./Task";
import { TaskObject } from "./TaskObject.ts";

interface ListProps {
  arrayOfTask: TaskObject[];
}
function handleClickTask(item: string) {
  console.log(item);
}

function List({ arrayOfTask }: ListProps) {
  return (
    <div className="w-96 min-h-96 h-auto mb-12 mx-auto border-solid border-black border-8 bg-slate-400">
      {arrayOfTask.map((mappedTask, index) => (
        <Task
          key={index}
          index={index}
          task={mappedTask}
          onClickTask={handleClickTask}
        />
      ))}
    </div>
  );
}

export default List;
