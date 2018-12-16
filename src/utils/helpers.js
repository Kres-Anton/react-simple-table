const _getAdditionalCell = count => Array(count).fill({ value: "" });

export const prepaerRow = (row, length) => {
  if (row.length >= length) {
    return row;
  }
  const numberOfAdditionalCells = length - row.length;

  return [...row, ..._getAdditionalCell(numberOfAdditionalCells)];
};

export const getHeaderDeleteCellValue = customStyle => ({
  value: "",
  cellStyle: { flex: 0.5, ...customStyle }
});
