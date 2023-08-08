import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { NotificationButton } from "./NotificationButton";

const notification = {
	id: "1",
	title: "Уведомление 1",
	description: "description Уведомление 1",
};

const meta: Meta<typeof NotificationButton> = {
	title: "features/NotificationButton",
	component: NotificationButton,
	tags: ["autodocs"],
	decorators: [
		StoreDecorator({}),
	],
	parameters: {
		fetchMock: {
			mocks: [
				{
					matcher: {
						name: "NotificationList",
						url: `${__API__}/notifications`,
					},
					response: {
						status: 200,
						body: [
							notification,
							{ ...notification, id: "2" },
							{ ...notification, id: "3" },
						],
					},
				},
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

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

export const Loading: Story = {
	parameters: {
		fetchMock: {
			mocks: [
				{
					matcher: {
						name: "NotificationList",
						url: `${__API__}/notifications`,
					},
					response: {
						status: 200,
						body: [
							notification,
							{ ...notification, id: "2" },
							{ ...notification, id: "3" },
						],
					},
					options: {
						delay: 5000000,
					},
				},
			],
		},
	},
};
