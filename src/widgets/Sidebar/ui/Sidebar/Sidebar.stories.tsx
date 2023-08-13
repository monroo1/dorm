import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Sidebar } from "./Sidebar";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Sidebar> = {
	title: "widgets/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const NoAuth: Story = {
	decorators: [
		StoreDecorator({}),
	],
};

export const Auth: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {},
			},
		}),
	],
};

export const NoAuthDark: Story = {
	decorators: [
		StoreDecorator({}),
		ThemeDecorator(Theme.DARK),
	],
};

export const AuthDark: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {},
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};
