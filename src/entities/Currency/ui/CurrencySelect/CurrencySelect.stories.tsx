import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CurrencySelect } from "./CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
	title: "etities/CurrencySelect",
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
