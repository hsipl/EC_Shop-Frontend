import React from "react";
import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";

import "./Header.css";

export const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="header-left">
        <LeftMenu />
      </div>
      <div className="header-right">
        <RightMenu />
      </div>
    </div>
  );
};
