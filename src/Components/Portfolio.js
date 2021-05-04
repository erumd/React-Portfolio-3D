import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <h3>{projects.title}</h3>
              <h4>
              <a href={projects.github_url} target="blank">
                GitHub Link
              </a>
              <a href={projects.deployed_url} target="blank">
                Deployed Link
              </a>
              </h4>

              <img alt={projects.title} src={projectImage} />
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="nine columns collapsed">
            <h2 style={{ color: 'orange' }}>Projects </h2>
            <br></br>
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
