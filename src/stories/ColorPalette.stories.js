import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import colors from "../utils/colors"; // Ensure the path to colors.js is correct

export default {
  title: "Design System/Color Palette",
};

const ColorBox = ({ color, name }) => (
  <Tbody>
    <Tr>
      <Td>
        <Item color={color}></Item>
      </Td>
      <Td>{name.replace("status.", "")}</Td>
      <Td>{color.toLowerCase()}</Td>
    </Tr>
  </Tbody>
);

const ThemePalette = ({ theme, themeName }) => (
  <Container>
    <h2>
      {themeName.toLowerCase() === "light" || themeName.toLowerCase() === "dark"
        ? `${themeName} Theme`
        : `${themeName}`}
    </h2>
    <Table>
      <Thead>
        <Tr>
          <Th>Color</Th>
          <Th>Name</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      {Object.keys(theme).map((key) => {
        const color = theme[key];
        if (typeof color === "object") {
          return Object.keys(color).map((subKey) => (
            <ColorBox
              key={`${key}.${subKey}`}
              color={color[subKey]}
              name={`${key}.${subKey}`}
            />
          ));
        }
        return <ColorBox key={key} color={theme[key]} name={key} />;
      })}
    </Table>
  </Container>
);

export const Palette = () => (
  <div>
    <ThemePalette theme={colors.theme.light} themeName="Light" />
    <ThemePalette theme={colors.theme.dark} themeName="Dark" />
    <ThemePalette theme={colors.status} themeName="Status" />
    <ThemePalette theme={colors.functional} themeName="Functional Grey Tones" />
  </div>
);

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #f5f5f5;
`;

const Tbody = styled.tbody`
  background-color: #ffffff;
`;

const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const Th = styled.th`
  padding: 12px;
  border: 1px solid #dddddd;
  text-align: left;
  background-color: #333333;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #dddddd;
  text-align: left;
`;

const Container = styled.div`
  margin-bottom: 20px;
`;

const Item = styled.div`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 20px;
  border: 1px solid #dddddd;
`;
