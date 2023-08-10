import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { RatingCard } from "./RatingCard";

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
