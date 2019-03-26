import React from "react";
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';

const porfolioInner = `innerTile portfolio`;
const movebytesInner = `innerTile movebytes`;
const notesBackEndInner = `innerTile backend`;
const classes = `section-content projects`;

export default function ProjectSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className={classes} id={id}>
        <h1>Projects</h1>
        <div className="projectTilesContainer">
          <div className="projectTileAndText">
            <div className="projectTile">
              <div className={movebytesInner} />
              <div className="projectText">
                <h2>Movebytes.com <a href="https://github.com/Lambda-School-Labs/labs10-big-files" target="_blank"><FaGithub className="fa"/></a> <a href="https://www.movebytes.com/" target="_blank"><FaGlobeAmericas className="fa"/></a></h2>
                <p>
                  Tech Stack: React.js(Hooks), Axios, Styled-Components
                </p>
                <p>
                  A simple to use file transfer site which allows you to send your file to anyone via an automated download link. 
                </p>
              </div>
            </div>
          </div>
          <div className="projectTileAndText">
            <div className="projectTile">
              <div className={porfolioInner} />
              <div className="projectText">
                <h2>TomKisner.com <a href="https://github.com/ThomasKisner/PortfolioSite" target="_blank"><FaGithub className="fa"/></a> <a href="http://www.tomkisner.com" target="_blank"><FaGlobeAmericas className="fa"/></a></h2>
                <p>Tech Stack: React.js, React-Scroll, LESS</p>
                <p>
                  Single page portfolio site displaying information about
                  myself, some of my projects, and options to contact me.
                </p>
              </div>
            </div>
          </div>
          <div className="projectTileAndText">
            <div className="projectTile">
              <div className={notesBackEndInner} />
              <div className="projectText">
                <h2>Notes Back End <a href="https://github.com/ThomasKisner/back-end-project" target="_blank"><FaGithub className="fa"/></a> </h2>
                {/* <a href="https://github.com/ThomasKisner?tab=repositories" target="_blank"><FaGlobeAmericas className="fa"/></a>  */}
                <p>Tech Stack: Node.js, Express, PostgreSQL</p>
                <p>
                  A backend created to interface with an existing note
                  taking application backend enabling display, editing, and
                  deletion of notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
