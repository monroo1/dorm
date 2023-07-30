/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { ListBox } from "./ListBox";
import { VStack } from "../Stack";

const meta: Meta<typeof ListBox> = {
	title: "shared/ListBox",
	component: ListBox,
	tags: ["autodocs"],
};

const options = [
	{ value: Country.Armenia, content: Country.Armenia },
	{ value: Country.Belarus, content: Country.Belarus },
	{ value: Country.Kazakhstan, content: Country.Kazakhstan },
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Ukraine, content: Country.Ukraine },
];

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {
	args: {
		items: options,
		value: Country.Armenia,
	},
};

export const NoValue: Story = {
	args: {
		items: options,
		defaultValue: "укажите страну",
	},
};

export const OptionsTop: Story = {
	args: {
		items: options,
		value: Country.Armenia,
		direction: "top",
	},
	decorators: [
		(Story) => (
			<VStack gap="32">
				<div style={{ marginBottom: `${150}px` }}>sdf</div>
				{Story()}
			</VStack>
		),
	],
};

export const Label: Story = {
	args: {
		items: options,
		value: Country.Armenia,
		label: "Укажите страну",
	},
};

export const LabelWithDisabled: Story = {
	args: {
		items: options,
		value: Country.Armenia,
		label: "Укажите страну",
		readonly: true,
	},
};

export const Dark: Story = {
	args: {
		items: options,
		value: Country.Armenia,
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};

export const Orange: Story = {
	args: {
		items: options,
		value: Country.Armenia,
	},
	decorators: [
		ThemeDecorator(Theme.ORANGE),
	],
};
