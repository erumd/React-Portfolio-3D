import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="square" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <h3>
              <a className="smoothscroll" href="#about">
                About
              </a>
              </h3>
            </li>
            <li>
              <h3>
              <a className="smoothscroll" href="#resume" target="_blank">
                Contact
              </a>
              </h3>
            </li>
            <li>
              <h3>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
              </h3>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
