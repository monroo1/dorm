import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfileRating from "./ProfileRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ProfileRating> = {
	title: "features/ProfileRating",
	component: ProfileRating,
	tags: ["autodocs"],
	decorators: [
		StoreDecorator({}),
	],
	parameters: {
		fetchMock: {
			mocks: [
				{
					matcher: {
						name: "ProfileRating",
						url: `${__API__}/profile-ratings`,
						query: {
							userId: "1",
							profileId: "2",
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
type Story = StoryObj<typeof ProfileRating>;

export const Normal: Story = {
	args: {
		profileId: "2",
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
		profileId: "2",
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
						name: "ProfileRating",
						url: `${__API__}/profile-ratings`,
						query: {
							userId: "1",
							profileId: "2",
						},
					},
					response: {
						status: 200,
						body: [
							{
								id: "1",
								profileId: "2",
								userId: "1",
								rate: 4,
								feedback: "Хороший профиль",
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
		profileId: "2",
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
