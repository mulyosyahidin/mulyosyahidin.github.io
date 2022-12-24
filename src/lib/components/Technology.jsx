import React from "react";

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
                <div className="col-3 col-md-2" key={index}>
                  <div className="tech">
                    <img
                      src={`/src/assets/icons/technologies/${data.path}/${item.icon}.png`}
                      alt={item.name}
                    />
                    <div>
                      <span>{item.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
