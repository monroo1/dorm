import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import AddCommentForm from "./AddCommentForm";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AddCommentForm> = {
	title: "features/AddCommentForm",
	component: AddCommentForm,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {
	args: {
	},
	decorators: [StoreDecorator({
		addCommentForm: {
			text: "asv",
			error: undefined,
		},
	})],
};

export const Dark: Story = {
	args: {
	},
	decorators: [
		StoreDecorator({
			addCommentForm: {
				text: "asv",
				error: undefined,
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	args: {
	},
	decorators: [
		StoreDecorator({
			addCommentForm: {
				text: "asv",
				error: undefined,
			},
		}),
		ThemeDecorator(Theme.ORANGE),
	],
};
