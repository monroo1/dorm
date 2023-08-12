import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { UserRole } from "@/entities/User";
import avatarIcon from "@/shared/assets/test/avatar.jpg";
import { Navbar } from "./Navbar";

const notification = {
	id: "1",
	title: "Уведомление 1",
	description: "description Уведомление 1",
};

const meta: Meta<typeof Navbar> = {
	title: "widgets/Navbar",
	component: Navbar,
	tags: ["autodocs"],
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
					avatar: avatarIcon,
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
					avatar: avatarIcon,
				},
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const Admin: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					username: "Andrey",
					id: "1",
					roles: [UserRole.ADMIN],
					avatar: avatarIcon,
				},
			},
		}),
	],
};
