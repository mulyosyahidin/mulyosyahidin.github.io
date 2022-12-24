import React from "react";

function SocialLink(props) {
  const { data, index } = props;

  return (
    <li className={'mr-2'}>
      <a
        href={data.url}
        title={data.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`/src/assets/icons/${data.icon}.png`} alt={data.name} />
      </a>
    </li>
  );
}

export default SocialLink;
