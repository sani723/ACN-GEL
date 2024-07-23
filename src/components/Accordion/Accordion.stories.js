import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      page: () => import("./Accordion.mdx"), // Reference the MDX file
    },
  },
  argTypes: {
    defaultOpenIndex: {
      control: { type: "number", min: 0 },
    },
    multiOpen: {
      control: { type: "boolean" },
    },
    theme: {
      options: ["yellowTheme", "greenTheme", "blueTheme"],
      control: { type: "select" },
    },
  },
};

const items = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    title: "Section 2",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    title: "Section 3",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

export const Default = {
  args: {
    items,
    theme: "greenTheme",
  },
};

export const WithDefaultOpen = {
  args: {
    items,
    defaultOpenIndex: 0,
    theme: "greenTheme",
  },
};

export const MultiOpen = {
  args: {
    items,
    multiOpen: true,
    theme: "greenTheme",
  },
};
