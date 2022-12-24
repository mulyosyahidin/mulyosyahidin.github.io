import React from "react";
import Tech from "./Tech";

function Technology(props) {
  const { data } = props;

  return (
    <div className="item languages">
      <div className="row">
        <div className="col-12 col-md-2 d-flex align-items-center">
          <span className="label">{data.group}</span>
        </div>
        <div className="col-12 col-md-10 m-mt-20">
          <div className="row">
            {data.items.map((item, index) => {
              return (
                <Tech
                  key={index}
                  path={data.path}
                  icon={item.icon}
                  name={item.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
