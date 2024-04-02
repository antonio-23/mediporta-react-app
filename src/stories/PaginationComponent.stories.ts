import type { Meta, StoryObj } from "@storybook/react";

import PaginationComponent from "../components/PaginationComponent";

const meta: Meta<typeof PaginationComponent> = {
  title: "Components/PaginationComponent",
  component: PaginationComponent,
  tags: ["autodocs"],
  argTypes: { onPageChange: { action: "page changed" } },
};

export default meta;
type Story = StoryObj<typeof PaginationComponent>;

export const PaginationDefault: Story = {
  args: {
    pageCount: 6,
    pageIndex: 0,
    // onPageChange: (page: number) => console.log(page),
  },
};
