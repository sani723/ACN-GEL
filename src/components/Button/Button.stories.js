import Button from "./Button";
import { FaBookmark, FaInstagram, FaHeart } from "react-icons/fa";

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
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
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
    loading: false,
    disabled: false,
  },
};

export const PrimaryWithIcon = {
  args: {
    label: "Primary Button",
    variant: "primary",
    themeName: "greenTheme",
    size: "large",
    icon: FaBookmark,
    loading: false,
    disabled: false,
  },
};

export const PrimaryIcon = {
  args: {
    variant: "primary",
    themeName: "greenTheme",
    size: "large",
    icon: FaInstagram,
    loading: false,
    disabled: false,
  },
};

export const PrimaryLoading = {
  args: {
    label: "Primary Button",
    variant: "primary",
    themeName: "greenTheme",
    size: "large",
    icon: FaBookmark,
    loading: true,
    disabled: false,
  },
};

export const PrimaryDisabled = {
  args: {
    label: "Primary Button",
    variant: "primary",
    themeName: "greenTheme",
    size: "large",
    loading: false,
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    onClick: () => alert("Button Clicked!"),
    themeName: "yellowTheme",
    size: "medium",
    loading: false,
    disabled: false,
  },
};

export const SecondaryIcon = {
  args: {
    variant: "secondary",
    themeName: "yellowTheme",
    size: "large",
    icon: FaHeart,
    loading: false,
    disabled: false,
  },
};

export const Text = {
  args: {
    label: "Text Button",
    variant: "text",
    themeName: "blueTheme",
    size: "medium",
    loading: false,
    disabled: false,
  },
};
