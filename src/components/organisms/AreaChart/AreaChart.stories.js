import React from "react";
import CustomAreaChart from "./AreaChart";

export default {
  title: "Components/AreaChart",
  component: CustomAreaChart,
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

const Template = (args) => <CustomAreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "100%",
  height: 400,
  dataKey: "uv",
  stroke: "#8884d8",
  fill: "#8884d8",
};

export const CustomDimensions = Template.bind({});
CustomDimensions.args = {
  width: "50%",
  height: 300,
  dataKey: "pv",
  stroke: "#82ca9d",
  fill: "#82ca9d",
};
