import React from "react";
import PropTypes from "prop-types";

import { AddButtonStyle } from "../styles/styles";

const AddButton = ({ onClick, style }) => (
  <button onClick={onClick} style={{ ...AddButtonStyle, ...style }}>
    {"Add row"}
  </button>
);

AddButton.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default AddButton;
