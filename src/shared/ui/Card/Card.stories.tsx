/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Card } from "./Card";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
	title: "shared/Card",
	component: Card,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
	args: {
		children: (<Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />),
	},
};

export const Dark: Story = {
	args: {
		children: (<Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />),
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
	args: {
		children: (<Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />),
	},
	decorators: [ThemeDecorator(Theme.ORANGE)],
};
