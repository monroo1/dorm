import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article } from "@/entities/Article";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

const article: Article = {
	id: "1",
	img: "",
	createdAt: "",
	views: 123,
	user: { id: "1", username: "123" },
	blocks: [],
	type: [],
	title: "123",
	subtitle: "asdasdasd",
};

const meta: Meta<typeof ArticleRecommendationsList> = {
	title: "features/ArticleRecommendationsList",
	component: ArticleRecommendationsList,
	tags: ["autodocs"],
	parameters: {
		fetchMock: {
			mocks: [
				{
					matcher: {
						name: "ArticleRecommendationsList",
						url: `${__API__}/articles`,
						query: {
							_limit: 4,
						},
					},
					response: {
						status: 200,
						body: [
							article,
							{ ...article, id: "2" },
							{ ...article, id: "3" },
							{ ...article, id: "4" },
						],
					},
				},
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({}),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({}),
	],
};
