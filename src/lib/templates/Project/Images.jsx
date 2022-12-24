import React from "react";

function Images(props) {
  const { featuredImage } = props;

  return (
    <div className="images">
      <div className="row">
        <div className="col-md-8">
          <img src={featuredImage} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-md-4 d-none d-md-block">
          <div className="row">
            <div className="col-12">
              <img
                src="https://via.placeholder.com/960x540"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-12 mt-3">
              <img
                src="https://via.placeholder.com/960x540"
                alt=""
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
