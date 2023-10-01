import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Input> = {
    title: "shared/Input/redesigned",
    component: Input,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: "Type text",
        value: "1234",
    },
};

export const SizeS: Story = {
    args: {
        size: "s",
        placeholder: "Type text",
        value: "1234",
    },
};

export const SizeM: Story = {
    args: {
        size: "m",
        placeholder: "Type text",
        value: "1234",
    },
};

export const SizeL: Story = {
    args: {
        size: "l",
        placeholder: "Type text",
        value: "1234",
    },
};
