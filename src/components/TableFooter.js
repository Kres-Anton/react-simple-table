import React from "react";
import AddButton from "./AddButton";

import { StyledFooterRow } from "../styles/styles";

export default props => {
  const { allowAdd, addButtonStyle, footerSectionStyle, onAddRow } = props;
  return (
    <StyledFooterRow>
      {!!allowAdd && (
        <AddButton
          onClick={onAddRow}
          style={{ ...addButtonStyle, ...footerSectionStyle }}
        />
      )}
    </StyledFooterRow>
  );
};
