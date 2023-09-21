import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextSize, TextTheme } from "./Text";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Title lorem ipsum",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: "Title lorem ipsum",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Inverted: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        theme: TextTheme.INVERTED,
    },
};

export const InvertedTitle: Story = {
    args: {
        title: "Title lorem ipsum",
        theme: TextTheme.INVERTED,
    },
};

export const InvertedText: Story = {
    args: {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        theme: TextTheme.INVERTED,
    },
};

export const Error: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        size: TextSize.S,
    },
};
