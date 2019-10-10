import React from "react";
import { Link } from "react-router-dom";
const Post = ({ data }) => {
  const { title, categories } = data;

  return (
    <>
      {title === null ? null : categories === null ? null : (
        <div className="postContainer">
          <div className="title">{title}</div>
          <div className="categories">
            <span>{categories}</span>
          </div>
          <div className="moreContainer">
            <div className="moreDetail">
              <Link to={"/posts/" + data.id}></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
