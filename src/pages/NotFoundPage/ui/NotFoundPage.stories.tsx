import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { NotFoundPage } from "./NotFoundPage";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof NotFoundPage> = {
	title: "pages/NotFoundPage",
	component: NotFoundPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({}),
	],
};

export const Dark: Story = {
	decorators: [
		StoreDecorator({}),
		ThemeDecorator(Theme.DARK),
	],
};
