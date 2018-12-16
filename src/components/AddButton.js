import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { StyledBaseButton } from "../styles/styles";
import colors from "../styles/colors";

const AddButton = ({ onClick, style }) => (
  <StyledAddButton onClick={onClick} style={{ ...style }}>
    {"Add row"}
  </StyledAddButton>
);

AddButton.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object
};

const StyledAddButton = styled(StyledBaseButton)`
  background-color: ${colors.titleBackground};
`;

export default AddButton;
