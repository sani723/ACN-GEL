// .storybook/GlobalStyles.js
import { Global, css } from "@emotion/react";
import colors from "./colors";

const GlobalStyles = ({ themeName }) => {
  const theme = colors.theme[themeName];

  return (
    <Global
      styles={css`
        body {
          background-color: ${theme.background};
          color: ${theme.primaryText};
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
