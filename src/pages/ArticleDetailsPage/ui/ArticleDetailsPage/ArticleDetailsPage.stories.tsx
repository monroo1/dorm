import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ArticleDetailsPage from "./ArticleDetailsPage";

const meta: Meta<typeof ArticleDetailsPage> = {
	title: "pages/ArticleDetailsPage",
	component: ArticleDetailsPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

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
