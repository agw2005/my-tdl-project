import { useState } from "react";

interface TaskProp {
  text: string;
  index: number;
  onClickTask: (item: string) => void;
}

function Task({ text, index, onClickTask }: TaskProp) {
  const [marked, setMarked] = useState(false);

  function ifMarked() {
    if (marked == true) {
      return "line-through";
    } else {
      return "";
    }
  }

  return (
    <p
      className={`p-1 bg-gray-800 hover:bg-gray-500 text-white text-xs ${ifMarked()}`}
      onClick={() => {
        console.log(`Item number: ${index}`);
        onClickTask("Clicked");
        ifMarked() ? setMarked(false) : setMarked(true);
      }}
    >
      {text}
      {` ${ifMarked() ? "(DONE)" : ""}`}
    </p>
  );
}

export default Task;
