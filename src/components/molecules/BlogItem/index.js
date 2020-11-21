import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";
import "./blogitem.scss";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, name, date, body } = props;

  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body.substring(0, 100) + "..."}</p>
        <Gap height={12} />
        <Button
          title="View Detail"
          onClick={() =>
            history.push({
              pathname: "/detail-blog/",
              state: {
                image: image,
                title: title,
                name: name,
                date: date,
                body: body,
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default BlogItem;
