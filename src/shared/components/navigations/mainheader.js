import React from "react";

import "./mainheader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.childern}</header>;
};

export default MainHeader;
