import React from "react";
import styled from "@emotion/styled";

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
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export default Input;
