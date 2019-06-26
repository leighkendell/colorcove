// React is installed in the studio and should be treated as a peer dependency
import React from "react";
import logo from "../../../web/src/images/colorcove-logo-solid.svg";

// We recommend using SVGs as they have both a small footprint and scale well
const Logo = () => (
  <img src={logo} alt="Colorcove Logo" width="auto" height="24" />
);

export default Logo;
