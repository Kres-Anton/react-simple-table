import React from "react";
import PropTypes from "prop-types";

import { LoaderContainerStyle, LoaderIconStyle } from "../styles/styles";
import MyIcon from "../icons/LoaderIcon.svg";

const Loader = ({ loaderComponent }) => {
  if (loaderComponent) {
    return <loaderComponent />;
  }

  return (
    <div style={LoaderContainerStyle}>
      Data loading
      <MyIcon style={LoaderIconStyle} />
    </div>
  );
};

Loader.propTypes = {
  loaderComponent: PropTypes.func
};

export default Loader;
