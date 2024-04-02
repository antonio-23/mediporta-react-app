import type { Meta, StoryObj } from "@storybook/react";

import TagsTable from "../components/TagsTable";

const meta: Meta<typeof TagsTable> = {
  title: "Components/TagsTable",
  component: TagsTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagsTable>;

export const TableDefault: Story = {
  args: {},
};
