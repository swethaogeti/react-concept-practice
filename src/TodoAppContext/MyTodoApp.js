import React from "react";

import { AddTask } from "./AddTask";
import { TaskProvider } from "./TaskContext";
import { TaskList } from "./TaskList";

export const MyTodoApp = () => {
  return (
    <TaskProvider>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
};
