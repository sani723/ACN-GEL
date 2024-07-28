import React from "react";
import Label from "./Label";
import designTokens from "../../../utils/designTokens";
import GlobalStyles from "../../../utils/GlobalStyles";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    tag: {
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "label"],
      control: { type: "select" },
    },
    textAlign: {
      options: ["left", "right", "center"],
      control: { type: "select" },
    },
    textTransform: {
      options: ["none", "uppercase", "lowercase", "capitalize"],
      control: { type: "select" },
    },
    fontSize: {
      options: Object.keys(designTokens.typography.fontSize),
      control: { type: "select" },
    },
    fontWeight: {
      options: Object.keys(designTokens.typography.fontWeight),
      control: { type: "select" },
    },
    lineHeight: {
      options: Object.keys(designTokens.typography.lineHeight),
      control: { type: "select" },
    },
    textDecoration: {
      options: ["none", "underline", "line-through"],
      control: { type: "select" },
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
    <Label {...args} />
  </>
);

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
  themeName: "light",
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
  themeName: "light",
};

export const LabelTag = Template.bind({});
LabelTag.args = {
  text: "Label Text",
  tag: "label",
  textAlign: "left",
  textTransform: "none",
  fontSize: "md",
  fontWeight: "regular",
  lineHeight: "normal",
  textDecoration: "none",
  htmlFor: "inputId",
  ariaLabel: "Label for inputId",
  ariaHidden: false,
  themeName: "light",
};
