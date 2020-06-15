import React, { Component } from "react";
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  }

  render() {
    console.log(new Date().getTime());
    const words = this.state.words.map((word) => (
      <Word key={word.id} en={word.en} pl={word.pl} />
    ));
    return <ul>{this.state.isLoaded ? words : "Wczytuję dane"}</ul>;
  }
}

export default App;
