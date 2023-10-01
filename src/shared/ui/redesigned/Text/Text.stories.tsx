import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Text> = {
    title: "shared/Text/redesigned",
    component: Text,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: "Title lorem ipsum new",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Title lorem ipsum new",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const VariantPrimary: Story = {
    args: {
        title: "Title lorem ipsum new",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        variant: "primary",
    },
};

export const VariantAccent: Story = {
    args: {
        title: "Title lorem ipsum new",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        variant: "accent",
    },
};

export const VariantError: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        variant: "error",
    },
};

export const AlignLeft: Story = {
    args: {
        align: "left",
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};
export const AlignCenter: Story = {
    args: {
        align: "center",
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const AlignRight: Story = {
    args: {
        align: "right",
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const SizeS: Story = {
    args: {
        size: "s",
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const SizeM: Story = {
    args: {
        size: "m",
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const SizeL: Story = {
    args: {
        size: "l",
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};
