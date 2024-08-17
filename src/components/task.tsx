interface TaskProp {
  text: string;
}

function Task({ text }: TaskProp) {

  return (
    <p
      className={`p-1 bg-gray-800 hover:bg-gray-500 text-white text-xs`}
    >
      {text}
    </p>
  );
}

export default Task;
