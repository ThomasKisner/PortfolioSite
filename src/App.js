import React, { Component } from "react";
import "./css/index.css";
import Section from "./components/section";
import Navbar from "./components/navbar";
import dummyText from "./dummytext";
import { Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import AboutSection from "./components/aboutSection";
import ProjectSection from "./components/projectSection";
import SkillsSection from "./components/skillsSection";
import ContactSection from "./components/contactSection.js"

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div className="content">
          <AboutSection
            dark={false}
            id="section1"
          />
          <ProjectSection 
            dark={true}
            id="section2"
          />
          <SkillsSection
            title="Skills"
            subtitle={dummyText}
            dark={false}
            id="section3"
          /> 
          <ContactSection 
            dark={true}
            id="section4"
          />
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
