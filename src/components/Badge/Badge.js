/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import designTokens from "../../utils/designTokens";

const Badge = ({
  label,
  type = "standard",
  variant = "informative",
  ariaLabel,
  role,
  className,
  themeName,
}) => {
  const theme = designTokens.theme[themeName];
  const statusColors = designTokens.status;

  return (
    <BadgeContainer
      type={type}
      variant={variant}
      aria-label={ariaLabel}
      role={role}
      className={className}
      theme={theme}
      statusColors={statusColors}
    >
      {label}
    </BadgeContainer>
  );
};

const getVariants = (variant, statusColors, theme) => {
  switch (variant) {
    case "success":
      return css`
        background-color: ${statusColors.success};
        color: white;
      `;
    case "warning":
      return css`
        background-color: ${statusColors.warning};
        color: white;
      `;
    case "error":
      return css`
        background-color: ${statusColors.error};
        color: white;
      `;
    case "info":
      return css`
        background-color: ${statusColors.info};
        color: white;
      `;
    case "outline":
      return css`
        background-color: ${theme.background};
        border: 1px solid ${theme.primaryText};
        color: ${theme.primaryText};
      `;
    default:
      return css`
        background-color: #9f9f9f;
        color: white;
      `;
  }
};

const types = {
  circle: css`
    border-radius: 50%;
    padding: 0.5em;
    width: 1.2em;
    height: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  pill: css`
    border-radius: 9999px;
    padding: 0.2em 0.5em;
  `,
  standard: css`
    border-radius: 4px;
    padding: 0.2em 0.5em;
  `,
};

const BadgeContainer = styled.div`
  display: inline-block;
  font-size: 0.7em;
  font-family: "Nunito Sans", sans-serif;
  ${(props) => getVariants(props.variant, props.statusColors, props.theme)}
  ${(props) => types[props.type]}
`;

export default Badge;

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.string,
  themeName: PropTypes.oneOf(["light", "dark"]),
};
