import React from "react";

export default function ProjectSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
         <h1>Projects</h1>
         <div>
             <h2>Movebytes.com</h2>
             <p>Tech: React.js, React Hooks, Axios, Styled-Components</p>
         </div>
         <div>
             <h2>TomKisner.com</h2>
             <p>Tech: React.js, React-Scroll, LESS</p>
         </div>
         <div>
             <h2>Notes Back End</h2>
             <p>Tech: Node.js, Express</p>
         </div>
      </div>
    </div>
  );
}