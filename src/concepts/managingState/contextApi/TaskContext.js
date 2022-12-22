import React, { createContext, useContext, useReducer } from "react";
const TasksContext = createContext(null);
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskRecuder, initialTasks);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TasksContext);
};

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false }
];

const taskRecuder = (state, action) => {
  switch (action.type) {
    case "added": {
      return [...state, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return state.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("UnKnown action:" + action.type);
    }
  }
};

export function useTasks() {
  return useContext(TasksContext);
}
