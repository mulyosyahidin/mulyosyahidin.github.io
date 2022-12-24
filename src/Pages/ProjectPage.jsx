import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import config from "../config";
import Project from "../lib/templates/Project";

function ProjectPage(props) {
  const { id } = useParams();
  const projects = config.projects;

  const [project, setProject] = useState({
    id: "",
    title: "",
    description: "",
    featuredImage: "",
    url: "",
    startDate: "2022-01-01",
    endDate: "2022-01-31",
    tags: [],
    client: "",
    roles: [],
    responsibilities: [],
    technologies: [],
  });

  useEffect(() => {
    const project = projects.find((project) => project.id === id);

    setProject(project);
  }, id);

  return (
    <>
      <Helmet>
        <title>{project.title}</title>
      </Helmet>

      <Project data={project} />
    </>
  );
}

export default ProjectPage;
