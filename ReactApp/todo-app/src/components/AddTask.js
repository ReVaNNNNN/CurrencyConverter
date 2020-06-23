import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleChecked = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleClick = () => {
    const task = {
      id: this.props.counter,
      text: this.state.text,
      date: this.state.date,
      important: this.state.checked,
      active: true,
      finishDate: null,
    };

    const add = this.props.addTask(task);

    if (add) {
      this.setState({
        text: "",
        checked: false,
        date: this.minDate,
      });
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate += "-12-31";

    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChecked}
          />
          Priorytet
        </label>
        <br />
        <label htmlFor="date">
          Do kiedy zrobić
          <input
            type="date"
            id="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
        </label>
        <br />
        <button type="submit" onClick={this.handleClick}>
          DODAJ
        </button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
