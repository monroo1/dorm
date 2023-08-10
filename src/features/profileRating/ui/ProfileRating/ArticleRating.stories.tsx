import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfileRating from "./ProfileRating";

const meta: Meta<typeof ProfileRating> = {
	title: "features/ProfileRating",
	component: ProfileRating,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Normal: Story = {
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
