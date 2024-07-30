import React from "react";
import GlobalStyles from "../../../utils/GlobalStyles";
import LoginForm from "./LoginForm";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
  argTypes: {
    themeName: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => (
  <>
    <GlobalStyles themeName={args.themeName} />
    <LoginForm {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  themeName: "light",
};
