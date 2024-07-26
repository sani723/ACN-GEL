import Card from "./Card";
import GlobalStyles from "../../utils/GlobalStyles";

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
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "medium", "fullBleed"],
      control: { type: "select" },
    },
    textAlign: {
      options: ["left", "right", "center"],
      control: { type: "select" },
    },
    showHeader: {
      control: "boolean",
    },
    showFooter: {
      control: "boolean",
    },
    styleType: {
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "outline",
      ],
      control: { type: "select" },
    },
    themeName: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => (
  <>
    <GlobalStyles themeName={args.themeName} />
    <Card {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  subtitle: "Card Subtitle",
  body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  links: <a href="#">Link</a>,
  button: "Button",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1024px-Dubai_Marina_Skyline.jpg",
  imagePosition: "top",
  backgroundImage: false,
  header: "Card Header",
  footer: "Card Footer",
  border: false,
  size: "default",
  textAlign: "left",
  styleType: "secondary",
  className: "",
  themeName: "light",
  showHeader: false,
  showFooter: false,
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
