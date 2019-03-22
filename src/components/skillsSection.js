import React from "react";

export default function SkillsSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
         <h1>Skills</h1>
         <ul>
            <li>React.JS</li>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>React Hooks</li>
            <li>Node.JS</li>
            <li>Express</li>
            <li>Axios</li>
            <li>Python</li>
            <li>Django</li>
            <li>Heroku</li>
            <li>Git</li>
            <li>CSS</li>
            <li>LESS</li>
            <li>HTML</li>
         </ul>
   
      </div>
    </div>
  );
}