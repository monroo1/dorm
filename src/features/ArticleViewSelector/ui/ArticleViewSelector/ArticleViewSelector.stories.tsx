import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleViewSelector } from "./ArticleViewSelector";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticleViewSelector> = {
	title: "features/ArticleViewSelector",
	component: ArticleViewSelector,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {

};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	decorators: [
		ThemeDecorator(Theme.ORANGE),
	],
};
