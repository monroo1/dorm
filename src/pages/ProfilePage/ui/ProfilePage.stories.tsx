import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import Avatar from "shared/assets/test/avatar.jpg";
import { ValidateProfileError } from "entities/Profile";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
	title: "pages/ProfilePage",
	component: ProfilePage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const data = {
	username: "admin",
	age: 22,
	country: Country.Armenia,
	city: "Moscow",
	currency: Currency.USD,
	first: "Andrey",
	lastname: "Monroo",
	avatar: Avatar,
};

export const Primary: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				readonly: true,
				form: data,
			},
		}),
	],
};

export const Editing: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				readonly: false,
				form: data,
			},
		}),
	],
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				readonly: false,
				form: data,
				validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
			},
		}),
	],
};

export const PrimaryDark: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				readonly: true,
				form: data,
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const EditingDark: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				readonly: false,
				form: data,
			},
		}),
		ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				readonly: false,
				form: data,
				validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};
