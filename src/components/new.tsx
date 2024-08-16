import { useState } from "react";

interface NewProps {
  onAddTask: (task: string) => void;
  //onAddTask is a prop that expects a function that takes a single parameter called task which is a string
  //"=> void" means return type void
}

function New({ onAddTask }: NewProps) {
  const [task, setTask] = useState("");

  const handleSubmit = (clickEvent: React.FormEvent) => {
    clickEvent.preventDefault();
    onAddTask(task);
    setTask("");
    //Defines a function named "handleSubmit" that runs when the submit button is clicked
    //Takes an event object "clickEvent" as a parameter, the type of the event is "React.FormEvent"
    //"clickEvent.preventDefault()" stops the default form submission behavior A.K.A refreshing the page
    //"task" variable is then passed to addTask() in stateHandler
    //setTask('') clears the task state (variable)
  };

  return (
    <div>
      <form
        className="flex flex-row place-content-center m-12"
        onSubmit={handleSubmit}
      >
        <input
          className="border-solid border-2 border-black w-1/4 placeholder-blue-800"
          name="task"
          type="text"
          placeholder="New task..."
          value={task} //setTask("") after every submit
          onChange={(clickEvent) => setTask(clickEvent.target.value)}
          //The onChange handler in React is used to detect and respond to changes in the value of form elements
          //"clickEvent" is automatically passed into the handler
          //"clickEvent.target.value" is the current value of the input field
          //setTask(clickEvent.target.value) updates the state with this new value, keeping track of what the user is typing
        />
        <br />
        <input
          className="border-solid border-2 border-black hover:bg-gray-500"
          type="submit"
          value="✅"
        />
      </form>
    </div>
  );
}

export default New;
