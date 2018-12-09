import React from "react";
import PropTypes from "prop-types";

import { CellStyle, InputStyle } from "../styles/styles";

class Cell extends React.Component {
  state = {
    value: "",
    inputMode: false
  };

  inputRef = React.createRef();

  componentDidMount() {
    const { cell } = this.props;
    this.setState({ value: cell.value });
  }

  componentDidUpdate() {
    if (this.state.inputMode) {
      this.inputRef.current.focus();
    }
  }

  _onChange = e => this.setState({ value: e.target.value });

  _turnOnInputMode = () => {
    if (this.props.allowEdit) {
      this.setState({ inputMode: true });
    }
  };

  _turnOffInputMode = () => this.setState({ inputMode: false });

  _handleBlur = () => {
    const { onEdit, rowIndex, cellIndex } = this.props;
    this._turnOffInputMode();
    if (this.state.value !== this.props.cell.value) {
      onEdit(rowIndex, cellIndex, this.state.value);
    }
  };

  render() {
    const { style, cell } = this.props;
    const { value, inputMode } = this.state;
    return (
      <div
        style={{ ...CellStyle, ...style, ...cell.cellStyle }}
        onClick={this._turnOnInputMode}
      >
        {!!inputMode ? (
          <textarea
            ref={this.inputRef}
            onChange={this._onChange}
            style={InputStyle}
            value={value}
            onBlur={this._handleBlur}
          />
        ) : (
          value
        )}
      </div>
    );
  }
}

Cell.propTypes = {
  cell: PropTypes.object,
  style: PropTypes.object,
  onEdit: PropTypes.func,
  allowEdit: PropTypes.bool,
  rowIndex: PropTypes.number,
  cellIndex: PropTypes.number
};

export default Cell;
