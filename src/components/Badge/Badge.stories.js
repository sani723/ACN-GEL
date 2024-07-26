import React from "react";
import Badge from "./Badge";
import GlobalStyles from "../../utils/GlobalStyles";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      page: () => import("./Badge.mdx"), // Reference the MDX file if you want to use MDX documentation
    },
  },
  argTypes: {
    themeName: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    type: {
      options: ["circle", "pill", "standard"],
      control: { type: "select" },
    },
    variant: {
      options: ["default", "success", "error", "info", "warning", "outline"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => (
  <>
    <GlobalStyles themeName={args.themeName} />
    <Badge {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Badge",
  type: "standard",
  variant: "default",
  ariaLabel: "badge",
  role: "status",
  className: "",
  themeName: "light",
};

export const CircleBadge = Template.bind({});
CircleBadge.args = {
  ...Default.args,
  label: "22",
  type: "circle",
  themeName: "light",
};

export const PillBadge = Template.bind({});
PillBadge.args = {
  ...Default.args,
  label: "Pill Badge",
  type: "pill",
  themeName: "light",
};

export const ErrorBadge = Template.bind({});
ErrorBadge.args = {
  ...Default.args,
  label: "Error",
  variant: "error",
  themeName: "light",
};

export const SuccessBadge = Template.bind({});
SuccessBadge.args = {
  ...Default.args,
  label: "Success",
  variant: "success",
  themeName: "light",
};

export const WarningBadge = Template.bind({});
WarningBadge.args = {
  ...Default.args,
  label: "Warning",
  variant: "warning",
  themeName: "light",
};

export const InformativeBadge = Template.bind({});
InformativeBadge.args = {
  ...Default.args,
  label: "Information",
  variant: "info",
  themeName: "light",
};

export const OutlineBadge = Template.bind({});
OutlineBadge.args = {
  ...Default.args,
  label: "Message",
  variant: "outline",
  themeName: "light",
};
