import type { Meta, StoryObj } from "@storybook/react";
import NavbarLink from "./NavbarLink";
import { MemoryRouter } from "react-router-dom";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NavbarLink> = {
  title: "Atoms/NavbarLink",
  component: (props) => (
    <MemoryRouter>
      <NavbarLink {...props} />
    </MemoryRouter>
  ),
};

export default meta;
type Story = StoryObj<typeof NavbarLink>;

export const DefaultButton: Story = {
  args: {
    name: "button",
    to: "/",
  },
};
