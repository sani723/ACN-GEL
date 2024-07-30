import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import designTokens from "../../../utils/designTokens";

const Input = ({
  type = "text",
  placeholder = "",
  id,
  name,
  required = false,
  min,
  max,
  step,
  value,
  pattern,
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  ariaRequired,
  themeName,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      required={required}
      min={min}
      max={max}
      step={step}
      value={value}
      pattern={pattern}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-invalid={ariaInvalid}
      aria-required={ariaRequired}
      themeName={themeName}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: ${designTokens.spacing.sm};
  margin: ${designTokens.spacing.sm} 0;
  box-sizing: border-box;
  border: ${(props) =>
    `${designTokens.borders.width.sm} solid ${designTokens.theme[props.themeName].borders}`};
  border-radius: ${designTokens.borders.radius.sm};
  font-size: ${designTokens.typography.fontSize.md};
`;

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  pattern: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaInvalid: PropTypes.string,
  ariaRequired: PropTypes.string,
  themeName: PropTypes.oneOf(["light", "dark"]),
};
