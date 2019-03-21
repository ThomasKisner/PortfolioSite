import React, { Component } from "react";
import logo from "./logo.svg";
import HomeView from "./views/HomeView";
import "./App.css";
import Section from "./components/section";
import Navbar from "./components/navbar";
import dummyText from "./dummytext";
import { Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import AboutSection from "./components/aboutSection"

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div className="content">
          <AboutSection
            dark={true}
            id="section1"
          />
          <Section
            title="Project"
            subtitle={dummyText}
            dark={false}
            id="section2"
          />
          <Section
            title="Skills"
            subtitle={dummyText}
            dark={true}
            id="section3"
          />
          <Section
            title="Resume"
            subtitle={dummyText}
            dark={false}
            id="section4"
          />
          <Section
            title="Contact"
            subtitle={dummyText}
            dark={true}
            id="section5"
          />
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
