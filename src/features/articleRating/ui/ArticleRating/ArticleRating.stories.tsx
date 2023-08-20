import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ArticleRating from "./ArticleRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticleRating> = {
	title: "features/ArticleRating",
	component: ArticleRating,
	tags: ["autodocs"],
	parameters: {
		fetchMock: {
			mocks: [
				{
					matcher: {
						name: "ArticleRating",
						url: `${__API__}/article-ratings`,
						query: {
							userId: "1",
							articleId: "1",
						},
					},
					response: {
						status: 304,
						body: [],
					},
				},
			],
		},
	},

};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
	args: {
		articleId: "1",
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: "1",
				},
			},
		}),
	],
};

export const FeedbackLeft: Story = {
	args: {
		articleId: "1",
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: "1",
				},
			},
		}),
	],
	parameters: {
		fetchMock: {
			mocks: [
				{
					matcher: {
						name: "ArticleRating",
						url: `${__API__}/article-ratings`,
						query: {
							userId: "1",
							articleId: "1",
						},
					},
					response: {
						status: 200,
						body: [
							{
								id: "1",
								articleId: "1",
								userId: "1",
								rate: 4,
								feedback: "Хорошая статья",
							},
						],
					},
				},
			],
		},
	},
};

export const Dark: Story = {
	args: {
		articleId: "1",
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: "1",
				},
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};
