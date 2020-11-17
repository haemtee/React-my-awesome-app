import React from "react";
import { useHistory } from "react-router-dom";

import { RegisterBg } from "../../assets";
import { Link } from "../../components";
import "./detailblog.scss";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="preview" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Minim do ut minim velit incididunt cillum adipisicing pariatur aliqua
        labore exercitation duis cillum. Commodo laborum amet nisi laboris
        incididunt deserunt aliquip. Id excepteur magna amet ipsum exercitation
        in veniam velit tempor ea labore enim. Duis veniam ad amet officia
        commodo officia labore non officia. Incididunt dolor irure consequat ea
        nisi. Irure esse eiusmod est in adipisicing sint tempor labore elit.
        Minim incididunt eiusmod consectetur in nisi. Mollit labore nulla anim
        eu ullamco voluptate nulla nulla Lorem incididunt aliqua mollit tempor.
        Nostrud Lorem dolore consectetur id minim pariatur. Cupidatat sit Lorem
        consectetur nostrud velit exercitation magna dolor nisi proident labore
        culpa nulla. Deserunt non et sit pariatur dolor veniam dolor excepteur
        culpa cillum dolor ut. Minim est sunt nostrud ea Lorem culpa. Ullamco
        eiusmod dolor do aliquip amet eu exercitation ullamco labore ex
        consectetur ullamco qui minim. Non ut anim sint ad pariatur aute amet
        aliqua. Cupidatat et sint anim dolore officia ex Lorem exercitation
        consequat.
      </p>
      <Link title="Back to Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
