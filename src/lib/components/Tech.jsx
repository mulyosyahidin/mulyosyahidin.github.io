import React, { useEffect, useState } from "react";

function Tech(props) {
  const [image, setImage] = useState(null);

  const { path, icon, name } = props;

  const loadImage = (path, fileName) => {
    import(`../../assets/icons/technologies/${path}/${fileName}.png`).then(
      (image) => {
        setImage(image.default);
      }
    );
  };

  useEffect(() => {
    loadImage(path, icon);
  }, []);

  return (
    <div className="col-3 col-md-2">
      <div className="tech">
        <img src={image} alt={name} />
        <div>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}

export default Tech;
