import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import Avatar from "shared/assets/test/avatar.jpg";
import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
	title: "entities/Comment/CommentCard",
	component: CommentCard,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
	args: {
		comment: {
			id: "1",
			text: "comment",
			user: {
				id: "1",
				username: "user",
				avatar: Avatar,
			},
		},
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const LoadingDark: Story = {
	args: {
		isLoading: true,
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const Dark: Story = {
	args: {
		comment: {
			id: "1",
			text: "comment",
			user: {
				id: "1",
				username: "user",
				avatar: Avatar,
			},
		},
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	args: {
		comment: {
			id: "1",
			text: "comment",
			user: {
				id: "1",
				username: "user",
				avatar: Avatar,
			},
		},
	},
	decorators: [
		ThemeDecorator(Theme.ORANGE),
	],
};
