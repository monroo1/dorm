import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { PageLoader } from "./PageLoader";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof PageLoader> = {
	title: "widgets/PageLoader",
	component: PageLoader,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Normal: Story = {};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};
