import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      page: () => import("./Card.mdx"), // Reference the MDX file if you want to use MDX documentation
    },
  },
  argTypes: {
    imagePosition: {
      control: { type: "select", options: ["top", "bottom", "left", "right"] },
    },
    size: {
      control: { type: "select", options: ["default", "medium", "fullBleed"] },
    },
    textAlign: {
      control: { type: "select", options: ["left", "right", "center"] },
    },
    styleType: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "outline",
        ],
      },
    },
    themeMode: {
      control: { type: "select", options: ["light", "dark"] },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  subtitle: "Card Subtitle",
  body: "This is the body of the card.",
  links: <a href="#">Link</a>,
  button: "Button",
  image: "https://via.placeholder.com/150",
  imagePosition: "top",
  backgroundImage: false,
  header: "Card Header",
  footer: "Card Footer",
  border: true,
  size: "default",
  textAlign: "left",
  styleType: "primary",
  className: "",
  themeMode: "light",
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  ...Default.args,
  image: "",
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  ...Default.args,
  backgroundImage: true,
};

export const WithHeaderFooter = Template.bind({});
WithHeaderFooter.args = {
  ...Default.args,
  header: "Header",
  footer: "Footer",
};

export const WithDifferentImagePosition = Template.bind({});
WithDifferentImagePosition.args = {
  ...Default.args,
  imagePosition: "left",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  ...Default.args,
  size: "medium",
};

export const FullBleedSize = Template.bind({});
FullBleedSize.args = {
  ...Default.args,
  size: "fullBleed",
};
