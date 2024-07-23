import Button from "./Button";
import { FaBookmark, FaInstagram, FaHeart } from "react-icons/fa";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      page: () => import("./Button.mdx"), // Reference the MDX file
    },
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
  // tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
    themeName: "greenTheme",
    size: "medium",
    loading: false,
    disabled: false,
    rounded: false,
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
    rounded: false,
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
    rounded: false,
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
    rounded: false,
  },
};

export const PrimaryDisabled = {
  args: {
    label: "Primary Button",
    variant: "primary",
    themeName: "greenTheme",
    size: "large",
    loading: false,
    disabled: true,
    rounded: false,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    onClick: () => alert("Button Clicked!"),
    themeName: "greenTheme",
    size: "large",
    loading: false,
    disabled: false,
    rounded: false,
  },
};

export const SecondaryIcon = {
  args: {
    variant: "secondary",
    themeName: "greenTheme",
    size: "large",
    icon: FaHeart,
    loading: false,
    disabled: false,
    rounded: false,
  },
};

export const SecondaryIconRounded = {
  args: {
    variant: "secondary",
    themeName: "greenTheme",
    size: "large",
    icon: FaHeart,
    loading: false,
    disabled: false,
    rounded: true,
  },
};

export const TextButton = {
  args: {
    label: "Text Button",
    variant: "text",
    themeName: "greenTheme",
    size: "large",
    loading: false,
    disabled: false,
    rounded: false,
  },
};
