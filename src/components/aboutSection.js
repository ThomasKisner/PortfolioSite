import React from "react";

export default function AboutSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>Tom Kisner</h1>
        <h2>Enthusiastic full stack developer with a passion for learning and applying new skills</h2>
        <p>Other stuff</p>
      </div>
    </div>
  );
}