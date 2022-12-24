import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { data } = props;

  return (
    <div className="col-12 col-md-4 mb-3 d-flex align-items-stretch">
      <div className="card project">
        <img src={data.featuredImage} alt={data.title} />
        <div className="card-body d-flex flex-column">
          <div className="title">
            <Link to={`/project/${data.id}`}>
              <h3>{data.title}</h3>
            </Link>
          </div>
          <div className="tags mt-auto align-self-start">
            {data.tags.map((tag, index) => {
              return <span key={index}>{tag}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
