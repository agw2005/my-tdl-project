interface TaskProp {
  text: string;
}

function Task(props: TaskProp) {
  return <p className="p-1 bg-gray-800 text-white text-xs">{props.text}</p>;
}

export default Task;
