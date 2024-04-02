import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "../components/Spinner";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerDefault: Story = {
  args: {},
};
