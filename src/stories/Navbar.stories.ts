import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "../components/Navbar";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarDefault: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
