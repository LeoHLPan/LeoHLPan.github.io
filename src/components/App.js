import React from "react";
import DigitalClock from "./DigitalClock";
import Title from "./Title";
import "../style.css";

class App extends React.Component {
  goToAbout = event => {
    this.props.history.push("/about");
  };

  render() {
    return (
      <div className="app">
        <DigitalClock />
        <Title />
        <button className="me-button" onClick={() => this.goToAbout()} />
        <button className="resume-button" />
      </div>
    );
  }
}

export default App;
