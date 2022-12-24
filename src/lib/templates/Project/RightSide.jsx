import React from "react";
import BlockButton from "../../components/BlockButton";
import Client from "./Client";
import Tags from "./Tags";

function RightSide(props) {
  const { tags, client, roles, startDate, endDate, responsibilities, url } =
    props;

  return (
    <div className="col-12 col-md-6">
      <div className="d-flex justify-content-between tags-container">
        <div />
        <Tags tags={tags} />
      </div>
      <div className="working-data">
        <Client
          client={client}
          roles={roles}
          startDate={startDate}
          endDate={endDate}
        />
        <div className="responsibilites">
          <h3>My Responsibilities</h3>
          <ul>
            {responsibilities.map((responsibility, index) => {
              return <li key={index}>{responsibility}</li>;
            })}
          </ul>
        </div>
        <div className="button">
          <BlockButton text="Visit Project" to={url} />
        </div>
      </div>
    </div>
  );
}

export default RightSide;
