/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../../../Button/Button";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Dropdown> = {
    title: "shared/Dropdown/redesigned",
    component: Dropdown,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: "first",
            },
            {
                content: "second",
            },
            {
                content: "third",
            },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: "bottom left",
        trigger: <Button>Open</Button>,
        items: [
            {
                content: "first",
            },
            {
                content: "second",
            },
            {
                content: "third",
            },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: "bottom right",
        trigger: <Button>Open</Button>,
        items: [
            {
                content: "first",
            },
            {
                content: "second",
            },
            {
                content: "third",
            },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: "top left",
        trigger: <Button>Open</Button>,
        items: [
            {
                content: "first",
            },
            {
                content: "second",
            },
            {
                content: "third",
            },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: "top right",
        trigger: <Button>Open</Button>,
        items: [
            {
                content: "first",
            },
            {
                content: "second",
            },
            {
                content: "third",
            },
        ],
    },
};

export const DisabledItem: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: "first",
                disabled: true,
            },
            {
                content: "second",
            },
            {
                content: "third",
            },
        ],
    },
};
