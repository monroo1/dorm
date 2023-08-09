/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Button } from "../../../Button/Button";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
	title: "shared/Popover",
	component: Popover,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Normal: Story = {
	args: {
		trigger: <Button>Open</Button>,
		children: "asdasdasdasdasdasdsd",
	},
};

export const BottomLeft: Story = {
	args: {
		direction: "bottom left",
		trigger: <Button>Open</Button>,
		children: "asdasdasdasdasdasdsd",
	},
};

export const BottomRight: Story = {
	args: {
		direction: "bottom right",
		trigger: <Button>Open</Button>,
		children: "asdasdasdasdasdasdsd",
	},
};

export const TopLeft: Story = {
	args: {
		direction: "top left",
		trigger: <Button>Open</Button>,
		children: "asdasdasdasdasdasdsd",
	},
};

export const TopRight: Story = {
	args: {
		direction: "top right",
		trigger: <Button>Open</Button>,
		children: "asdasdasdasdasdasdsd",
	},
};

export const Dark: Story = {
	args: {
		trigger: <Button>Open</Button>,
		children: "asdasdasdasdasdasdsd",
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
