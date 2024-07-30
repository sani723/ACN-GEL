import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import designTokens from "../../../utils/designTokens";

const Label = ({
  text,
  tag = "p",
  textAlign = "left",
  textTransform = "none",
  fontSize = "md",
  fontWeight = "regular",
  lineHeight = "normal",
  textDecoration = "none",
  htmlFor,
  ariaLabel,
  ariaHidden,
}) => {
  const Tag = tag;
  return (
    <ACNLabel
      as={Tag}
      textAlign={textAlign}
      textTransform={textTransform}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textDecoration={textDecoration}
      htmlFor={htmlFor}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      {text}
    </ACNLabel>
  );
};

const ACNLabel = styled.div`
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
  font-size: ${(props) => designTokens.typography.fontSize[props.fontSize]};
  font-weight: ${(props) =>
    designTokens.typography.fontWeight[props.fontWeight]};
  line-height: ${(props) =>
    designTokens.typography.lineHeight[props.lineHeight]};
  text-decoration: ${(props) => props.textDecoration};
`;

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6", "label"]),
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  textTransform: PropTypes.oneOf([
    "none",
    "uppercase",
    "lowercase",
    "capitalize",
  ]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
  textDecoration: PropTypes.oneOf(["none", "underline", "line-through"]),
  htmlFor: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaHidden: PropTypes.string,
};
