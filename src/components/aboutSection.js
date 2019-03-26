import React from "react";

export default function AboutSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>Tom Kisner</h1>
        <h2>Enthusiastic full stack developer with a passion for learning and applying new skills</h2>
        <p>Proven track record of handling deadlines in stressful situations. Capable of getting up to speed quickly in a new environment. Someone who enjoys being part of a larger team and working towards a common goal. Excited to apply learned skills and to continue to develop skillset. More personally, huge Chicago Bears fan. Aircooled Volkswagen enthusiast, although I enjoy all old/quirky/or manual cars. Owner of 2 rescue dogs (a jack russell and a plot? hound). Lover of travel and road trips.</p>
      </div>
    </div>
  );
}