import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    tags: ["autodocs"],
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "button",
    },
};

export const Clear: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.OUTLINE,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: "button",
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const ClearDark: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OutlineDark: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
