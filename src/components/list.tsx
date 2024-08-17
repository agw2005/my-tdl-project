import Task from "./task";

interface ListProps {
  tasks: string[];
}

function List({ tasks }: ListProps) {

  return (
    <>
      <div className="w-96 min-h-96 h-auto mb-12 mx-auto border-solid border-black border-8 bg-slate-400">
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task}
          />
        ))}
      </div>
    </>
  );
}

export default List;
