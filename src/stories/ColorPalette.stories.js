import React from "react";
import { yellowTheme, greenTheme, blueTheme } from "../utils/themes";

export default {
  title: "Design System/Color Palette",
};

const ColorBox = ({ color, name }) => (
  <div style={{ margin: "10px", textAlign: "center" }}>
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        borderRadius: "4px",
      }}
    ></div>
    <p>{name}</p>
    <p>{color}</p>
  </div>
);

const ThemePalette = ({ theme, themeName }) => (
  <div style={{ marginBottom: "20px" }}>
    <h2>{themeName} Theme</h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Object.keys(theme).map((key) => (
        <ColorBox key={key} color={theme[key]} name={key} />
      ))}
    </div>
  </div>
);

export const Palette = () => (
  <div>
    <ThemePalette theme={yellowTheme} themeName="Yellow" />
    <ThemePalette theme={greenTheme} themeName="Green" />
    <ThemePalette theme={blueTheme} themeName="Blue" />
  </div>
);
