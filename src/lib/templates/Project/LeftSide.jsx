import React from "react";

function LeftSide(props) {
  const { description, technologies } = props;

  return (
    <div className="col-12 col-md-6">
      <div className="about">
        <h3>Tentang</h3>
        <p>{description} </p>
      </div>
      <div className="techs">
        <h3>Technologies Used</h3>
        <ul>
          {technologies.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeftSide;
