import React from "react";
import PropTypes from "prop-types";

import { prepaerRow, getHeaderDeleteCellValue } from "./utils/helpers";

import Row from "./components/Row";
import Title from "./components/Title";
import AddButton from "./components/AddButton";
import Loader from "./components/Loader";

import {
  TableStyle,
  HeaderRowStyle,
  DeviderStyle,
  ContentWrapperStyle,
  FooterRowStyle,
  HeaderWrapperStyle
} from "./styles/styles";

class ReactSimpleTable extends React.Component {
  state = {
    rows: null,
    cellPerRow: 0
  };

  contentRef = React.createRef();

  componentDidMount() {
    if (this.props.data) {
      const { rows, header } = this.props.data;
      const cellPerRow = header.length;

      this.setState({ rows, cellPerRow });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      const shouldUpdateState =
        this.state.rows.length !== nextProps.data.rows.length ||
        this.state.rows !== nextProps.data.rows;
      if (shouldUpdateState) {
        const { rows, header } = nextProps;
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

  _renderFooter = () => {
    const { allowAdd, addButtonStyle, footerSectionStyle } = this.props;
    return (
      <div style={FooterRowStyle}>
        {!!allowAdd && (
          <AddButton
            onClick={this._onAddRow}
            style={{ ...addButtonStyle, ...footerSectionStyle }}
          />
        )}
      </div>
    );
  };

  _renderHeader = () => {
    const {
      data,
      title,
      titleStyle,
      headerRowStyle,
      headerCellStyle,
      headerWrapperStyle,
      allowDelete,
      deleteCellStyle
    } = this.props;
    const { header } = data;

    return (
      <div style={{ ...HeaderWrapperStyle, ...headerWrapperStyle }}>
        {!!title && <Title title={title} style={titleStyle} />}
        {!!header && (
          <Row
            data={[
              ...header,
              allowDelete && getHeaderDeleteCellValue(deleteCellStyle)
            ]}
            style={{ ...HeaderRowStyle, ...headerRowStyle }}
            cellStyle={headerCellStyle}
            allowEdit={false}
          />
        )}
      </div>
    );
  };

  _renderContent = () => {
    const {
      rowStyle,
      cellStyle,
      contentWrapperStyle,
      allowDelete,
      deleteCellStyle,
      deleteButtonStyle,
      allowEdit
    } = this.props;
    const { cellPerRow, rows } = this.state;

    return (
      <div
        style={{ ...ContentWrapperStyle, ...contentWrapperStyle }}
        ref={this.contentRef}
      >
        {!!rows &&
          rows.map((row, index) => (
            <React.Fragment key={index}>
              <Row
                data={prepaerRow(row, cellPerRow)}
                style={rowStyle}
                cellStyle={cellStyle}
                allowDelete={allowDelete}
                deleteCellStyle={deleteCellStyle}
                deleteButtonStyle={deleteButtonStyle}
                allowEdit={allowEdit}
                rowIndex={index}
                onEdit={this._onEdit}
                onDelete={() => this._onDeleteRow(index, row)}
              />
              <hr style={DeviderStyle} />
            </React.Fragment>
          ))}
      </div>
    );
  };

  render() {
    const { containerStyle, loaderStyle, loaderComponent, data } = this.props;
    return (
      <div style={{ ...TableStyle, ...containerStyle }}>
        {!!data && this._renderHeader()}
        {!!data && this._renderContent()}
        {!!data && this._renderFooter()}
        {!data && (
          <Loader style={loaderStyle} loaderComponent={loaderComponent} />
        )}
      </div>
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
