import Accordion from "./Accordion";
import GlobalStyles from "../../utils/GlobalStyles";

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
    themeName: {
      options: ["light", "dark"],
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

const Template = (args) => (
  <>
    <GlobalStyles themeName={args.themeName} />
    <Accordion {...args}></Accordion>
  </>
);

export const Default = Template.bind({});
Default.args = {
  items,
  themeName: "light",
};

export const WithDefaultOpen = Template.bind({});
WithDefaultOpen.args = {
  items,
  defaultOpenIndex: 0,
  themeName: "light",
};

export const MultiOpen = Template.bind({});
MultiOpen.args = {
  items,
  multiOpen: true,
  themeName: "light",
};
