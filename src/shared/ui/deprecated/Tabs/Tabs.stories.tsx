import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs/deprecated",
    component: Tabs,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: "tab 1",
                content: "First",
            },
            {
                value: "tab 2",
                content: "Second",
            },
            {
                value: "tab 3",
                content: "Third",
            },
        ],
    },
};

export const WithValue: Story = {
    args: {
        tabs: [
            {
                value: "tab 1",
                content: "First",
            },
            {
                value: "tab 2",
                content: "Second",
            },
            {
                value: "tab 3",
                content: "Third",
            },
        ],
        value: "tab 2",
    },
};
