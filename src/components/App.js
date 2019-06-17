import React from "react";
import DigitalClock from "./DigitalClock";
import Title from "./Title";
import "../style.css";
import resumepdf from "../assets/resume.pdf";

class App extends React.Component {
  goToAbout = event => {
    this.props.history.push("/about");
  };

  render() {
    return (
      <div className="app">
        <DigitalClock />
        <Title />
        <button
          className="me-button"
          title="about me"
          onClick={() => this.goToAbout()}
        />
        <button
          className="resume-button"
          title="resume"
          onClick={() => window.open(resumepdf)}
        />
      </div>
    );
  }
}

export default App;
