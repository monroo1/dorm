import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticleDetailsPageHeader> = {
	title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
	component: ArticleDetailsPageHeader,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: "1",
				},
			},
			articleDetails: {
				data: {
					user: {
						id: "1",
					},
				},
			},
		}),
	],
};

export const Dark: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: "1",
				},
			},
			articleDetails: {
				data: {
					user: {
						id: "1",
					},
				},
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: "1",
				},
			},
			articleDetails: {
				data: {
					user: {
						id: "1",
					},
				},
			},
		}),
		ThemeDecorator(Theme.ORANGE),
	],
};
