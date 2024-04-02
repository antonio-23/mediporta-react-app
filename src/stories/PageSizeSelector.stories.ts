import type { Meta, StoryObj } from "@storybook/react";

import PageSizeSelector from "../components/PageSizeSelector";

const meta: Meta<typeof PageSizeSelector> = {
  title: "Components/PageSizeSelector",
  component: PageSizeSelector,
  argTypes: { onPageSizeChange: { action: "pageSizeChange" } },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageSizeSelector>;

export const Selector: Story = {
  args: {
    //  onPageSizeChange: (pageSize: number) => console.log(pageSize),
    label: "Page Size",
  },
};
