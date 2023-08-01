import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

const meta: Meta<typeof ArticleRecommendationsList> = {
	title: "features/ArticleRecommendationsList",
	component: ArticleRecommendationsList,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({}),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({}),
	],
};
