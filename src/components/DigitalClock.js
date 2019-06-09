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

    return <h1>{time.toLocaleTimeString()}</h1>;
  }
}

export default DigitalClock;
