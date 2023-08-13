import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RatingCard } from "./RatingCard";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof RatingCard> = {
	title: "entities/Rating/RatingCard",
	component: RatingCard,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Normal: Story = {
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
