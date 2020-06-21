import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Dostać się do Gold III",
        date: "2020-09-10",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Skończyć kurs React",
        date: "2020-07-21",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Przebiec maraton",
        date: "2020-11-10",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
  };

  changeTaskStatus = (id) => {
    console.log("change status");
  };

  render() {
    return (
      <div className="App">
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
