import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CurrencySelect } from "./CurrencySelect";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof CurrencySelect> = {
	title: "entities/CurrencySelect",
	component: CurrencySelect,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
