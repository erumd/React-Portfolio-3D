import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    // const bio = this.props.data.bio;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    // const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
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
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                      <a href='public/Resume_May2021_ErumDhukka  (2).pdf' download>Click to download</a>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
