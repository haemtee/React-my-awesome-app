import React from "react";
import { useHistory } from "react-router-dom";

import { Link } from "../../components";
import "./detailblog.scss";

const DetailBlog = () => {
  const history = useHistory();

  const { image, title, name, date, body } = history.location.state;

  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={image} alt="preview" />
      <p className="blog-title">{title}</p>
      <p className="blog-author">
        {name} - {date}
      </p>
      <p className="blog-body">{body}</p>
      <Link title="Back to Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
