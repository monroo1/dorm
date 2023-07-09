import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
	title: "shared/Text",
	component: Text,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		title: "Title lorem ipsum",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
};

export const OnlyTitle: Story = {
	args: {
		title: "Title lorem ipsum",
	},
};

export const OnlyText: Story = {
	args: {
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
};

export const PrimaryDark: Story = {
	args: {
		title: "Title lorem ipsum",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
	args: {
		title: "Title lorem ipsum",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
	args: {
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
	args: {
		title: "Title lorem ipsum",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
		theme: TextTheme.ERROR,
	},
};

export const ErrorDark: Story = {
	args: {
		title: "Title lorem ipsum",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
		theme: TextTheme.ERROR,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
