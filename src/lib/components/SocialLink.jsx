import React, { useEffect, useState } from "react";

function SocialLink(props) {
  const [image, setImage] = useState(null);

  const { data, index } = props;

  const loadImage = (fileName) => {
    import(`../../assets/icons/${fileName}.png`).then((image) => {
      setImage(image.default);
    });
  };

  useEffect(() => {
    loadImage(data.icon);
  }, []);

  return (
    <li className={"mr-2"}>
      <a
        href={data.url}
        title={data.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image} alt={data.name} />
      </a>
    </li>
  );
}

export default SocialLink;
