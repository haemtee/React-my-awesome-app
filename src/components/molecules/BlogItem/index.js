import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogitem.scss";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Exercitation ea laborum sint ad duis est culpa tempor consectetur
          dolor elit qui mollit. Adipisicing minim Lorem proident nulla sunt
          nulla consequat ex dolor dolor voluptate eiusmod. Consequat voluptate
          nostrud exercitation esse culpa cillum adipisicing.
        </p>
        <Gap height={12} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
