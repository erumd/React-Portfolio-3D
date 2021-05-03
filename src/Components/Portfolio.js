import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <h1>{projects.title}</h1>
              <a href={projects.github_url} target="blank">
                GitHub Link
              </a>
              <a href={projects.deployed_url} target="blank">
                Deployed Link
              </a>

              {/* <a href={projects.url} title={projects.title}> */}
              <img alt={projects.title} src={projectImage} />
              {/* <div className="overlay"> */}
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
              {/* </div> */}
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
              {/* </a> */}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        {/* <Link to="/portfolio">Contact</Link> */}
        <div className="row">
          <div className="nine columns collapsed">
            <h2>Projects </h2>
            <br></br>

            <div id="portfolio-wrapper" className="bgrid cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
