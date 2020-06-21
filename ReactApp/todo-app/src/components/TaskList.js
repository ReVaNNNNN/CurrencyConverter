import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h2>Lista Zadań: </h2>
        {tasks}
      </div>

      <hr />

      <div className="done">
        <h3>Zadania zrobione: </h3>
      </div>
    </>
  );
};

export default TaskList;
