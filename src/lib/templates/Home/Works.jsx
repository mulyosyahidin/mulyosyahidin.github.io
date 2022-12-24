import React from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import ProjectCard from "../../elements/ProjectCard";

function Works(props) {
  const getProjects = config.projects;
  const projects = getProjects.slice(0, 6);

  return (
    <div className="works">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>Some of My Works</h1>
              <span>
                <Link to="/works">View All</Link>
              </span>
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
