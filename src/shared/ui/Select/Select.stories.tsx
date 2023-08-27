import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    title: "shared/Select",
    component: Select,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "first", content: "first" },
            { value: "second", content: "second" },
            { value: "third", content: "third" },
        ],
    },
};
