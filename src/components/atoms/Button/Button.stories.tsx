import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: "button",
  },
};
export const BlueButton: Story = {
  args: {
    children: "button",
    color: "blue",
  },
};

export const RedButton: Story = {
  args: {
    children: "button",
    color: "red",
  },
};
