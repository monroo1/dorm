import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ArticlesPage from "./ArticlesPage";

const meta: Meta<typeof ArticlesPage> = {
	title: "pages/ArticlesPage",
	component: ArticlesPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
	// todo
};

export const Dark: Story = {
	// todo
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	// todo
	decorators: [
		ThemeDecorator(Theme.ORANGE),
	],
};

export const NormalLoading: Story = {
};

export const DarkLoading: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const OrangeLoading: Story = {
	decorators: [
		ThemeDecorator(Theme.ORANGE),
	],
};
