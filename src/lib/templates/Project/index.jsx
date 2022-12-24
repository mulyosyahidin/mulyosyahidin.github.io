import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import BlockButton from "../../components/BlockButton";
import Images from "./Images";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Title from "./Title";

function Project(props) {
  const { data } = props;

  return (
    <div className="container project-page">
      <Title title={data.title} />

      <Images featuredImage={data.featuredImage} />

      <div className="desc row">
        <LeftSide
          description={data.description}
          technologies={data.technologies}
        />

        <RightSide
          tags={data.tags}
          client={data.client}
          roles={data.roles}
          startDate={data.startDate}
          endDate={data.endDate}
          responsibilities={data.responsibilities}
          url={data.url}
        />
      </div>
    </div>
  );
}

export default Project;
