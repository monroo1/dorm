import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleTypeTabs } from "./ArticleTypeTabs";
import { Theme } from "@/shared/const/theme";
import { ArticleType } from "@/entities/Article";

const meta: Meta<typeof ArticleTypeTabs> = {
    title: "features/ArticleTypeTabs",
    component: ArticleTypeTabs,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const NormalActive: Story = {
    args: {
        value: ArticleType.ALL,
    },
};

export const DarkActive: Story = {
    args: {
        value: ArticleType.ALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeActive: Story = {
    args: {
        value: ArticleType.ALL,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
