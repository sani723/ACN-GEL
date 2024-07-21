/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { darken } from "polished";
import colors from "../../utils/colors";

const Button = ({
  label,
  onClick,
  variant,
  themeName,
  size,
  icon: Icon,
  ...props
}) => {
  const theme = colors[themeName];
  return (
    <ACNButton
      variant={variant}
      theme={theme}
      size={size}
      onClick={onClick}
      hasLabel={!!label}
    >
      {Icon && (
        <IconWrapper hasLabel={!!label}>
          <Icon />
        </IconWrapper>
      )}
      {label}
    </ACNButton>
  );
};

const baseStyle = css`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  min-height: 56px;
`;

const sizeStyles = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  `,
  fullWidth: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    width: 100%;
  `,
};

const variantStyles = {
  primary: (theme) => css`
    background-color: ${theme.primary};
    color: white;

    &:hover {
      background-color: ${darken(0.1, theme.primary)};
    }
  `,
  secondary: (theme) => css`
    background-color: white;
    color: ${theme.primary};
    border: 1px solid ${theme.primary};

    &:hover {
      background-color: ${theme.background};
    }
  `,
  text: (theme) => css`
    background-color: transparent;
    color: ${theme.primary};
    border: none;

    &:hover {
      background-color: ${theme.background};
    }
  `,
};

const IconWrapper = styled.span`
  margin-right: ${(props) => (props.hasLabel ? "0.5rem" : "0")};
  display: inline;
  align-items: center;
`;

const ACNButton = styled.button`
  ${baseStyle}
  ${(props) => sizeStyles[props.size]}
  ${(props) => variantStyles[props.variant](props.theme)}
`;

export default Button;
