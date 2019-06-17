import React from "react";
import Helmet from "react-helmet";

import star from "./../images/star.png";
import heart from "./../images/heart.png";
import discord from "./../images/phone_icons/discord.png";
import feh from "./../images/phone_icons/feheroes.png";
import gb from "./../images/phone_icons/gf_logo_rb.png";

class Me extends React.Component {
  //   componentDidMount = () => {
  //     document.body.style = "background: #2c2c2c;";
  //   };

  goBack = event => {
    //event.preventDefault();

    this.props.history.push("/");
  };

  header = icon => {
    return (
      <div className="me-header">
        <img src={icon} alt={icon} />
      </div>
    );
  };

  introduction = () => {
    return (
      <div>
        {this.header(star)}
        <p>
          Hello! My name is Leo. <br />
          <br />
          I studied Computer Science at the University of Waterloo. My time
          there has given me the opportunity to discover and refine my passion
          for programming. As a new graduate, I strive to design applications to
          help people in their everyday lives. If I can give someone even a
          single extra minute every day, it's all worth it. Every difference
          counts. <br />
          <br />
          On the internet, I go by the alias <em>Inter</em>. If you see someone
          who might be me, send a message!
        </p>
      </div>
    );
  };

  hobbies = () => {
    return (
      <div>
        {this.header(heart)}
        <p>Here are some things I like:</p>
        <h3>Design</h3>
        <p>
          I enjoy designing icons and logos digitally using software such as
          Adobe Photoshop and Illustrator. I like to think that I have an eye
          for style. I'm always intrigued when I see creative designs, and I
          will often put my own unique spin on some of my favorite designs and
          incorporate it into my own work. <br />
          <br />
          Most of the images on this website are my own creation. In addition,
          here are some app icons I created to better fit my phone's theme:
        </p>
        <div className="icon-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discordapp.com/"
          >
            <img src={discord} alt="Discord" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fire-emblem-heroes.com/"
          >
            <img src={feh} alt="Fire Emblem Heroes" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://granbluefantasy.jp/en/"
          >
            <img src={gb} alt="Granblue Fantasy" />
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Helmet>
          <style>{"body {background-color: #2c2c2c;}"}</style>
          <title>About Me</title>
        </Helmet>
        <button onClick={() => this.goBack()}>Return [TEMP]</button>
        <div className="about">
          {this.introduction()}
          {this.hobbies()}
        </div>
      </div>
    );
  }
}

export default Me;
