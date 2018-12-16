import styled from "styled-components";

import metrics from "./metrics";
import fonts from "./fonts";
import colors from "./colors";

export const base = styled.div`
  display: flex;
  background-color: tranparent;
  justify-content: center;
  align-items: center;
`;

export const baseWithPadding = styled(base)`
  padding: ${metrics.small} ${metrics.base};
`;

export const StyledBaseButton = styled.button`
  padding: ${metrics.base};
  color: ${colors.titleFont};
  font-size: ${fonts.t1};
  border: none;
  outline: none;
  cursor: pointer;
`;

export const StyledCell = styled(baseWithPadding)`
  flex: 1;
  align-self: stretch;
  min-height: 100%;
  word-wrap: break-word;
  word-break: break-all;
`;

export const StyledDeletCell = styled(StyledCell)`
  flex: 0.5;
`;

export const DeleteButtonStyle = styled(StyledBaseButton)`
  background-color: ${colors.devider};
  color: ${colors.headerFont};
`;

export const StyledTitle = styled(baseWithPadding)`
  align-self: stretch;
  background-color: ${colors.titleBackground};
  color: ${colors.titleFont};
  font-size: ${fonts.t3};
`;

export const StyledTable = styled(base)`
  flex-direction: column;
`;

export const StyledHeaderWrapper = styled(base)`
  align-self: stretch;
  flex-direction: column;
  min-height: min-content;
`;

export const StyledContentWrapper = styled(base)`
  justify-content: unset;
  align-self: stretch;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledRow = styled(base)`
  align-self: stretch;
  min-height: min-content;
  font-size: ${fonts.t1};
`;

export const StyledHeaderRow = styled(StyledRow)`
  font-size: ${fonts.t2};
  background-color: ${colors.headerBackground};
`;

export const StyledFooterRow = styled(StyledHeaderRow)`
  padding: ${metrics.small};
  justify-content: flex-start;
`;

export const StyledDevider = styled.hr`
  width: 100%;
  bordertopwidth: 1px;
  bordertopcolor: ${colors.devider};
  opacity: 0.3;
  margin: 0;
`;

export const LoaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  color: colors.headerFont,
  fontSize: fonts.t3
};

export const LoaderIconStyle = {
  height: "2em",
  paddingLeft: "1em"
};
