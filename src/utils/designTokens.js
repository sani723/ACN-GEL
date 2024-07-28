const designTokens = {
  theme: {
    light: {
      primaryText: "#000000",
      secondaryText: "#555555",
      background: "#FFFFFF",
      surface: "#F5F5F5",
      borders: "#DDDDDD",
    },
    dark: {
      primaryText: "#FFFFFF",
      secondaryText: "#BBBBBB",
      background: "#121212",
      surface: "#1E1E1E",
      borders: "#333333",
    },
  },
  status: {
    success: "#28A745",
    warning: "#FFC107",
    error: "#DC3545",
    info: "#17A2B8",
  },
  functional: {
    "Grey 0": "#ffffff",
    "Grey 5": "#f2f2f2",
    "Grey 10": "#e5e5e5",
    "Grey 15": "#d9d9d9",
    "Grey 20": "#cccccc",
    "Grey 30": "#b3b3b3",
    "Grey 40": "#999999",
    "Grey 50": "#808080",
    "Grey 60": "#666666",
    "Grey 70": "#4c4c4c",
    "Grey 80": "#333333",
    "Grey 90": "#1a1a1a",
    "Grey 100": "#000000",
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      xxl: "32px",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      normal: 1.5,
      dense: 1.25,
      loose: 1.75,
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
  },
  borders: {
    radius: {
      sm: "4px",
      md: "8px",
      lg: "16px",
    },
    width: {
      sm: "1px",
      md: "2px",
      lg: "4px",
    },
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
    md: "0 2px 4px rgba(0, 0, 0, 0.1)",
    lg: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default designTokens;
