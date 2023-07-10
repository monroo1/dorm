import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
	title: "features/LoginForm",
	component: LoginForm,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
	decorators: [
		StoreDecorator({ loginForm: { username: "andrey", password: "1234" } }),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({ loginForm: { username: "andrey", password: "1234" } }),
	],
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				username: "andrey",
				password: "1234",
				error: "Вы ввели неверный логин или пароль",
			},
		}),
	],
};

export const ErrorDark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			loginForm: {
				username: "andrey",
				password: "1234",
				error: "Вы ввели неверный логин или пароль",
			},
		}),
	],
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				username: "andrey",
				password: "1234",
				isLoading: true,
			},
		}),
	],
};

export const LoadingDark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			loginForm: {
				username: "andrey",
				password: "1234",
				isLoading: true,
			},
		}),
	],
};

export const LoadingError: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				username: "andrey",
				password: "1234",
				isLoading: true,
				error: "Вы ввели неверный логин или пароль",
			},
		}),
	],
};

export const LoadingErrorDark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			loginForm: {
				username: "andrey",
				password: "1234",
				isLoading: true,
				error: "Вы ввели неверный логин или пароль",
			},
		}),
	],
};
