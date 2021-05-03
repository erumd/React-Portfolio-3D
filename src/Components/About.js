import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from 'react-router-dom';


class About extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;

    return (
      <section id="about">
        {/* <Link to="/About">About</Link> */}
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
                
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>
              I am a Full Stack Web Developer from Rice University Bootcamp. I have a background in education and healthcare. 
              I am a Life-long learner, effective at combining creativity and problem solving skills to develop user-friendly applications.
               Strengths in teamwork and building projects from ideation to execution.
               <br></br>
              My passion for coding began a few months after COVID hit in March 2020. During lockdown I realized how small our world had become. As a teacher (with a background in education) I impact the lives of the students in my class. By learning coding I felt I could make applications that could impact the lives of many more.
              Fun fact about me is that I have a little brother named Dukes. Before we got him I was scared of dogs. Having him in my life has taught me that fear is something that can be overcome with time and persistency.
              </p>
              <div className="row">
                {/* <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <br />
                    <span>Houston, TX</span>
                    <br />
                    <span>erumdhukka531@gmail.com</span>
                    <br />
                    <span></span>
                  </p>
                </div> */}
                {/* <div className="columns download">
                <Fade bottom duration={2000}>
                <ul className="social">
                
                    <a href='./public/Resume_May2021_ErumDhukka  (2).pd' className="button">
                    <i className="resume"></i>Download Resume
                    </a>
                  <br></br>
                    <a href={github} className="button btn github-btn">
                      <i className="fa fa-github"></i>Github
                    </a>
                    <br></br>
                    <a href={linkedin} className="button btn linkedin-btn">
                      <i className="fa fa-linkedin"></i>linkedin
                    </a>
               </ul>
              </Fade>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
