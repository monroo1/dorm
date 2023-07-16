import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import Avatar from "shared/assets/test/avatar.jpg";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
	title: "entities/CommentList",
	component: CommentList,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
	args: {
		comments: [
			{
				id: "1",
				text: "comment",
				user: {
					id: "1",
					username: "user",
					avatar: Avatar,
				},
			},
			{
				id: "2",
				text: "comment 1",
				user: {
					id: "2",
					username: "tolik",
					avatar: Avatar,
				},
			},
			{
				id: "3",
				text: "comment 2",
				user: {
					id: "1",
					username: "user",
					avatar: Avatar,
				},
			},
		],
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
		comments: [
			{
				id: "1",
				text: "comment",
				user: {
					id: "1",
					username: "user",
					avatar: Avatar,
				},
			},
			{
				id: "2",
				text: "comment 1",
				user: {
					id: "2",
					username: "tolik",
					avatar: Avatar,
				},
			},
			{
				id: "3",
				text: "comment 2",
				user: {
					id: "1",
					username: "user",
					avatar: Avatar,
				},
			},
		],
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	args: {
		comments: [
			{
				id: "1",
				text: "comment",
				user: {
					id: "1",
					username: "user",
					avatar: Avatar,
				},
			},
			{
				id: "2",
				text: "comment 1",
				user: {
					id: "2",
					username: "tolik",
					avatar: Avatar,
				},
			},
			{
				id: "3",
				text: "comment 2",
				user: {
					id: "1",
					username: "user",
					avatar: Avatar,
				},
			},
		],
	},
	decorators: [
		ThemeDecorator(Theme.ORANGE),
	],
};
