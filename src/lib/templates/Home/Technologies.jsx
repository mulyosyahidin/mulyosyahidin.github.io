import React from "react";
import config from "../../../config";
import Technology from "../../components/Technology";

function Technologies(props) {
  return (
    <div className="container technologies">
      <div className="row">
        <div className="col-12">
          <h1>Technologies</h1>
        </div>
        <div className="col-12 items">
          {config.technologies.map((item, index) => {
            return <Technology key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
