import React, { useEffect, useState } from "react";

function Tool(props) {
  const [image, setImage] = useState(null);

  const { data } = props;

  const loadImage = (fileName) => {
    import(`../../assets/icons/tools/${fileName}.png`).then((image) => {
      setImage(image.default);
    });
  };

  useEffect(() => {
    loadImage(data.icon);
  }, []);

  return (
    <li>
      <img src={image} alt={data.name} />
      <span>{data.name}</span>
    </li>
  );
}

export default Tool;
