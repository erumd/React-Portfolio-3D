import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
// import {Routes, Route } from 'react-router-dom';
import { BrowserRouter,  Switch, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.social} />
        <Portfolio data={this.state.resumeData.portfolio} />
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />

        {/* <BrowserRouter> */}
         
              {/* <About data={this.state.resumeData.main} /> */}
              {/* <Route path="/about" data={this.state.resumeData.main} /> */}

              {/* <Contact data={this.state.resumeData.resume} /> */}
              {/* <Route path="/contact" data={this.state.resumeData.resume}  /> */}

              {/* <Portfolio data={this.state.resumeData.portfolio} />  */}
              {/* <Route path="/portfolio" ata={this.state.resumeData.portfolio} /> */}
          
          {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
