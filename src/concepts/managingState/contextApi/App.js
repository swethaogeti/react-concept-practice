import React from "react";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";
import { TaskProvider } from "./TaskContext";

export const TaskApp = () => {
  return (
    <TaskProvider>
      <AddTask />
      <hr />
      <TaskList />
    </TaskProvider>
  );
};
