import React from "react";

import Row from "./Row";
import { StyledDevider, StyledContentWrapper } from "../styles/styles";

import { prepaerRow } from "../utils/helpers";

export default props => {
  const {
    rowStyle,
    cellStyle,
    contentWrapperStyle,
    allowDelete,
    deleteCellStyle,
    deleteButtonStyle,
    allowEdit,
    cellPerRow,
    rows,
    contentRef,
    onEdit,
    onDeleteRow
  } = props;
  if (!cellPerRow || !rows) {
    return null;
  }

  return (
    <StyledContentWrapper style={{ ...contentWrapperStyle }} ref={contentRef}>
      {!!rows &&
        rows.map((row, index) => (
          <React.Fragment key={index + Math.random()}>
            <Row
              data={prepaerRow(row, cellPerRow)}
              style={rowStyle}
              cellStyle={cellStyle}
              allowDelete={allowDelete}
              deleteCellStyle={deleteCellStyle}
              deleteButtonStyle={deleteButtonStyle}
              allowEdit={allowEdit}
              rowIndex={index}
              onEdit={onEdit}
              onDelete={() => onDeleteRow(index, row)}
            />
            <StyledDevider />
          </React.Fragment>
        ))}
    </StyledContentWrapper>
  );
};
