import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { Text } from "../Text";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink/redesigned",
    component: AppLink,
    tags: ["autodocs"],
    args: {
        to: "/",
    },
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: <Text text="Link" />,
        variant: "primary",
    },
};

export const Red: Story = {
    args: {
        children: <Text text="Link" />,
        variant: "red",
    },
};
