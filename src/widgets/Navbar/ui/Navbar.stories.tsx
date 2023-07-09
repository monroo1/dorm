import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
	title: "widget/Navbar",
	component: Navbar,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LightUnauth: Story = {
	decorators: [
		StoreDecorator({}),
	],
};

export const DarkUnauth: Story = {
	decorators: [
		StoreDecorator({ }),
		ThemeDecorator(Theme.DARK),
	],
};

export const LightAuth: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					username: "Andrey",
					id: "1",
				},
			},
		}),
	],
};

export const DarkAuth: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					username: "Andrey",
					id: "1",
				},
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};
