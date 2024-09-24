import { create } from "zustand";

export const toDoStore = create((set, get) => ({
  tasks: [],
  addToDo: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: state.tasks.length + 1, description: task },
      ],
    })),
  removeToDo: (id) =>
    set((state) => {
      const updateTasks = state.tasks.filter((task) => task.id !== id);
      const newTask = updateTasks.map((task, index) => ({
        ...task,
        id: index + 1,
      }));
      return { tasks: newTask };
    }),
    totalTasks: () => {
      return get().tasks.length
    }
}));
