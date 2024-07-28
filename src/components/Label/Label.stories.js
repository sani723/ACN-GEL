import React from "react";
import Label from "./Label";
import designTokens from "../../utils/designTokens";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    tag: {
      control: {
        type: "select",
        options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
    textAlign: {
      control: {
        type: "select",
        options: ["left", "right", "center"],
      },
    },
    textTransform: {
      control: {
        type: "select",
        options: ["none", "uppercase", "lowercase", "capitalize"],
      },
    },
    fontSize: {
      control: {
        type: "select",
        options: Object.keys(designTokens.typography.fontSize),
      },
    },
    fontWeight: {
      control: {
        type: "select",
        options: Object.keys(designTokens.typography.fontWeight),
      },
    },
    lineHeight: {
      control: {
        type: "select",
        options: Object.keys(designTokens.typography.lineHeight),
      },
    },
    textDecoration: {
      control: {
        type: "select",
        options: ["none", "underline", "line-through"],
      },
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Sample Text",
  tag: "p",
  textAlign: "left",
  textTransform: "none",
  fontSize: "md",
  fontWeight: "regular",
  lineHeight: "normal",
  textDecoration: "none",
};

export const Heading = Template.bind({});
Heading.args = {
  text: "Heading Text",
  tag: "h1",
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "xl",
  fontWeight: "bold",
  lineHeight: "loose",
  textDecoration: "underline",
};
