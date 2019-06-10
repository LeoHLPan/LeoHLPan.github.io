import React from "react";
import DigitalClock from "./DigitalClock";
import Title from "./Title";
import "../style.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <DigitalClock />
        <Title />
      </div>
    );
  }
}

export default App;
