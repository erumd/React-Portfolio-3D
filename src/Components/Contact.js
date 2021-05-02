import React, { Component } from 'react';
import Slide from 'react-reveal';
import MyPDF from '../Components/resume.pdf';


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

    // const skillmessage = this.props.data.skillmessage;
    // const education = this.props.data.education.map(function (education) {
    //   return (
    //     <div key={education.school}>
    //       <h3>{education.school}</h3>
    //       <p className="info">
    //         {education.degree} <span>&bull;</span>
    //         <em className="date">{education.graduated}</em>
    //       </p>
    //       <p>{education.description}</p>
    //     </div>
    //   );
    // });

    // const work = this.props.data.work.map(function (work) {
    //   return (
    //     <div key={work.company}>
    //       <h3>{work.company}</h3>
    //       <p className="info">
    //         {work.title}
    //         <span>&bull;</span> <em className="date">{work.years}</em>
    //       </p>
    //       <p>{work.description}</p>
    //     </div>
    //   );
    // });

    // const skills = this.props.data.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });

    return (
      <section id="resume">
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
                    <a href={MyPDF} download="resume_File.pdf" target="_blank">
                      Download Resume
                    </a>
                    <i className="fa fa-download" />
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
