import { fn } from "@storybook/test";
import ButtonJS from "./ButtonJS";

//👇 This default export determines where your story goes in the story list
const meta = {
  title: "Atoms/ButtonJS",
  component: ButtonJS,
  args: { onClick: fn() },
  argTypes: {
    color: {
      options: ["red", "blue"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

export const DefaultButton = {
  args: {
    children: "button",
  },
};
export const BlueButton = {
  args: {
    children: "button",
    color: "blue",
  },
};

export const RedButton = {
  args: {
    children: "button",
    color: "red",
  },
};
