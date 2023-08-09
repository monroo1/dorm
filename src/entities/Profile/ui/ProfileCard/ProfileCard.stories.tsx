import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import Avatar from "@/shared/assets/test/avatar.jpg";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
	title: "entities/ProfileCard",
	component: ProfileCard,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
	args: {
		data: {
			username: "admin",
			age: 22,
			country: Country.Armenia,
			city: "Moscow",
			currency: Currency.USD,
			first: "Andrey",
			lastname: "Monroo",
			avatar: Avatar,
		},
	},
};

export const WithError: Story = {
	args: {
		error: "true",
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const PrimaryDark: Story = {
	args: {
		data: {
			username: "admin",
			age: 22,
			country: Country.Armenia,
			city: "Moscow",
			currency: Currency.USD,
			first: "Andrey",
			lastname: "Monroo",
			avatar: Avatar,
		},
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const WithErrorDark: Story = {
	args: {
		error: "true",
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const LoadingDark: Story = {
	args: {
		isLoading: true,
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
