import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "shared/Input/deprecated",
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
