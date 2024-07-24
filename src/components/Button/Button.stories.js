import Button from "./Button";
import { FaBookmark, FaInstagram, FaHeart } from "react-icons/fa";
import GlobalStyles from "../../utils/GlobalStyles";

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
      options: ["light", "dark"],
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

const Template = (args) => (
  <>
    <GlobalStyles themeName={args.themeName} />
    <Button {...args}>Button</Button>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
  themeName: "light",
  size: "medium",
  loading: false,
  disabled: false,
  rounded: false,
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  label: "Primary Button",
  variant: "primary",
  themeName: "light",
  size: "large",
  icon: FaBookmark,
  loading: false,
  disabled: false,
  rounded: false,
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  variant: "primary",
  themeName: "light",
  size: "large",
  icon: FaInstagram,
  loading: false,
  disabled: false,
  rounded: false,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  label: "Primary Button",
  variant: "primary",
  themeName: "light",
  size: "large",
  icon: FaBookmark,
  loading: true,
  disabled: false,
  rounded: false,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  label: "Primary Button",
  variant: "primary",
  themeName: "light",
  size: "large",
  loading: false,
  disabled: true,
  rounded: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  onClick: () => alert("Button Clicked!"),
  themeName: "light",
  size: "large",
  loading: false,
  disabled: false,
  rounded: false,
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  variant: "secondary",
  themeName: "light",
  size: "large",
  icon: FaHeart,
  loading: false,
  disabled: false,
  rounded: false,
};

export const SecondaryIconRounded = Template.bind({});
SecondaryIconRounded.args = {
  variant: "secondary",
  themeName: "light",
  size: "large",
  icon: FaHeart,
  loading: false,
  disabled: false,
  rounded: true,
};

export const TextButton = Template.bind({});
TextButton.args = {
  label: "Text Button",
  variant: "text",
  themeName: "light",
  size: "large",
  loading: false,
  disabled: false,
  rounded: false,
};
