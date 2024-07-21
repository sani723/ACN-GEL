import Button from "./Button";
import { FaBookmark } from "react-icons/fa";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    themeName: {
      options: ["yellowTheme", "greenTheme", "blueTheme"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large", "fullWidth"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
    themeName: "greenTheme",
    size: "medium",
  },
};

export const PrimaryWithIcon = {
  args: {
    label: "Primary Button",
    variant: "primary",
    themeName: "yellowTheme",
    size: "large",
    icon: FaBookmark,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    onClick: () => alert("Button Clicked!"),
    themeName: "blueTheme",
    size: "medium",
  },
};

export const Text = {
  args: {
    label: "Text Button",
    variant: "text",
    themeName: "blueTheme",
    size: "medium",
  },
};
