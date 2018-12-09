import React from "react";
import PropTypes from "prop-types";

import { TitleStyle } from "../styles/styles";

const Title = ({ title, style }) => (
  <div style={{ ...TitleStyle, ...style }}>{title}</div>
);
Title.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object
};
export default Title;
