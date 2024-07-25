import React from "react";
import Avatar from "./Avatar";
import GlobalStyles from "../../utils/GlobalStyles";
import { FaUserCircle } from "react-icons/fa";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      page: () => import("./Avatar.mdx"),
    },
  },
  argTypes: {
    themeName: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    icon: {
      control: { type: "select", options: [FaUserCircle] },
    },
  },
};

// const Template = (args) => <Avatar {...args} />;

const Template = (args) => (
  <>
    <GlobalStyles themeName={args.themeName} />
    <Avatar {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: "A",
  size: "medium",
  src: "",
  icon: FaUserCircle,
  alt: "User Avatar",
  ariaLabel: "User Avatar",
  role: "img",
  className: "",
  themeName: "light",
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  src: "https://dailytimes.com.pk/assets/uploads/2019/01/05/Untitled-1-5.jpg",
};

export const WithText = Template.bind({});
WithText.args = {
  ...Default.args,
  label: "John Doe",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  src: "",
  label: "",
  icon: FaUserCircle,
};
