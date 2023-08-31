import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticlePageGreeting } from "./ArticlePageGreeting";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticlePageGreeting> = {
    title: "features/ArticlePageGreeting",
    component: ArticlePageGreeting,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
