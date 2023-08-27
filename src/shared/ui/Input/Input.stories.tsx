import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Input } from "./Input";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Input> = {
    title: "shared/Input",
    component: Input,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: "Type text",
        value: "1234",
    },
};

export const Dark: Story = {
    args: {
        placeholder: "Type text",
        value: "1234",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
