import React from "react";
import PropTypes from "prop-types";

import { prepaerRow } from "./utils/helpers";

import Loader from "./components/Loader";
import TableHeader from "./components/TableHeader";
import TableFooter from "./components/TableFooter";
import TableContent from "./components/TableContent";

import { StyledTable } from "./styles/styles";

class ReactSimpleTable extends React.Component {
  state = {
    rows: null,
    cellPerRow: 0
  };

  contentRef = React.createRef();

  componentDidMount() {
    if (this.props.data) {
      const { rows = [], header = [] } = this.props.data;
      const cellPerRow = header.length;

      this.setState({ rows, cellPerRow });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      const shouldUpdateState =
        !this.state.rows ||
        this.state.rows.length !== nextProps.data.rows.length ||
        this.state.rows !== nextProps.data.rows;
      if (shouldUpdateState) {
        const { rows = [], header = [] } = nextProps.data;
        const cellPerRow = header.length;

        this.setState({ rows, cellPerRow });
      }
    }
  }

  _scrollToBottomTable = () => {
    const scrollHeight = this.contentRef.current.scrollHeight;
    const height = this.contentRef.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.contentRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  _onAddRow = () => {
    const { rows, cellPerRow } = this.state;
    this.setState({ rows: [...rows, prepaerRow([], cellPerRow)] }, () => {
      this.props.onAdd();
      this._scrollToBottomTable();
    });
  };

  _onDeleteRow = (index, row) => {
    const { rows } = this.state;
    rows.splice(index, 1);
    this.setState({ rows }, () => {
      this.props.onDelete(index, row);
    });
  };

  _onEdit = (rowIndex, cellIndex, value) => {
    const { rows } = this.state;
    rows[rowIndex].splice(cellIndex, 1, value);
    this.setState({ rows }, () => {
      this.props.onEdit(rowIndex, rows[rowIndex]);
    });
  };

  render() {
    const {
      data,
      title,
      titleStyle,
      headerRowStyle,
      headerCellStyle,
      headerWrapperStyle,
      allowDelete,
      deleteCellStyle,
      containerStyle,
      loaderStyle,
      loaderComponent,
      allowAdd,
      addButtonStyle,
      footerSectionStyle,
      allowEdit,
      rowStyle,
      cellStyle,
      contentWrapperStyle,
      deleteButtonStyle
    } = this.props;
    const { cellPerRow, rows } = this.state;
    const { header } = data || {};

    return (
      <StyledTable style={{ ...containerStyle }}>
        {!!data && (
          <React.Fragment>
            <TableHeader
              title={title}
              titleStyle={titleStyle}
              headerRowStyle={headerRowStyle}
              headerCellStyle={headerCellStyle}
              headerWrapperStyle={headerWrapperStyle}
              allowDelete={allowDelete}
              deleteCellStyle={deleteCellStyle}
              header={header}
            />
            <TableContent
              contentRef={this.contentRef}
              cellPerRow={cellPerRow}
              deleteButtonStyle={deleteButtonStyle}
              contentWrapperStyle={contentWrapperStyle}
              cellStyle={cellStyle}
              rowStyle={rowStyle}
              rows={rows}
              allowEdit={allowEdit}
              allowDelete={allowDelete}
              deleteCellStyle={deleteCellStyle}
              deleteButtonStyle={deleteButtonStyle}
              onEdit={this._onEdit}
              onDeleteRow={this._onDeleteRow}
            />
            <TableFooter
              allowAdd={allowAdd}
              addButtonStyle={addButtonStyle}
              footerSectionStyle={footerSectionStyle}
              onAddRow={this._onAddRow}
            />
          </React.Fragment>
        )}
        {!data && (
          <Loader style={loaderStyle} loaderComponent={loaderComponent} />
        )}
      </StyledTable>
    );
  }
}

ReactSimpleTable.propTypes = {
  data: PropTypes.object,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
  rowStyle: PropTypes.object,
  cellStyle: PropTypes.object,
  headerRowStyle: PropTypes.object,
  headerCellStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  contentWrapperStyle: PropTypes.object,
  headerWrapperStyle: PropTypes.object,
  allowAdd: PropTypes.bool,
  onAdd: PropTypes.func,
  allowDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  deleteCellStyle: PropTypes.object,
  deleteButtonStyle: PropTypes.object,
  addButtonStyle: PropTypes.object,
  footerSectionStyle: PropTypes.object,
  allowEdit: PropTypes.bool,
  onEdit: PropTypes.func,
  loader: PropTypes.bool,
  loaderStyle: PropTypes.object,
  loaderComponent: PropTypes.func
};

ReactSimpleTable.defaultProps = {
  onAdd: () => void 0,
  onDelete: () => void 0,
  onEdit: () => void 0,
  allowAdd: true,
  allowDelete: true,
  allowEdit: true,
  loader: true
};

export default ReactSimpleTable;
