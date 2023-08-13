import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Tabs } from "./Tabs";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Tabs> = {
	title: "shared/Tabs",
	component: Tabs,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
	args: {
		tabs: [
			{
				value: "tab 1",
				content: "tab 1 c",
			},
			{
				value: "tab 2",
				content: "tab 2 c",
			},
			{
				value: "tab 3",
				content: "tab 3 c",
			},
		],
		value: "tab 2",
	},
};

export const Dark: Story = {
	args: {
		tabs: [
			{
				value: "tab 1",
				content: "tab 1 c",
			},
			{
				value: "tab 2",
				content: "tab 2 c",
			},
			{
				value: "tab 3",
				content: "tab 3 c",
			},
		],
		value: "tab 2",
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
