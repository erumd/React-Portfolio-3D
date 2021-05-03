import React, { Component } from 'react';
import Fade from 'react-reveal';
class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = 'images/' + this.props.data.image;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={profilepic} alt="Profile Pic" />
            </div>
            <div className="nine columns main-col">
              <h1 style={{ color: 'orange' }}>About Me</h1>

              <h4 style={{ color: 'ivory' }}>
                I am a Full Stack Web Developer from Rice University Bootcamp. I
                have a background in education and healthcare. I am a Life-long
                learner, effective at combining creativity and problem solving
                skills to develop user-friendly applications. Strengths in
                teamwork and building projects from ideation to execution.
                <br></br>
                <br></br>
                My passion for coding began a few months after COVID hit in
                March 2020. During lockdown I realized how small our world had
                become. As a teacher (with a background in education) I impact
                the lives of the students in my class. By learning coding I felt
                I could make applications that could impact the lives of many
                more. Fun fact about me is that I have a little brother named
                Dukes. Before we got him I was scared of dogs. Having him in my
                life has taught me that fear is something that can be overcome
                with time and persistency.
              </h4>
              <div className="row"></div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
