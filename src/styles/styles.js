import metrics from "./metrics";
import fonts from "./fonts";
import colors from "./colors";

const base = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "tranparent",
  justifyContent: "center",
  alignItems: "center"
};

const baseWithPadding = {
  ...base,
  paddingTop: metrics.small,
  paddingBottom: metrics.small,
  paddingRight: metrics.base,
  paddingLeft: metrics.base
};

const baseButton = {
  padding: metrics.base,
  color: colors.titleFont,
  fontSize: fonts.t1,
  border: "none",
  outline: "none",
  cursor: "pointer"
};

export const TableStyle = {
  ...base,
  flexDirection: "column"
};

export const HeaderWrapperStyle = {
  ...base,
  alignSelf: "stretch",
  flexDirection: "column",
  minHeight: "min-content"
};

export const ContentWrapperStyle = {
  ...base,
  justifyContent: "unset",
  alignSelf: "stretch",
  flexDirection: "column",
  overflowY: "auto",
  overflowX: "hidden"
};

export const RowStyle = {
  ...base,
  alignSelf: "stretch",
  minHeight: "min-content",
  fontSize: fonts.t1
};

export const HeaderRowStyle = {
  ...RowStyle,
  fontSize: fonts.t2,
  backgroundColor: colors.headerBackground
};

export const FooterRowStyle = {
  ...HeaderRowStyle,
  padding: metrics.small,
  justifyContent: "flex-start"
};

export const CellStyle = {
  ...baseWithPadding,
  flex: 1,
  alignSelf: "stretch",
  minHeight: "100%",
  wordWrap: "break-word",
  wordBreak: "break-all"
};

export const TitleStyle = {
  ...baseWithPadding,
  alignSelf: "stretch",
  backgroundColor: colors.titleBackground,
  color: colors.titleFont,
  fontSize: fonts.t3
};

export const DeviderStyle = {
  width: "100%",
  borderTopWidth: "1px",
  borderTopColor: colors.devider,
  opacity: 0.3,
  margin: 0
};

export const AddButtonStyle = {
  ...baseButton,
  backgroundColor: colors.titleBackground
};

export const DeleteButtonStyle = {
  ...baseButton,
  backgroundColor: colors.devider,
  color: colors.headerFont
};

export const DeletCellStyle = {
  flex: 0.5
};

export const InputStyle = {
  flexDirection: "column",
  border: "none",
  outline: "none",
  resize: "none",
  wordWrap: "break-word",
  wordBreak: "break-all"
};

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
