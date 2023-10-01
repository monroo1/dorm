import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button/deprecated",
    component: Button,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineRed: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE_RED,
    },
};

export const Clear: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: "button",
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: "button",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SizeL: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
