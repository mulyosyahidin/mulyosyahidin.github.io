import React from "react";

function Tool(props) {
  const { data } = props;

  return (
    <li>
      <img src={`/src/assets/icons/tools/${data.icon}.png`} alt={data.name} />
      <span>{data.name}</span>
    </li>
  );
}

export default Tool;
