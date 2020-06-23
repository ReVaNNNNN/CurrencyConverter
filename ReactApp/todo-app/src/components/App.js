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
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  counter = this.state.tasks.length;

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  addTask = (task) => {
    let tasks = [...this.state.tasks];
    tasks.push(task);

    this.setState({
      tasks,
    });
    this.counter++;

    return true;
  };

  render() {
    return (
      <div className="App">
        <AddTask addTask={this.addTask} counter={this.counter} />
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
