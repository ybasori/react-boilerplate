import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import NavbarButton from "./NavbarButton";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NavbarButton> = {
  title: "Atoms/NavbarButton",
  component: NavbarButton,
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof NavbarButton>;

export const DefaultButton: Story = {
  args: {
    name: "button",
  },
};
