import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CountrySelect } from "./CountrySelect";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof CountrySelect> = {
	title: "entities/CountrySelect",
	component: CountrySelect,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
