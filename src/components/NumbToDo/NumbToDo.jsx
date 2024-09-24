import { toDoStore } from "../../state/toDoStore";

const NumbToDo = () => {
  const totalTasks = toDoStore((state) => state.totalTasks);
  const numberTasks = totalTasks();

  return (
    <div className="bg-white w-[350px] flex justify-center items-center p-9 rounded-xl shadow-lg shadow-gray-500/50 md:w-[500px] h-[75px]">
      <h3 className="font-bold text-center">Total tasks: {numberTasks}</h3>
    </div>
  );
};

export default NumbToDo;
