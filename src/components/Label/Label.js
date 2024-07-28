import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import designTokens from "../../utils/designTokens";

const Label = ({
  text,
  tag = "p",
  textAlign = "left",
  textTransform = "none",
  fontSize = "md",
  fontWeight = "regular",
  lineHeight = "normal",
  textDecoration = "none",
}) => {
  const Tag = tag;
  return (
    <StyledLabel
      as={Tag}
      textAlign={textAlign}
      textTransform={textTransform}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textDecoration={textDecoration}
    >
      {text}
    </StyledLabel>
  );
};

const StyledLabel = styled.div`
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
