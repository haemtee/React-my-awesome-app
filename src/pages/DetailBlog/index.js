import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "../../components";
import "./detailblog.scss";

const DetailBlog = () => {
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:4000/v1/blog/post/${history.location.state.id}`)
      .then((result) => {
        const responseAPI = result.data;
        setPost(responseAPI.data);
        setAuthor(responseAPI.data.author);
        //console.log(post);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="detail-blog-wrapper">
      <img
        className="img-cover"
        src={`http://localhost:4000/${post.image}`}
        alt="preview"
      />
      <p className="blog-title">{post.title}</p>
      <p className="blog-author">
        {author.name} - {post.createdAt}
      </p>
      <p className="blog-body">{post.body}</p>
      <Link title="Back to Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
