import React from "react";
import PropTypes from "prop-types";

import Cell from "./Cell";
import CellWithDeleteButton from "./CellWithDeleteButton";

import { StyledRow } from "../styles/styles";

const Row = props => {
  const {
    data,
    style,
    cellStyle,
    allowDelete,
    onDelete,
    deleteCellStyle,
    deleteButtonStyle,
    allowEdit,
    onEdit,
    rowIndex
  } = props;

  return (
    <StyledRow style={{ ...style }}>
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
      {!!allowDelete && (
        <CellWithDeleteButton
          onDelete={onDelete}
          style={deleteCellStyle}
          buttonStyle={deleteButtonStyle}
        />
      )}
    </StyledRow>
  );
};

Row.propTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  CellComponent: PropTypes.func,
  rowIndex: PropTypes.number,
  cellStyle: PropTypes.object,
  allowDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  deleteCellStyle: PropTypes.object,
  deleteButtonStyle: PropTypes.object,
  allowEdit: PropTypes.bool,
  onEdit: PropTypes.func
};

export default Row;
