import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleSortSelector } from "./ArticleSortSelector";
import { Theme } from "@/shared/const/theme";
import { ArticleSortField } from "@/entities/Article";

const meta: Meta<typeof ArticleSortSelector> = {
	title: "features/ArticleSortSelector",
	component: ArticleSortSelector,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
	args: {
		sort: ArticleSortField.CREATED,
		order: "asc",
	},
};

export const Dark: Story = {
	args: {
		sort: ArticleSortField.CREATED,
		order: "asc",
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
