import React from "react";

class DigitalClock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() }; // get time
  }

  componentDidMount() {
    // Update time every second
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000);
  }

  componentWillUnmount() {
    // delete interval on removal
    clearInterval(this.update);
  }

  render() {
    const time = this.state.time;

    return (
      <div className="digital-clock">
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default DigitalClock;
