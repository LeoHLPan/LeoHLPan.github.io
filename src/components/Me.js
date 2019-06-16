import React from "react";
import Helmet from "react-helmet";

class Me extends React.Component {
  //   componentDidMount = () => {
  //     document.body.style = "background: #2c2c2c;";
  //   };

  goBack = event => {
    //event.preventDefault();

    this.props.history.push("/");
  };

  introduction = () => {
    return (
      <div>
        <Helmet>
          <style>{"body {background-color: #2c2c2c;}"}</style>
        </Helmet>
        <p>
          Hello! My name is Leo. <br />
          <br />I studied Computer Science at the University of Waterloo. My
          time there has given me the opportunity to discover and refine my
          passion for programming. As a new graduate, I strive to design
          applications to help people in their everyday lives. If I can give
          someone even a single extra minute every day, it's all worth it. Every
          difference counts. <br />
          <br />
        </p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <button onClick={() => this.goBack()}>Return [TEMP]</button>
        <div className="about">{this.introduction()}</div>
      </div>
    );
  }
}

export default Me;
