import React from "react";
import PropTypes from "prop-types";

import Cell from "./Cell";

import { StyledHeaderRow } from "../styles/styles";

const HeaderRow = props => {
  const { data, style, cellStyle, allowEdit, onEdit, rowIndex } = props;

  return (
    <StyledHeaderRow style={{ ...style }}>
      {data.map((cell, index) => (
        <Cell
          cell={cell}
          key={index}
          style={cellStyle}
          rowIndex={rowIndex}
          cellIndex={index}
          allowEdit={allowEdit}
          onEdit={onEdit}
        />
      ))}
    </StyledHeaderRow>
  );
};

HeaderRow.propTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  CellComponent: PropTypes.func,
  rowIndex: PropTypes.number,
  cellStyle: PropTypes.object,
  deleteCellStyle: PropTypes.object,
  allowEdit: PropTypes.bool,
  onEdit: PropTypes.func
};

export default HeaderRow;
