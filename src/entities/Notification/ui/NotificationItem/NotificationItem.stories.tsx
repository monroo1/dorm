import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotificationItem } from "./NotificationItem";

const meta: Meta<typeof NotificationItem> = {
	title: "entities/Notification/NotificationItem",
	component: NotificationItem,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Normal: Story = {
	args: {
		item: {
			id: "1",
			title: "Уведомление 1",
			description: "description Уведомление 1",
		},
	},
};

export const Dark: Story = {
	args: {
		item: {
			id: "1",
			title: "Уведомление 1",
			description: "description Уведомление 1",
		},
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	args: {
		item: {
			id: "1",
			title: "Уведомление 1",
			description: "description Уведомление 1",
		},
	},
	decorators: [
		ThemeDecorator(Theme.ORANGE),
	],
};
