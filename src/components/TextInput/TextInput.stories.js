import React from "react";
import TextInput from "./TextInput";
import GlobalStyles from "../../utils/GlobalStyles";

export default {
  title: "Components/Input",
  component: TextInput,
  argTypes: {
    type: {
      options: [
        "text",
        "password",
        "number",
        "file",
        "email",
        "date",
        "hidden",
        "search",
        "tel",
        "time",
        "url",
        "week",
        "range",
      ],
      control: { type: "select" },
    },
    placeholder: {
      control: "text",
    },
    id: {
      control: "text",
    },
    name: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    min: {
      control: "number",
      if: { arg: "type", eq: "number" },
    },
    max: {
      control: "number",
      if: { arg: "type", eq: "number" },
    },
    step: {
      control: "number",
      if: { arg: "type", eq: "number" },
    },
    value: {
      control: "text",
      if: { arg: "type", eq: "number" },
    },
    pattern: {
      control: "text",
      if: { arg: "type", eq: "tel" },
    },
    ariaLabel: {
      control: "text",
    },
    ariaDescribedBy: {
      control: "text",
    },
    ariaInvalid: {
      control: "boolean",
    },
    ariaRequired: {
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
    <TextInput {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text",
  id: "default-input",
  name: "defaultInput",
  required: true,
  min: undefined,
  max: undefined,
  step: undefined,
  value: "",
  pattern: "",
  ariaLabel: "Default input",
  ariaDescribedBy: "",
  ariaInvalid: false,
  ariaRequired: false,
  themeName: "light",
};

export const PassInput = Template.bind({});
PassInput.args = {
  type: "password",
  placeholder: "Enter password",
  id: "password-input",
  name: "passwordInput",
  required: false,
  min: undefined,
  max: undefined,
  step: undefined,
  value: "",
  pattern: "",
  ariaLabel: "Password input",
  ariaDescribedBy: "",
  ariaInvalid: false,
  ariaRequired: false,
  themeName: "light",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  placeholder: "Enter a number",
  id: "number-input",
  name: "numberInput",
  required: false,
  min: 0,
  max: 100,
  step: 1,
  value: "2",
  ariaLabel: "Number input",
  ariaDescribedBy: "",
  ariaInvalid: false,
  ariaRequired: false,
  themeName: "light",
};

export const FileInput = Template.bind({});
FileInput.args = {
  type: "file",
  placeholder: "Select a file",
  id: "file-input",
  name: "fileInput",
  required: false,
  ariaLabel: "File input",
  ariaDescribedBy: "",
  ariaInvalid: false,
  ariaRequired: false,
  themeName: "light",
};

export const RangeInput = Template.bind({});
RangeInput.args = {
  type: "range",
  placeholder: "",
  id: "range-input",
  name: "rangeInput",
  required: false,
  min: 0,
  max: 100,
  ariaLabel: "Range input",
  ariaDescribedBy: "",
  ariaInvalid: false,
  ariaRequired: false,
  themeName: "light",
};
