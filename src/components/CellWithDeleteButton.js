import React from "react";
import PropTypes from "prop-types";

import { CellStyle, DeleteButtonStyle, DeletCellStyle } from "../styles/styles";

const CellWithDeleteButton = ({ style, onDelete, buttonStyle }) => (
  <div style={{ ...CellStyle, ...DeletCellStyle, ...style }}>
    <div onClick={onDelete} style={{ ...DeleteButtonStyle, ...buttonStyle }}>
      Delete
    </div>
  </div>
);

CellWithDeleteButton.propTypes = {
  onDelete: PropTypes.func,
  style: PropTypes.object,
  buttonStyle: PropTypes.object
};

export default CellWithDeleteButton;
