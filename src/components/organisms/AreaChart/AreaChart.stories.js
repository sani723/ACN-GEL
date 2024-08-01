import React from "react";
import ACNAreaChart from "./AreaChart";
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
  },
};

const Template = (args) => <ACNAreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "100%",
  height: 400,
  dataKey: "uv",
  stroke: "#8884d8",
  fill: "#8884d8",
  data: data1,
};

export const CustomDimensions = Template.bind({});
CustomDimensions.args = {
  width: "50%",
  height: 300,
  dataKey: "pv",
  stroke: "#82ca9d",
  fill: "#82ca9d",
  data: data1,
};
