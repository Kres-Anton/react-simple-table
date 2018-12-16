import React from "react";
import PropTypes from "prop-types";

import { StyledTitle } from "../styles/styles";

const Title = ({ title, style }) => (
  <StyledTitle style={{ ...style }}>{title}</StyledTitle>
);
Title.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object
};
export default Title;
