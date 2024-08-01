import React from "react";
import ACNAreaChart from "./AreaChart";
import GlobalStyles from "../../../utils/GlobalStyles";
import { data1, data2 } from "../../../utils/data/area-chart";

export default {
  title: "Components/AreaChart",
  component: ACNAreaChart,
  argTypes: {
    width: {
      control: "text",
    },
    height: {
      control: "number",
    },
    dataKey: {
      control: "text",
    },
    stroke: {
      control: "color",
    },
    fill: {
      control: "color",
    },
    showGrid: {
      control: "boolean",
    },
    showTootlTip: {
      control: "boolean",
    },
    showLegend: {
      control: "boolean",
    },
    themeName: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => (
  <>
    <GlobalStyles themeName={args.themeName} />
    <ACNAreaChart {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  width: "100%",
  height: 400,
  dataKey: "uv",
  stroke: "#8884d8",
  fill: "#8884d8",
  data: data1,
  showGrid: true,
  showTootlTip: false,
  showLegend: false,
  themeName: "light",
  multipleSvg: false,
};

export const CustomDimensions = Template.bind({});
CustomDimensions.args = {
  width: "50%",
  height: 300,
  dataKey: "pv",
  stroke: "#82ca9d",
  fill: "#82ca9d",
  data: data1,
  showGrid: true,
  showTootlTip: false,
  showLegend: false,
  themeName: "light",
  multipleSvg: false,
};

export const MultipleSVGs = Template.bind({});
MultipleSVGs.args = {
  width: "50%",
  height: 300,
  dataKey: "pv",
  stroke: "#82ca9d",
  fill: "#82ca9d",
  data: data2,
  showGrid: true,
  showTootlTip: false,
  showLegend: false,
  themeName: "light",
  multipleSvg: true,
};
