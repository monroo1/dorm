import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs/redesigned",
    component: Tabs,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
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

export const DirectionRow: Story = {
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

export const DirectionColumn: Story = {
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
        direction: "column",
        value: "tab 2",
    },
};
