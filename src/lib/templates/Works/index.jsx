import React, { useState } from "react";
import config from "../../../config";
import ProjectCard from "../../elements/ProjectCard";

function Works(props) {
  const projects = config.projects;

  return (
    <div className="works works-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>My Works</h1>
            </div>
            <div className="projects">
              <div className="row">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} data={project} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
