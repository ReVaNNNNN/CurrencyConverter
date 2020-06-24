import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  done.sort((a, b) => b.finishDate - a.finishDate);
  active.sort((a, b) => b.text.toLowerCase() - a.text.toLowerCase());

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
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
        {activeTasks.length > 0 ? activeTasks : <p> Brak zadań, brawo !</p>}
      </div>

      <hr />

      <div className="done">
        <h3>
          Zadania zrobione: <em>({doneTasks.length})</em>
        </h3>
        {doneTasks.slice(0, 3)}
      </div>
    </>
  );
};

export default TaskList;
