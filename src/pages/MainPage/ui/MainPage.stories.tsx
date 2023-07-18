import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({}),
	],
};

export const Dark: Story = {
	decorators: [
		StoreDecorator({}),
		ThemeDecorator(Theme.DARK),
	],
};
