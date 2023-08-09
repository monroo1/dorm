import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticleSortSelector } from "./ArticleSortSelector";
import { ArticleSortField } from "../../model/consts/articleConsts";

const meta: Meta<typeof ArticleSortSelector> = {
	title: "entities/Article/ArticleSortSelector",
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
