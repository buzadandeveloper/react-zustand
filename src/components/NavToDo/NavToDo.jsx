import icon from "../../assets/icon.svg";

export const NavToDo = () => {
  return (
    <div className="bg-sky-400">
      <nav className="max-w-[1400px] w-full p-3 flex flex-col md:flex-row justify-around items-center mx-auto">
        <h1 className="text-white font-bold cursor-pointer ">To Do List</h1>
        <div className="flex gap-6 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={icon}></img>
          </span>
          <input
            className="w-[250px] px-3 py-1 pl-10 rounded-lg border focus:border-1 focus:border-sky-500 outline-0 placeholder:text-slate-400 md:w-[400px] "
            placeholder="Input Task"
            type="text"
            name="task"
            maxLength="50"
          />
          <button
            className="bg-sky-300 text-white px-3 py-1 rounded-lg hover:bg-sky-500"
            type="submit"
          >
            Add
          </button>
        </div>
      </nav>
    </div>
  );
};
