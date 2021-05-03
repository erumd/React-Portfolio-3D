import React, { Component } from 'react';
import Slide from 'react-reveal';
import MyPDF from './resume.pdf';

import { Link } from 'react-router-dom';

class Contact extends Component {
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const github = this.props.data.github;
    const linkedin = this.props.data.linkedin;

    return (
      <section id="resume">
        {/* <Link to="/resume">Contact</Link> */}
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>contact me</span>
              </h1>
            </div>
            <div className="columns download">
              <h1>
                <a href="mailto:erumdhukka531@gmail.com">
                  erumdhukka531@gmail.com
                </a>
              </h1>
              <h1>832-860-3130</h1>

              <Slide bottom duration={2000}>
                <ul className="social">
                  <button>
                    <a
                      target="_blank"
                      href={MyPDF}
                      download="resume_File.pdf"
                    ></a>
                    <i className="fa fa-download" /> Download Resume
                  </button>
                  <br></br>

                  <a href={github} className="button btn github-btn">
                    <i className="fa fa-github"></i>Github
                  </a>
                  <br></br>
                  <a href={linkedin} className="button btn linkedin-btn">
                    <i className="fa fa-linkedin"></i>linkedin
                  </a>
                </ul>
              </Slide>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Contact;
