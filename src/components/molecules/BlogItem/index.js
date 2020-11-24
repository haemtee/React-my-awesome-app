import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";
import "./blogitem.scss";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, name, date, body } = props;

  let dateObj = new Date(date);
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  let dt = dateObj.getDate();
  let hour = dateObj.getUTCHours() + 7;
  let minute = dateObj.getUTCMinutes();
  let second = dateObj.getUTCSeconds();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  const fullDate =
    dt + "-" + month + "-" + year + " " + hour + ":" + minute + ":" + second;

  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name} at {fullDate}
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
                date: fullDate,
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
