import React from "react";
import { ICFacebook, ICInstagram, ICTwitter } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="text-footer">
          <p>MY BLOG</p>
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICInstagram} />
        </div>
      </div>
      <div className="copyright">
        <p>© 2020 Allright Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
