import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { EditableProfileCard } from "./EditableProfileCard";

const meta: Meta<typeof EditableProfileCard> = {
	title: "features/EditableProfileCard",
	component: EditableProfileCard,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({

		}),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({}),
	],
};
