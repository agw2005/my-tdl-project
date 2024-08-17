import { useState } from "react";
import { TaskObject } from "./TaskObject.ts";

interface TaskProp {
  task: TaskObject;
  index: number;
  onClickTask: (item: string) => void;
}

function Task({ task, index, onClickTask }: TaskProp) {
  const [completionMark, setCompletionMark] = useState(false);

  function ifMarked() {
    if (completionMark == true) {
      return "line-through";
    } else {
      return "";
    }
  }

  return (
    <>
      <p
        className={`p-1 bg-gray-800 hover:bg-gray-500 text-white text-xs ${ifMarked()}`}
        onClick={() => {
          console.log(
            `Item index: ${index}\nItem mark: ${task.completed}\nItem text: ${task.text}\nItem desc: ${task.desc}`
          );
          onClickTask("Clicked");
          ifMarked() ? setCompletionMark(false) : setCompletionMark(true);
        }}
      >
        {task.text}
        {` ${ifMarked() ? "(DONE)" : ""}`}
      </p>
      <p className={`p-1 bg-gray-900 text-white text-xs`}>
        {">>>"}
        {task.desc ? task.desc : "No description"}
      </p>
    </>
  );
}

export default Task;
