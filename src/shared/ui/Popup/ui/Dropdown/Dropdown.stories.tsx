/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Dropdown } from "./Dropdown";
import { Button } from "../../../Button/Button";

const meta: Meta<typeof Dropdown> = {
	title: "shared/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
	args: {
		trigger: <Button>Open</Button>,
		items: [
			{
				content: "first",
			},
			{
				content: "second",
			},
			{
				content: "third",
			},
		],
	},
};

export const BottomLeft: Story = {
	args: {
		direction: "bottom left",
		trigger: <Button>Open</Button>,
		items: [
			{
				content: "first",
			},
			{
				content: "second",
			},
			{
				content: "third",
			},
		],
	},
};

export const BottomRight: Story = {
	args: {
		direction: "bottom right",
		trigger: <Button>Open</Button>,
		items: [
			{
				content: "first",
			},
			{
				content: "second",
			},
			{
				content: "third",
			},
		],
	},
};

export const TopLeft: Story = {
	args: {
		direction: "top left",
		trigger: <Button>Open</Button>,
		items: [
			{
				content: "first",
			},
			{
				content: "second",
			},
			{
				content: "third",
			},
		],
	},
};

export const TopRight: Story = {
	args: {
		direction: "top right",
		trigger: <Button>Open</Button>,
		items: [
			{
				content: "first",
			},
			{
				content: "second",
			},
			{
				content: "third",
			},
		],
	},
};

export const Dark: Story = {
	args: {
		trigger: <Button>Open</Button>,
		items: [
			{
				content: "first",
			},
			{
				content: "second",
			},
			{
				content: "third",
			},
		],
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
