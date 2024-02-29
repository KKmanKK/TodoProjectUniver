import { StateCreator, create } from "zustand";

export interface Task {
  id: string;
  title: string;
}

export interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}
// function isTodoStore(object: any): object is ToDoStore {
//   return "tasks" in object;
// }
// const localStorageUpdate =
//   <T extends State>(config: StateCreator<T>): StateCreator<T> =>
//   (set, get, api) =>
//     config(
//       (nextState, ...args) => {
//         if (isTodoStore(nextState)) {
//           window.localStorage.setItem("tasks", JSON.stringify(nextState.tasks));
//         }
//         set(nextState, ...args);
//       },
//       get,
//       api
//     );
// const getCurrentState = () => {
//   try {
//     let stringLocal = window.localStorage.getItem("tasks");
//     const currentState = JSON.parse(
//       stringLocal !== null ? stringLocal : ""
//     ) as Task[];
//     return currentState;
//   } catch (err) {
//     window.localStorage.setItem("tasks", "[]");
//   }
//   return [];
// };
const toDoStore: StateCreator<ToDoStore> = (set, get) => ({
  tasks: [],
  createTask: (title) => {
    const { tasks } = get();
    set({
      tasks: [
        {
          id: new Date().toUTCString(),
          title,
        },
        ...tasks,
      ],
    });
  },
  updateTask: (id, title) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title,
          };
        }
        return task;
      }),
    });
  },
  removeTask: (id) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id),
    });
  },
});
export const useToDoStore = create<ToDoStore>()(toDoStore);
