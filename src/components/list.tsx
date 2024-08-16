import Task from "./task";

interface ListProps {
  tasks: string[];
}

function List({ tasks }: ListProps) {
  function handleClickTask(item: string) {
    console.log(item);
  }

  return (
    <>
      <div className="w-96 min-h-96 h-auto mb-12 mx-auto border-solid border-black border-8 bg-slate-400">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            text={task}
            onClickTask={handleClickTask}
          />
        ))}
      </div>
    </>
  );
}

export default List;
