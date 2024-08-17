import { useState } from "react";
import { TaskObject } from "C:/Users/dania/my-tdl-project/src/TaskObject.ts";

interface NewTaskProps {
  onAddTask: (task: TaskObject) => void;
}

function NewTask({ onAddTask }: NewTaskProps) {
  const [task, setTask] = useState<TaskObject>({
    text: "",
    desc: "",
    completed: false,
  });
  const handleSubmit = (clickEvent: React.FormEvent) => {
    clickEvent.preventDefault();
    onAddTask(task);
    setTask({
      text: "",
      desc: "",
      completed: false,
    });
  };

  return (
    <div>
      <form
        className="flex flex-row place-content-center m-12"
        onSubmit={handleSubmit}
      >
        <input
          name="task-name"
          className="border-solid border-2 border-black w-1/8 placeholder-blue-800 rounded-3xl p-3"
          type="text"
          placeholder="New task..."
          value={task.text}
          onChange={(clickEvent) =>
            setTask({ ...task, text: clickEvent.target.value })
          }
        />
        <input
          name="task-desc"
          className="border-solid border-2 border-black w-1/4 placeholder-blue-800 rounded-3xl p-3"
          type="text"
          placeholder="Task description..."
          value={task.desc}
          onChange={(clickEvent) =>
            setTask({ ...task, desc: clickEvent.target.value })
          }
        />
        <br />
        <input
          className="border-solid border-2 border-black w-1/8 rounded-3xl p-3 hover:bg-gray-500"
          type="submit"
          value="✅"
        />
      </form>
    </div>
  );
}

export default NewTask;
