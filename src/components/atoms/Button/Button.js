/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { darken } from "polished";
import designTokens from "../../../utils/designTokens";
import { FaSpinner } from "react-icons/fa";

const Button = ({
  label,
  onClick,
  variant,
  themeName,
  size,
  icon: Icon,
  rounded,
  loading,
  disabled,
}) => {
  const theme = designTokens.theme[themeName];
  return (
    <ACNButton
      variant={variant}
      theme={theme}
      size={size}
      onClick={onClick}
      disabled={disabled || loading}
      hasLabel={!!label}
      loading={loading}
      rounded={rounded}
    >
      {loading && (
        <SpinnerWrapper>
          <FaSpinner />
        </SpinnerWrapper>
      )}
      {Icon && !loading && (
        <IconWrapper hasLabel={!!label}>
          <Icon />
        </IconWrapper>
      )}
      {!loading && label}
    </ACNButton>
  );
};

const baseStyle = css`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: "Nunito Sans", sans-serif;

  span {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
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
  iconOnly: css`
    padding: 0.5rem;
    width: 56px !important;
    width: 56px !important;
  `,
};

const variantStyles = {
  primary: (theme) => css`
    background-color: ${theme.primaryText};
    color: ${theme.background};

    &:hover:not(:disabled) {
      background-color: ${darken(0.1, theme.primaryText)};
    }
  `,
  secondary: (theme) => css`
    background-color: ${theme.background};
    color: ${theme.primaryText};
    border: 1px solid ${theme.borders};

    &:hover:not(:disabled) {
      background-color: ${theme.surface};
    }
  `,
  text: (theme) => css`
    background-color: transparent;
    color: ${theme.primaryText};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${theme.background};
    }
  `,
};

const IconWrapper = styled.span`
  margin-right: ${(props) => (props.hasLabel ? "0.5rem" : "0")};
  display: inline;
  align-items: center;
`;

const SpinnerWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  svg {
    animation: spin 1s linear infinite;
  }
`;

const ACNButton = styled.button`
  ${baseStyle}
  ${(props) =>
    props.icon && !props.hasLabel
      ? sizeStyles.iconOnly
      : sizeStyles[props.size]}
  ${(props) => variantStyles[props.variant](props.theme)}
  ${(props) =>
    props.rounded &&
    css`
      border-radius: 50%;
      width: 56px;
      height: 56px;
      padding: 0;

      span {
        display: flex;
      }
    `}
`;

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string.isRequired,
  themeName: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.string,
  icon: PropTypes.func,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
