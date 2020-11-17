import React from "react";

import "./textarea.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="textarea" {...rest} />
    </div>
  );
};

export default TextArea;
