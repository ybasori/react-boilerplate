import type { Meta, StoryObj } from "@storybook/react";
import NavbarMenu from "./NavbarMenu";
import { MemoryRouter } from "react-router-dom";
import { fn } from "@storybook/test";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NavbarMenu> = {
  title: "Molecules/NavbarMenu",
  component: (props) => (
    <MemoryRouter>
      <NavbarMenu {...props} />
    </MemoryRouter>
  ),
};

export default meta;
type Story = StoryObj<typeof NavbarMenu>;

export const Default: Story = {
  args: {
    menu: [
      {
        to: "/test",
        name: "Test",
      },
      {
        onClick: fn(),
        name: "Click Test",
      },
    ],
  },
};
