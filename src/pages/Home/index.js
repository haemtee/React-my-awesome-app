import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";

require("dotenv").config();

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    Axios.get(process.env.REACT_APP_BASE_URI + "v1/blog/posts") // || "http://localhost:4000/v1/blog/posts")
      .then((result) => {
        const responseAPI = result.data;
        setDataBlog(responseAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              id={blog._id}
              title={blog.title}
              image={process.env.REACT_APP_BASE_URI + blog.image}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;

//branch belajar sendiri
