/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { ListBox } from "./ListBox";

const meta: Meta<typeof ListBox> = {
	title: "shared/ListBox",
	component: ListBox,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div style={{ padding: `${250}px` }}>{Story()}</div>
		),
	],
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

export const OptionsTopLeft: Story = {
	args: {
		items: options,
		value: Country.Armenia,
		direction: "top left",
	},
};

export const OptionsTopRight: Story = {
	args: {
		items: options,
		value: Country.Armenia,
		direction: "top right",
	},
};

export const OptionsBottomLeft: Story = {
	args: {
		items: options,
		value: Country.Armenia,
		direction: "bottom left",
	},

};

export const OptionsBottomRight: Story = {
	args: {
		items: options,
		value: Country.Armenia,
		direction: "bottom right",
	},
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