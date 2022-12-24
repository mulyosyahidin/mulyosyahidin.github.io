import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { data } = props;

  return (
    <div className="col-12 col-md-4">
      <Link to={`/project/${data.id}`}>
        <div className="card project">
          <img src={data.featuredImage} alt={data.title} />
          <div className="card-body">
            <div className="title">
              <h3>{data.title}</h3>
            </div>
            <div className="tags">
              {data.tags.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
