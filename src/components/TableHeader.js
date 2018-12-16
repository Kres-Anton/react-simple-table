import React from "react";

import HeaderRow from "./HeaderRow";
import Title from "./Title";
import { StyledHeaderWrapper } from "../styles/styles";

import { getHeaderDeleteCellValue } from "../utils/helpers";

export default props => {
  const {
    title,
    titleStyle,
    headerRowStyle,
    headerCellStyle,
    headerWrapperStyle,
    allowDelete,
    deleteCellStyle,
    header
  } = props;

  return (
    <StyledHeaderWrapper style={{ ...headerWrapperStyle }}>
      {!!title && <Title title={title} style={titleStyle} />}
      {!!header && (
        <HeaderRow
          data={[
            ...header,
            allowDelete && getHeaderDeleteCellValue(deleteCellStyle)
          ]}
          style={{ ...headerRowStyle }}
          cellStyle={headerCellStyle}
        />
      )}
    </StyledHeaderWrapper>
  );
};
