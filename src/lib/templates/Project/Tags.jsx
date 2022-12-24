import React, { useEffect, useState } from "react";

function Tags(props) {
  const { tags } = props;

  return (
    <div className="tags">
      {tags.map((tag, index) => {
        return (
          <span key={index} className="tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
}

export default Tags;
