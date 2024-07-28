// .storybook/GlobalStyles.js
import { Global, css } from "@emotion/react";
import designTokens from "./designTokens";

const GlobalStyles = ({ themeName }) => {
  const theme = designTokens.theme[themeName];

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap");

        body {
          background-color: ${theme.background};
          color: ${theme.primaryText};
          margin: 0;
          padding: 0;
          font-family: "Nunito Sans", sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
