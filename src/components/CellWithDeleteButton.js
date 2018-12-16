import React from "react";
import PropTypes from "prop-types";

import { StyledDeletCell, DeleteButtonStyle } from "../styles/styles";

const CellWithDeleteButton = ({ style, onDelete, buttonStyle }) => (
  <StyledDeletCell style={{ ...style }}>
    <DeleteButtonStyle onClick={onDelete} style={{ ...buttonStyle }}>
      Delete
    </DeleteButtonStyle>
  </StyledDeletCell>
);

CellWithDeleteButton.propTypes = {
  onDelete: PropTypes.func,
  style: PropTypes.object,
  buttonStyle: PropTypes.object
};

export default CellWithDeleteButton;
